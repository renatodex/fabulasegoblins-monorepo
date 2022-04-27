export default function Button({onClick, className, children}) {
    const style = ["bg-aero-blue", "text-dark-charcoal", "w-full", "py-2.5", "rounded", "font-semibold"]
    return (
        <button onClick={e => onClick(e)} className={[...style, className].join(' ')}>
            {children}
        </button>
    )
}
