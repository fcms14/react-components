import { Form, Formik } from "formik"
import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"
import { dispatchAddNotification } from "../../features/toaster/toasterDispatcher"
import OrderBookTable from "./orderBookTable"
import { ButtonDefaultInterface, Sort } from "../../interfaces"
import { useState } from "react"
import { Decimal, Fractions, Mask, Parser } from "../../helpers/Mask"
import OrdersList from "./ordersList"
import { useMutation, useQuery, useQueryClient } from "react-query"
import Order from "../../entities/Order"
import UserAccount from "../../entities/UserAccount"
import { Row } from "../../components/molecules/Row"
import OrderBook from "../../entities/OrderBook"
import { sse } from "./eventListener"
import { ExchangeOrderValidator } from "../../validators"
import { dispatchHideAlerts, dispatchSetAlerts } from "../../features/alert/alertDispatcher"
import { theme } from "../../providers/theme"
import SplashScreen from "../../components/atoms/SplashScreen"

interface Interface {
  children?: JSX.Element | JSX.Element[]
  ticker: keyof typeof Fractions
}

export interface ExchangeFormIntercace {
  marketQuote: string
  isLimitOrder: boolean
  isBuyOrder: boolean
  limit: string
  total: string
  quantity: string
}

const ExchangeForm = ({ children, ticker }: Interface) => {
  const [showPanel, setShowPanel] = useState<"OrderBook" | "OrdersOpened" | "OrderHistory">("OrderBook")
  const queryClient = useQueryClient();

  const newUserAccount = new UserAccount
  const newOrderBook = new OrderBook
  const newOrder = new Order

  const { data: userAccounts, isLoading: loadingAccounts } = useQuery("userAccount", () => newUserAccount.list(), { staleTime: Infinity, cacheTime: Infinity })
  const { data: book, isLoading: loadingBook } = useQuery("orderBook", () => newOrderBook.list({ symbol: ticker, limit: 10 }), { refetchInterval: 5000 })

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

  function handleQuantity(total: string, limit: string): string {
    return (Parser.unmasker(total) / Parser.unmasker(limit) || 0).toFixed(Fractions[ticker])
  }

  function handleTotal(quantity: string, limit: string): string {
    return Mask.currency(Number(quantity) * Parser.unmasker(limit))
  }

  return (
    <>
      {(loadingAccounts || loadingBook) && <SplashScreen showHeader={false} />}
      {userAccounts && debitAccount && creditAccount &&
        <Formik
          initialValues={initialValues}
          validationSchema={ExchangeOrderValidator}
          onSubmit={(values) =>
            dispatchSetAlerts({
              buttons: [
                {
                  text: "Cancelar",
                  buttonStyle: { type: "button", active: true, secondary: false, color: theme.colorDefault.error },
                  onClick: () => { dispatchHideAlerts() },
                },
                {
                  text: "Confirmar",
                  buttonStyle: { type: "button", active: true, secondary: false },
                  onClick: () => {
                    mutation.mutate({
                      account_debit: debitAccount?.uuid,
                      account_credit: creditAccount?.uuid,
                      amount: values.isLimitOrder ? Number(values.quantity) : Parser.unmasker(values.total),
                      price: Number((Parser.unmasker(values.limit, "R$"))) || undefined,
                      type: values.isLimitOrder ? "LIMIT" : "MARKET",
                      side: values.isBuyOrder ? "BUY" : "SELL",
                    })
                    dispatchHideAlerts()
                  },
                }
              ],
              show: true,
              title: "Enviar ordem",
              text: `Enviar order de ${values.isBuyOrder ? "compra" : "venda"} no valor de ${values.total}`
            })
          }
        >
          {({ values, errors, setFieldValue, isValid }) => {
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
                      error={errors.limit}
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
                    mask={"number"}
                    maskConfig="number"
                    label={`Quantidade: Tether${values.isLimitOrder ? "" : " (aprox)"}`}
                    name={"quantity"}
                    type={"number"}
                    inputMode={"numeric"}
                    error={errors.quantity}
                  />
                  <Input
                    onChange={(value: string) => setFieldValue("quantity", handleQuantity(value, values.isLimitOrder ? values.limit : values.marketQuote))}
                    mask={"currency"}
                    label={"Quantidade: Reais"}
                    name={"total"}
                    type={"text"}
                    inputMode={"numeric"}
                    error={errors.total}
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
                        ? theme.colorDefault.buy : `${theme.colorDefault.buy}95`
                      : isValid
                        ? theme.colorDefault.sell : `${theme.colorDefault.sell}95`,
                  }}
                />
              </main>
              <aside>
                <Button.Panel buttons={buttons} />
                {showPanel === "OrderBook" && <OrderBookTable ticker={ticker} />}
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