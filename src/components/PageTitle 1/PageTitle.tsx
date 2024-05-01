import Icon from "../atoms/Icon"
import Text from "../atoms/Text"
import Title from "../atoms/Title"
import { PageTitleInterface } from "./PageTitleInterface"
import PageTitleStyle from "./PageTitleStyle"
import Link from "../atoms/Link"
import Progress from "../atoms/Progress"

const PageTitle = (props: PageTitleInterface) => {
    const { backIcon, title, description, steps, current, onClick, onAction, actionIcon, titleAlign } = props
    const hasCloseIcon = props?.closeIcon ?? true

    return (
        <PageTitleStyle titleAlign={titleAlign}>
            <header>
                {backIcon && <Link onClick={onClick}> <Icon icon="MdArrowBack" width={20} /> </Link>}
                {(!backIcon && hasCloseIcon) ? <div style={{ width: "20px" }}> </div> : <></>}

                <Title size="xs" noHeader> {title} </Title>

                {hasCloseIcon && <Link onClick={onAction || toggleSidePanelVisibility}> <Icon icon={actionIcon || "MdClose"} width={20} /> </Link>}
                {(!hasCloseIcon && backIcon) ? <div style={{ width: "20px" }}> </div> : <></>}
            </header>

            <section>
                {steps && current && <Progress title="" total={steps} current={current} />}
            </section>

            <main>
                {description && <Text size="sm"> {description} </Text>}
            </main>
        </PageTitleStyle>
    )
}

export default PageTitle