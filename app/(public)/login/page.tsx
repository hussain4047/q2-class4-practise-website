import Link from "next/link";

export default function Login (){
  return(
    <div className="page">
      <p>Click here to<Link href="/dashboard"> <span>Login</span></Link></p>
    </div>
  )
}