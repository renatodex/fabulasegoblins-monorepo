export default function Link({ href, children }) {
    return (
        <a
            href={href}
            className="text-aero-blue appearance-none checked:bg-blue-500"
        >
            {children}
        </a>
    )
}
