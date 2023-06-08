'use client'

import Link from "next/link"

/**
 * dev mode:
 *  - root: works!
 *  - click: doesn't work
 * 
 * prod mode: 
 *  - root: works
 *  - click: doesn't work
 */
export default function Page() {
  if (typeof window !== 'undefined' && localStorage.getItem('error') === 'true') {
    throw new Error('nope')
  }

  const handleClick = () => {
    throw new Error('click throw')
  }

  return (
    <>
      <h1>client-sync</h1>
      <button onClick={handleClick}>Throw</button>
      <Link href="/">back</Link>
    </>
  )
}