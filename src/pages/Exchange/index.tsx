import ViewPort from "../../templates/ViewPort"
import Subtitle from "../../components/atoms/Subtitle"
import { Header } from "../../components/organisms/Header"
import ExchangeBalances from "./balances"
import OrderSelectorType from "./orderSelectorType"
import { useNavigate } from "react-router-dom"
import ExchangeForm from "./form"
import { MdArrowBack, MdClose } from "react-icons/md"
import { useQuery } from "react-query"
import { newOrderBook } from "../../entities/OrderBook"
import { useEffect, useState } from "react"

const Exchange = () => {
  const navigate = useNavigate()
  const ticker = "btcusdt"
  const { data, isLoading, refetch } = useQuery(["orderBook"], () => newOrderBook.getBook({ symbol: "BTCUSDT" }), { cacheTime: 30000, staleTime: 30000 })

  const [ws, setWs] = useState<any>();
  const [message, setMessage] = useState('');
  const [orderBook, setOrderbook] = useState<any>()

  useEffect(() => {
    if (data) {
      setOrderbook(data)
    }
  }, [data])

  useEffect(() => {
    const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${ticker}@ticker`);
    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);


  useEffect(() => {
    if (!ws) return;

    ws.onopen = () => { console.log('WebSocket connected'); };
    ws.onmessage = (event: any) => {
      if (!orderBook) return
      console.log('Message received:', event.data);

      // const newOrderBook = 
      // setOrderbook(newOrderBook)

      // Handle received message here
    };

    ws.onerror = (error: any) => {
      console.error('WebSocket error:', error);
      refetch()
    };

    ws.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      ws.onopen = null;
      ws.onmessage = null;
      ws.onerror = null;
      ws.onclose = null;
    };
  }, [ws]);

  // console.log(orderBook)

  return (
    <ViewPort>
      <Header.WithTwoIcons
        text="Negociar - Tether"
        leftIcon={MdArrowBack}
        rightIcon={MdClose}
        iconSize={24}
        leftClick={() => navigate('/')}
        rightClick={() => navigate('/')}
      />
      <main>
        <ExchangeForm>
          <ExchangeBalances />
          <OrderSelectorType />
        </ExchangeForm>
      </main>
      <footer>
        <Subtitle size="big">Menu</Subtitle>
      </footer>
    </ViewPort>
  )
}

export default Exchange