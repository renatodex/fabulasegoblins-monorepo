import { Fragment } from "react"

export default function Button({ children, buttonColors = 'bg-aero-blue text-dark-charcoal disabled:bg-gray-200 disabled:text-gray-600', href, disabled = false, onClick=function(){} }) {
    const buttonMarkup = (
        <button
            className={`
                ${buttonColors}
                w-full py-2.5 rounded-lg font-bold
            `}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )

    if (href) {
        return (
            <Fragment>
                <a href={href}>
                    {buttonMarkup}
                </a>
            </Fragment>

        )
    }

    return (
        <Fragment>
            {buttonMarkup}
        </Fragment>
    )
}
