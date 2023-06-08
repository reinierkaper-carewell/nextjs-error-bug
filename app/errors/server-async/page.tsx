// This fails 50% of the time on builds, of course.
const fetchData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      Math.random() > 0.5 ? res('ok') : rej('no')
    }, 2500)
  })
}

/**
 * dev mode: works
 * prod mode: works
 */
export default async function Page() {
  const data = await fetchData()
  return (
    <>
      <h1>server-async</h1>
      <p>{data ? 'yes' : 'no'}</p>
    </>
  )
}