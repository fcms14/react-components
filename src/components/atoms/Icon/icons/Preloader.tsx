// import ResetTheme from "../../../../providers/theme"

type Props = {
    width?: string,
    fill?: string
}

const Preloader = (props: Props) => {
    const fill = props.fill
    const width = props.width || 16

    return (<svg className="lds-spin" width={width} viewBox="-10 -10 180 180" preserveAspectRatio="xMidYMid" fill={fill}>
      <g className="pos-1"><circle className="lds-circle" r="20" fill={fill}></circle></g>
      <g className="pos-2"><circle className="lds-circle" r="20" fill={fill}></circle></g>
      <g className="pos-3"><circle className="lds-circle" r="20" fill={fill}></circle></g>
      <g className="pos-4"><circle className="lds-circle" r="20" fill={fill}></circle></g>
      <g className="pos-5"><circle className="lds-circle" r="20" fill={fill}></circle></g>
      <g className="pos-6"><circle className="lds-circle" r="20" fill={fill}></circle></g>
      <g className="pos-7"><circle className="lds-circle" r="20" fill={fill}></circle></g>
      <g className="pos-8"><circle className="lds-circle" r="20" fill={fill}></circle></g>
    </svg>)
}

export default Preloader