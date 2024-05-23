import { Form, Formik } from "formik"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"
import { dispatchAddNotification } from "../../features/toaster/toasterDispatcher"
import OrderBookTable from "./orderBookTable"
import { ButtonDefaultInterface } from "../../interfaces"
import { useState } from "react"
import { Decimal, Mask, Parser } from "../../helpers/Mask"
import OrdersOpened from "./ordersOpened"
import { useMutation, useQuery, useQueryClient } from "react-query"
import Order from "../../entities/Order"
import UserAccount from "../../entities/UserAccount"

interface Interface {
  children?: JSX.Element | JSX.Element[]
}

export interface ExchangeFormIntercace {
  isLimitOrder: boolean
  isBuyOrder: boolean
  limit: string
  total: string
  quantity: string
}

const ExchangeForm = ({ children }: Interface) => {
  const newOrder = new Order
  const queryClient = useQueryClient();
  const [showPanel, setShowPanel] = useState<"OrderBook" | "OrdersOpened" | "OrderHistory">("OrderBook")

  const newUserAccount = new UserAccount
  const { data } = useQuery("userAccount", () => newUserAccount.list(), { staleTime: Infinity, cacheTime: Infinity })

  const debitAccount = data?.find((value) => value.name === "BRL")
  const creditAccount = data?.find((value) => value.name === "USDT")

  const initialValues: ExchangeFormIntercace = {
    isLimitOrder: true,
    isBuyOrder: true,
    limit: "",
    total: "",
    quantity: "",
  }

  const mutation = useMutation(newOrder.place, {
    onSuccess: ({ status, uuid }) => {
      const eventSource = new EventSource(`${import.meta.env.VITE_API}/order/sse/${uuid}`)

      eventSource.addEventListener('message', (event) => {
        const data = JSON.parse(event.data)

        if (data.status === "OPEN") {
          queryClient.refetchQueries({ queryKey: ['ordersOpened'] })
        }

        if (data.status === "FILLED") {
          queryClient.refetchQueries({ queryKey: ['ordersOpened'] })
          queryClient.refetchQueries({ queryKey: ['userAccount'] })
          eventSource.close()
          dispatchAddNotification({
            subtitle: `Ordem ${uuid} executada`,
            text: `Status: ${data.status}`,
            subtext: "",
            toasterStyle: { type: "success" },
            active: true,
          })
        }

        if (data.status === "No funds") {
          eventSource.close()
          dispatchAddNotification({
            subtitle: `Ordem ${uuid}`,
            text: `Status: ${data.status}`,
            subtext: "",
            toasterStyle: { type: "alert" },
            active: true,
          })
        }

        console.log(data)
      })

      eventSource.addEventListener('error', (error) => console.log(error))

      queryClient.refetchQueries({ queryKey: ['ordersOpened'] })
      dispatchAddNotification({
        subtitle: `Ordem ${uuid} criada`,
        text: `Status: ${status}`,
        subtext: "Acompanhe em sua lista de ordens abertas",
        toasterStyle: { type: "success" },
        active: true,
      })
    },
  })

  const buttons: ButtonDefaultInterface[] = [
    { text: "Livro de Ofertas", buttonStyle: { type: "button", active: true, secondary: !(showPanel === "OrderBook") }, onClick: () => { setShowPanel("OrderBook") } },
    { text: "Ordens Abertas", buttonStyle: { type: "button", active: true, secondary: !(showPanel === "OrdersOpened") }, onClick: () => { setShowPanel("OrdersOpened") } },
    { text: "Ordens Executadas", buttonStyle: { type: "button", active: true, secondary: !(showPanel === "OrderHistory") }, onClick: () => { setShowPanel("OrderHistory") } },
  ]

  function handleQuantity(total: string, limit: string) {
    return Mask.currency(Parser.unmasker(total) / Parser.unmasker(limit), Decimal.BRL, "USD")
  }

  function handleTotal(quantity: string, limit: string) {
    return Mask.currency(Parser.unmasker(quantity, "US$") * Parser.unmasker(limit))
  }

  return (
    <>
      {data && debitAccount && creditAccount &&
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => mutation.mutate({
            account_debit: debitAccount?.uuid,
            account_credit: creditAccount?.uuid,
            amount: Parser.unmasker(values.quantity, "US$"),
            price: Number((Parser.unmasker(values.limit, "R$"))),
            type: values.isLimitOrder ? "LIMIT" : "MARKET",
            side: values.isBuyOrder ? "BUY" : "SELL",
          })}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>
              {children}
              <main>
                <section>
                  {values.isLimitOrder &&
                    <Input
                      onChange={(value: string) => setFieldValue("total", handleTotal(values.quantity, value))}
                      mask={"currency"}
                      maskConfig="usdQuote"
                      label="Preço Limite"
                      name={"limit"}
                      type={"text"}
                      inputMode={"numeric"}
                    />
                  }
                  <Input
                    onChange={(value: string) => setFieldValue("total", handleTotal(value, values.limit))}
                    mask={"currency"}
                    maskConfig="usdCurrency"
                    label="Quantidade: Tether"
                    name={"quantity"}
                    type={"text"}
                    inputMode={"numeric"}
                  />
                  <Input
                    onChange={(value: string) => setFieldValue("quantity", handleQuantity(value, values.limit))}
                    mask={"currency"}
                    label="Quantidade: Reais"
                    name={"total"}
                    type={"text"}
                    inputMode={"numeric"}
                  />
                </section>
                <Button.Default
                  text={values.isBuyOrder ? "Comprar" : "Vender"}
                  buttonStyle={{
                    active: (!mutation.isLoading && !!values.limit && !!values.quantity || !!values.total),
                    isLoading: mutation.isLoading,
                    type: "submit",
                    color: values.isBuyOrder ? "#0D9E00" : "#FF2F21",
                  }}
                />
              </main>
              <aside>
                <Button.Panel buttons={buttons} />
                {showPanel === "OrderBook" && <OrderBookTable />}
                {showPanel === "OrdersOpened" && <OrdersOpened />}
                {showPanel === "OrderHistory" && <OrdersOpened />}
              </aside>
            </Form>
          )}
        </Formik>
      }
    </>
  )
}

export default ExchangeForm