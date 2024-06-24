import Link from 'next/link'

export default function AppLink({ href, children }) {
  return (
    <Link
      href={href ?? ''}
      className="text-aero-blue appearance-none checked:bg-blue-500"
    >
      {children}
    </Link>
  )
}
