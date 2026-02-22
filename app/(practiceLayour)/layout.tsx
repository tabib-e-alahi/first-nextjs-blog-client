import Link from "next/link";

export default function RootLayout() {
  return (
    <div>
      <nav className="flex gap-10 m-8">
            <Link className="hover:underline" href="/marketing">Marketing</Link>
            <Link className="hover:underline" href="/marketing">Settings</Link>
            <Link className="hover:underline" href="">Sales</Link>
            <Link className="hover:underline" href="">Testing</Link>
      </nav>
    </div>
  );
}