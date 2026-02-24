import { authClient } from "@/lib/auth-client";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();

  const res = await fetch("http://localhost:8000/api/auth/get-session", {
    headers: {
      Cookie: cookieStore.toString()
    },
    cache: "no-store"
  })

  const session = await res.json();

  console.log(session);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>This is app page</h1>
    </div>
  );
}
