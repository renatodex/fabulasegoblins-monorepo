import ReactDOM from 'react-dom'

export function Title({ children, useH1 = true }) {
  const TitleTag = useH1 ? 'h1' : 'div';

  return (
    <TitleTag className="text-4xl font-bold font-serif font-dolly-bold">
      {children}
    </TitleTag>
  );
}

export function Subtitle ({ children }) {
  return (
    <h1 className='text-2xl font-serif'>
      {children}
    </h1>
  )
}

export default Title
