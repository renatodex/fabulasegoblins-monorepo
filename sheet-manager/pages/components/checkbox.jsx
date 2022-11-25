import { Fragment } from "react"

export default function Checkbox({ children, onChange=function(){} }) {
    return (
        <Fragment>
            <input onChange={onChange} type="checkbox" className="mr-3 align-middle transition ease-in-out appearance-none default:ring-2 w-6 h-6 bg-clip-content p-1 checked:bg-aero-blue border-2 border-aero-blue border-solid" />
            {children}
        </Fragment>
    )
}
