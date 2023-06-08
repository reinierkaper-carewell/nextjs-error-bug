import Link from "next/link"
/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <ul>
        <li><Link href="/errors/client-async">client-async</Link></li>
        <li><Link href="/errors/client-sync">client-sync</Link></li>
        <li><Link href="/errors/server-async">server-async</Link></li>
      </ul>
    </>
  )
}
