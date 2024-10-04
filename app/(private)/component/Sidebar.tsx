import Link from "next/link";

export default function Sidebar(){
  return(
    <div className="private-sidebar">
      <p> <Link href="/dashboard">Dashboard</Link> </p>
      <p> <Link href="/profile">Profile</Link> </p>
      <p>Payment</p>
      <p>Lecture</p>
      <p><Link href="/">Logout</Link></p>
    </div>
  )
}