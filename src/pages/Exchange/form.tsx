import Input from "../../components/atoms/Input"
import { Button } from "../../components/organisms/Button"

const ExchangeForm = () => {
  return (
    <>
      <form>
        <Input label="Valor Limite" inputStyle={{ name: "Teste1", type: "text" }} />
        <Input label="Quantidade" inputStyle={{ name: "Teste2", type: "text" }} />
        <Input label="Volume" inputStyle={{ name: "Teste3", type: "text" }} />
      </form>
      <Button.Default
        text="Comprar"
        onClick={() => alert("ordem enviada")}
        buttonStyle={{
          active: true,
          color: "#0d9e00",
          // secondary: false,
          loading: false
        }}
      />
    </>
  )
}

export default ExchangeForm