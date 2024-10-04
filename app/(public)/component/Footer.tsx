import Link from "next/link";

export default function Footer(){
  return(
    <div className = "footer">
      <p> <Link href="/contact">Contact |</Link></p>
      <p> <Link href="/about">About |</Link></p>
      <p> <Link href="/feedback">Feedback |</Link></p>
    </div>
  )
}