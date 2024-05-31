import { ApiReferenceReact } from "@scalar/api-reference-react"
import { isMobile } from "react-device-detect"

const ApiDocs = () => {
  const customCss = `
    .dark-mode, .light-mode {
      --scalar-color-accent: rgb(190, 158, 55);
    }
  `
  return (
    <>
      <div style={{ position: "absolute", top: "10px", right: "20px", zIndex: "21", backgroundColor: "var(--scalar-background-1)", borderRadius: "4px" }}>
        <img src={import.meta.env.VITE_WHITE_LABEL_LOGO} className={isMobile ? "w-8" : "w-20"} />
      </div>
      <ApiReferenceReact
        configuration={{
          spec: {
            url: `${import.meta.env.VITE_API}/api-json`
          },
          theme: "default",
          customCss: customCss
        }}
      />
    </>
  )
}

export default ApiDocs