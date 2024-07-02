import { isMobile } from "react-device-detect"
import { print, shareMobile } from "./pdf-generator/helper"
import html2canvas from "html2canvas"

export const share = (authentication: string, setDisplay: (value: string) => void) => {
    setDisplay("")
    if (isMobile) {
        const element = document.querySelector("#payment-voucher")
        html2canvas(element as HTMLElement).then((canvas) => {
            shareMobile(
                `reset-comprovante-${authentication}.png`,
                canvas.toDataURL("image/png")
            )
        })
    }

    if (!isMobile) {
        setTimeout(async () => {
            print(`reset-comprovante-${authentication}`, "voucher-template")
            setDisplay("none")
        }, 1000)
    }
}