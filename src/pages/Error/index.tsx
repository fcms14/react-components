import Auth from "../../templates/Auth"
import Text from "../../components/atoms/Text"
// import ResetTheme from "../../providers/theme"
import Icon from "../../components/atoms/Icon"

const Error = () => {
    return (
        <Auth>
            <Text>
                <Icon icon="InfoCircle" color={"#FF0000"} width={20} />
                Ocorreu um erro durante o carregamento desta página. Por favor tente mais tarde.
            </Text>
        </Auth>
    )
}

export default Error