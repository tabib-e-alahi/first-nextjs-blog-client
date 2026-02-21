export default async function AboutPage() {
  await new Promise((resolve) => {
    setTimeout(resolve, 4000);
  })
  return (
    <div>
      <h1>THis is about page</h1>
    </div>
  );
}