import { Fragment } from "react"

export default function Button({ children, href }) {
    const buttonMarkup = (
        <button className="
            bg-aero-blue text-dark-charcoal
            w-full py-2.5 rounded-lg font-bold
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
