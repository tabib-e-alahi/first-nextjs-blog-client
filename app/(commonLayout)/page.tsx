import { userServie } from "@/services/user.service";


export default async function Home() {
  const {data, error} = await userServie.getSession();
  console.log(data);
  console.log(error);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>This is app page</h1>
    </div>
  );
}
