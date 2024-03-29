import Link from "next/link";

function setting () {
  return (
    <>
      <div>This is Settingpage </div>

      <Link href = "/password">Password</Link>
      <div><Link href = "/profile">Profile</Link></div>
    </>
  )
}

export default setting;
