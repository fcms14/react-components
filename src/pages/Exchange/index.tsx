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
import { Row } from "../../components/organisms/Row"
const Exchange = () => {
  const { data, isLoading, refetch } = useQuery("orderBook", () => newOrderBook.getBook({ symbol: "BTCUSDT" }), { cacheTime: 1000, staleTime: 1000 })
  const navigate = useNavigate()
  const loop = Array.from({ length: 10 }, (_, i) => i )
  const ticker = "btcusdt"
  const [bids,setBids] = useState()
  const [asks,setAsks] = useState()
  


  useEffect(() => {
    if(!data){
      return   
    }

    const topVendas = data?.data.asks.slice(0, 10)
    const topCompras = data?.data.bids.slice(0, 10)
  
    //Converter em float
    for (let i = 0; i < topVendas.length; i++) {
      for (let j = 0; j < topVendas[i].length; j++) {
          topVendas[i][j] = parseFloat(topVendas[i][j]).toFixed(2);
          topCompras[i][j] = parseFloat(topCompras[i][j]).toFixed(2);
      }
    } 

      //Top 10
      setBids(topCompras);
      setAsks(topVendas);

  },[data]) 
  
  

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
        <Row.FourColumnRow borderBotom text = {["Total","Preço", "Preço", "Total"]} color ={["","","",""]} />      
        <>
        { 
          asks && bids &&    
          loop.map((i) =>   <Row.FourColumnRow key={i} borderBotom text = {[asks[i][1],asks[i][0], bids[i][0], bids[i][1]]} color ={["red","red","green","green"]} />    )
        }
        </>        
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