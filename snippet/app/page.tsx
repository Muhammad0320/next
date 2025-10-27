import db from "@/db/index";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  console.log(snippets, "---------------------");

  // const renderedSnippets = snippets.map((snippet) => {
  //   return <div key={snippet.id}>{snippet.title}</div>;
  // });

  return (
    <div>
      <h1> Home page </h1>
    </div>
  );
}
