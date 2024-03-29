import Link from "next/link";

function setting () {
  return (
    <>
      <div>This is Settingpage </div>

      <Link href = "/dashboard/settings/password">Password</Link>
      <div><Link href = "/dashboard/settings/profile">Profile</Link></div>
    </>
  )
}

export default setting;
