import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"
import { FileSharer } from "@byteowls/capacitor-filesharer"

const print = (
  name: string,
  id: string,
): void => {
  const element = document.querySelector(`#${id}`)
  const isVoucher = id === "voucher-template"
  const pageSize = isVoucher ? [210, 297] : [297, 210]
  const orientation = isVoucher ? "p" : "l"

  html2canvas(element as HTMLElement).then((canvas) => {
    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF(orientation, "mm", pageSize)

    const pageWidth = pageSize[0]
    const pageHeight = pageSize[1]
    const widthRatio = pageWidth / canvas.width
    const heightRatio = pageHeight / canvas.height
    const ratio = widthRatio > heightRatio ? heightRatio : widthRatio
    const canvasWidth = isVoucher ? 100 : canvas.width * ratio
    const canvasHeight = isVoucher ? 0 : canvas.height * ratio
    const marginX = isVoucher ? (pageWidth - canvasWidth) / 2 : 0

    pdf.addImage(imgData, "JPEG", marginX, 1, canvasWidth, canvasHeight)

    pdf.save(name + ".pdf")
  })
}

const shareMobile = async (fileName: string, base64Data: string) => {
  FileSharer.share({
    filename: fileName,
    contentType: "image/png",
    base64Data: `${base64Data.replace(/^data:image\/[a-z]+;base64,/, "")}`,
  })
}

export { print, shareMobile }
