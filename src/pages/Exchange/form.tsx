import { Form, Formik } from "formik"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"
import { dispatchAddNotification } from "../../features/toaster/toasterDispatcher"
import OrderBookTable from "./orderBookTable"
import { ButtonDefaultInterface, Sort } from "../../interfaces"
import { useState } from "react"
import { Decimal, Mask, Parser } from "../../helpers/Mask"
import OrdersList from "./ordersList"
import { useMutation, useQuery, useQueryClient } from "react-query"
import Order from "../../entities/Order"
import UserAccount from "../../entities/UserAccount"
import { Row } from "../../components/molecules/Row"
import OrderBook from "../../entities/OrderBook"
import { sse } from "./eventListener"
import { ExchangeOrderValidator } from "../../validators"

interface Interface {
  children?: JSX.Element | JSX.Element[]
}

export interface ExchangeFormIntercace {
  marketQuote: string
  isLimitOrder: boolean
  isBuyOrder: boolean
  limit: string
  total: string
  quantity: string
}

const ExchangeForm = ({ children }: Interface) => {
  const [showPanel, setShowPanel] = useState<"OrderBook" | "OrdersOpened" | "OrderHistory">("OrderBook")
  const queryClient = useQueryClient();

  const newUserAccount = new UserAccount
  const newOrderBook = new OrderBook
  const newOrder = new Order

  const ticker = "USDTBRL"

  const { data: userAccounts } = useQuery("userAccount", () => newUserAccount.list(), { staleTime: Infinity, cacheTime: Infinity })
  const { data: book } = useQuery("orderBook", () => newOrderBook.list({ symbol: ticker, limit: 10 }), { refetchInterval: 5000 })

  const debitAccount = userAccounts?.find((value) => value.name === "BRL")
  const creditAccount = userAccounts?.find((value) => value.name === "USDT")

  const initialValues: ExchangeFormIntercace = {
    marketQuote: "",
    isLimitOrder: true,
    isBuyOrder: true,
    limit: "",
    total: "",
    quantity: "",
  }

  const mutation = useMutation(newOrder.place, {
    onSuccess: ({ status, uuid }) => {
      sse(uuid, queryClient)

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
    return Mask.currency(Parser.unmasker(total) / Parser.unmasker(limit) || 0, Decimal.BRL, "USD")
  }

  function handleTotal(quantity: string, limit: string) {
    return Mask.currency(Parser.unmasker(quantity, "US$") * Parser.unmasker(limit))
  }

  return (
    <>
      {userAccounts && debitAccount && creditAccount &&
        <Formik
          initialValues={initialValues}
          validationSchema={ExchangeOrderValidator}
          onSubmit={(values) => mutation.mutate({
            account_debit: debitAccount?.uuid,
            account_credit: creditAccount?.uuid,
            amount: values.isLimitOrder ? Parser.unmasker(values.quantity, "US$") : Parser.unmasker(values.total),
            price: Number((Parser.unmasker(values.limit, "R$"))) || undefined,
            type: values.isLimitOrder ? "LIMIT" : "MARKET",
            side: values.isBuyOrder ? "BUY" : "SELL",
          })}
        >
          {({ values, errors, touched, setFieldValue, isValid }) => {
            values.marketQuote = values.isBuyOrder
              ? Mask.currency(Number(book?.asks[0][0]), Decimal.USDT)
              : Mask.currency(Number(book?.bids[0][0]), Decimal.USDT)

            return (<Form>
              {children}
              <main>
                <section>
                  {values.isLimitOrder ?
                    <Input
                      onChange={(value: string) => setFieldValue("total", handleTotal(values.quantity, value))}
                      mask={"currency"}
                      maskConfig="usdQuote"
                      label="Preço Limite"
                      name={"limit"}
                      type={"text"}
                      inputMode={"numeric"}
                      error={errors.limit && touched.limit && errors.limit}
                    />
                    :
                    <>
                      <Row.Root>
                        <div></div>
                        <Row.Section>
                          <Row.Text size="small"> Cotação </Row.Text>
                          <Row.Title size="small"> {values.marketQuote} </Row.Title>
                        </Row.Section>
                      </Row.Root>
                    </>
                  }
                  <Input
                    onChange={(value: string) => setFieldValue("total", handleTotal(value, values.isLimitOrder ? values.limit : values.marketQuote))}
                    mask={"currency"}
                    maskConfig="usdCurrency"
                    label={`Quantidade: Tether${values.isLimitOrder ? "" : " (aprox)"}`}
                    name={"quantity"}
                    type={"text"}
                    inputMode={"numeric"}
                    error={errors.quantity && touched.quantity && errors.quantity}
                  />
                  <Input
                    onChange={(value: string) => setFieldValue("quantity", handleQuantity(value, values.isLimitOrder ? values.limit : values.marketQuote))}
                    mask={"currency"}
                    label={"Quantidade: Reais"}
                    name={"total"}
                    type={"text"}
                    inputMode={"numeric"}
                    error={errors.total && touched.total && errors.total}
                  />
                </section>
                <Button.Default
                  text={values.isBuyOrder ? "Comprar" : "Vender"}
                  buttonStyle={{
                    active: (!mutation.isLoading && isValid),
                    isLoading: mutation.isLoading,
                    type: "submit",
                    color: values.isBuyOrder
                      ? isValid
                        ? "#0D9E00" : "#0D9E0095"
                      : isValid
                        ? "#FF2F21" : "#FF2F2195",
                  }}
                />
              </main>
              <aside>
                <Button.Panel buttons={buttons} />
                {showPanel === "OrderBook" && <OrderBookTable />}
                {showPanel === "OrdersOpened" && <OrdersList listOptions={{ status: "OPEN", limit: 100, page: 1, price: Sort.desc }} />}
                {showPanel === "OrderHistory" && <OrdersList listOptions={{ status: "FILLED", limit: 100, page: 1 }} />}
              </aside>
            </Form>
            )
          }}
        </Formik>
      }
    </>
  )
}

export default ExchangeForm