export default function Input({ type, name, placeholder }) {
    const inputMarkup = (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="p-3.5 bg-transparent border-colombia-blue border rounded-md w-full">
        </input>
    )

    return (inputMarkup)
}
