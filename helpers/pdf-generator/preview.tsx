import React, { ReactNode } from "react"
import ReactDOM from "react-dom"
import Page from "./page"

interface Props {
	html    ?: string
	id      ?: string
	logo    ?: boolean
	voucher ?: boolean
	children?: ReactNode
	width   ?: string
	height  ?: string
	center  ?: boolean,
	account ?: any,
	display ?: string
  }

const Base: React.FC<Props> = ({ html, id }) => {
	const htmlContent = html || ""
	return <div id={id} dangerouslySetInnerHTML={{ __html: htmlContent }} />
}

class Preview extends React.Component<Props> {
	render() {
		const { html, id, children, logo, width, height, voucher, center, account, display } = this.props
		const htmlContent = html || ""

		const a4ratio = 297 / 210
		let w = 1920;
		let h = Math.round(w * a4ratio);

		if (voucher) {
			h = 768
			w = Math.round(h / a4ratio)
		}

		return (
			<div>
				{ReactDOM.createPortal(
					<div style={{ opacity: 0, position: "absolute", top: 0, zIndex: -9999, display: display ?? '' }}>
						<Page id={id} width={w} height={h} center={center}>
							{htmlContent && <Base html={htmlContent} />}
							<div style={{ display: 'flex', gap: '27px', alignItems: 'center', flexDirection: "column" }}>
								{/* {account &&
									<div style={{ marginBottom: '4px', fontSize: '1rem' }}>
										{account.title} {account.documentNumber ? Mask.padDocument(account.documentNumber) : ""}
										<br /> Cartos (324)
										<br /> AG: 0001 - CC: {account.accountNumber}
									</div>
								} */}
							</div>
							{logo && <div style={{
								paddingBottom: `32px`,
								margin: `0 auto`,
							}}></div>}
							{children}
						</Page>
					</div>,
					document.body
				)}
				{htmlContent && <Base html={htmlContent} />}
				{children}
			</div>
		)
	}
}

export default Preview
