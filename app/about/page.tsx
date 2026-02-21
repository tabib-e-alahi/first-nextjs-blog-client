export default async function AboutPage() {
  // for testing the loading.tsx is working orn not
  await new Promise((resolve) => {
    setTimeout(resolve, 4000);
  })

  
  return (
    <div>
      <h1>THis is about page</h1>
    </div>
  );
}