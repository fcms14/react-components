import IconInterface from './IconInterface'
import React from "react";

const ForwardArrow = (props: IconInterface) => {
    const width = props.width || 24
    const fill = props.fill || '#000000'

    return (
        <svg width={width} viewBox="0 0 20 14" version="1.1" style={{
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: 2
        }}>
            <g transform="matrix(-0.75,-9.18485e-17,9.18485e-17,-0.75,21.4372,13.375)">
                <path d="M5.458,16.5L5.458,1.5C5.458,0.764 4.861,0.167 4.125,0.167C3.389,0.167 2.792,0.764 2.792,1.5L2.792,16.5C2.792,17.236 3.389,17.833 4.125,17.833C4.861,17.833 5.458,17.236 5.458,16.5ZM18.583,10.328L27.25,10.328L27.319,10.327C28.023,10.291 28.583,9.708 28.583,8.995C28.583,8.259 27.986,7.662 27.25,7.662L18.583,7.662L18.583,1.5C18.583,0.961 18.258,0.475 17.76,0.268C17.262,0.062 16.689,0.176 16.307,0.557L8.807,8.057C8.286,8.578 8.286,9.422 8.807,9.943L16.307,17.443C16.689,17.824 17.262,17.938 17.76,17.732C18.258,17.525 18.583,17.039 18.583,16.5L18.583,10.328ZM15.917,10.328L12.964,10.328L15.917,13.281L15.917,10.328ZM12.974,7.662L15.917,7.662L15.917,4.719L12.974,7.662Z" style={{ fill: fill }}/>
            </g>
        </svg>
    )
}

export default ForwardArrow