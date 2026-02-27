import { blogService } from "@/services/blog.service";
import { userServie } from "@/services/user.service";


export default async function Home() {
  const {data} = await blogService.getBlogPosts();
  console.log(data);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>This is app page</h1>
    </div>
  );
}
