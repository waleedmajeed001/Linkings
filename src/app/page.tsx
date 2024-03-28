import Link from "next/link";

function Home () {
  return (
    <>
      <div>This is homepage if you go dashboard. Click on the Dashboard</div>

      <Link href = "/dashboard">Dashboard</Link>
    </>
  )
}

export default Home

