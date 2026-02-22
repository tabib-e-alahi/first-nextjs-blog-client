import Link from "next/link";

export default function RootLayout() {
  return (
    <div>
      <nav>
            <Link  href="">Marketing</Link>
            <Link href="">Settings</Link>
            <Link href="">Sales</Link>
            <Link href="">Testing</Link>
      </nav>
    </div>
  );
}