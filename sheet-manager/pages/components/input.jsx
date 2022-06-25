export default function Input({ children, type, name, placeholder }) {
    const inputMarkup = (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="">
            {children}
        </input>
    )

    return (inputMarkup)
}