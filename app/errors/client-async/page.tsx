'use client'

import Link from "next/link"

/**
 * dev mode:
 *  - root: doesn't work
 *  - click: doesn't work and crashes server
 * 
 * prod mode: 
 *  - root: works
 *  - click: doesn't work
 */
export default async function Page() {
  if (typeof window !== 'undefined' && localStorage.getItem('error') === 'true') {
    await Promise.reject(new Error('reject'))
  }

  // This crashes the dev server
  const handleClick = () => {
    throw new Error('click throw')
  }

  return (
    <>
      <h1>client-async</h1>
      <button onClick={handleClick}>Throw</button>
      <Link href="/">back</Link>
    </>
  )
}