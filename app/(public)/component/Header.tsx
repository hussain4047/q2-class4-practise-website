import Link from "next/link";

export default function Header(){
  return(
    <div className = "header">
      <p> <Link href= "/"> Home |</Link></p>
      <p> <Link href= "/country"> Country |</Link></p>
      <p> <Link href= "/login"> Login |</Link></p>
    </div>
  )
}