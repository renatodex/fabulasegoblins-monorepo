import { Fragment } from "react"

export default function Input({ type, name, placeholder, label, onChange=function(){} }) {
    const inputMarkup = (
        <Fragment>
            {label && (
                <p className="mb-2">{label}</p>
            )}
            <input
                onChange={onChange}
                type={type}
                name={name}
                placeholder={placeholder}
                className="p-3.5 bg-transparent border-colombia-blue border rounded-md w-full">
            </input>
        </Fragment>
    )

    return (inputMarkup)
}
