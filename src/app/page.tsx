import Link from "next/link";

function Home () {
  return (
    <>
      <div>This is homepage. if you go dashboard. Click on the Dashboard</div>

      <Link href = "/dashboard">Dashboard</Link>
      <div><Link href = "/blog">Blog</Link></div>
      <div><Link href = "/Contact-us">Contact-us</Link></div>
    </>
  )
}

export default Home

