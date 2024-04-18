import Template from "../../templates/Template"
import Text from "../../components/atoms/Text"
import Icon from "../../components/atoms/Icon"

const Error = () => {
    return (
        <Template>
            <Text>
                <Icon icon="InfoCircle" color={"#FF0000"} width={20} />
                Ocorreu um erro durante o carregamento desta página. Por favor tente mais tarde.
            </Text>
        </Template>
    )
}

export default Error