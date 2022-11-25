import { Fragment } from "react"

export default function Button({ children, href, onClick=function(){} }) {
    const buttonMarkup = (
        <button onClick={onClick} className="
            bg-aero-blue text-dark-charcoal
            w-full py-2.5 rounded font-bold
        ">
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
