import { MdArrowBack, MdMenu } from "react-icons/md"
import { Header } from "../../components/organisms/Header"
import AuthTemplate, { routeIcons } from "../../templates/AuthTemplate"
import { useNavigate } from "react-router-dom"
import { Row } from "../../components/organisms/Row"
import { MenuRowInterface } from "../../interfaces"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { ElementType } from "../../routes"
import { theme } from "../../providers/theme"


interface Interface {

}

const Menu = ({ }: Interface) => {
  const navigate = useNavigate()
  const { routes } = useSelector((state: RootState) => state.routes);

  const isElementType = (element: string): element is ElementType => element in routeIcons

  const items: MenuRowInterface[] = routes.filter((route) => route.detail).map((route) => {
    return {
      title: route.label,
      text: route.detail ?? "teste",
      icon: isElementType(route.element) ? routeIcons[route.element] : MdMenu,
      iconSize: Number(theme.fontsizes.title.bigger.match(/\d+/)),
      onClick: () => navigate(route.path)
    }
  })

  return (
    <AuthTemplate>
      <Header.WithIcon
        iconBefore
        text="Menu"
        icon={MdArrowBack}
        iconSize={24}
        onClick={() => navigate('/dashboard')}
      />
      <main>
        <Row.Menu items={items} />
      </main>
    </AuthTemplate>
  )
}

export default Menu