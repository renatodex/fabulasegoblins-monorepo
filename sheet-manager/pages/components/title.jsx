export function Title ({ children }) {
  return (
    <h1 className='text-4xl font-bold font-serif pt-10'>
      {children}
    </h1>
  )
}

export function Subtitle ({ children }) {
  return (
    <h1 className='text-2xl font-serif pt-10'>
      {children}
    </h1>
  )
}

export default Title