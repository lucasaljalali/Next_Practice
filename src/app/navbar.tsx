import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <Link href="/pokes">Pokes</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
