import ViewPort from "../../templates/ViewPort"
import Text from "../../components/atoms/Text"
import Icon from "../../components/atoms/Icon"
import { MdInfo } from "react-icons/md"

const Error = () => {
    return (
        <ViewPort>
            <Text>
                <Icon icon={MdInfo} color={"#FF0000"} width={20} />
                Ocorreu um erro durante o carregamento desta página. Por favor tente mais tarde.
            </Text>
        </ViewPort>
    )
}

export default Error