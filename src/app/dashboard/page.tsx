import Link from "next/link";

function dashboard () {
  return (
    <>
      <div>This is Dashboard if you need analytics or Setting. Click on the Buttons</div>

      <Link href = "/dashboard/analytics">Analytics</Link>
      <div><Link href = "/dashboard/settings">Settings</Link></div>
    </>
  )
}

export default dashboard;

