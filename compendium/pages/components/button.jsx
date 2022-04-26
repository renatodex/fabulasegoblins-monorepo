export default function Button( {children} ) {
    return (
        <button className="
            bg-aero-blue text-dark-charcoal
            w-full py-2.5 rounded font-semibold
        ">
            {children}
        </button>
    )
}
