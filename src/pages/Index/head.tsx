import { Header } from "../../components/molecules/Header"

const Head = () => {
    return (
        <Header.Root>
            <Header.Icon width={"22px"} icon="MdArrowBack" onClick={() => console.log(1)} />
            <Header.Title > Header </Header.Title>
            {/* <Header.Icon width={"22px"} icon="MdClose" onClick={() => console.log(1)} /> */}
            <Header.Icon width={"22px"} icon="MdClose" />
            {/* <Header.Spacer /> */}
        </Header.Root>
    )
}

export default Head