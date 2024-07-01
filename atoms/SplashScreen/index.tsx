import { Header } from "../../organisms/Header"
import { Suspense } from "react"

export interface Interface {

}

const SplashScreen = ({ }: Interface) => {
  return (
    <>
      <Header.Guest />
      <Suspense />
    </>
  )
}

export default SplashScreen