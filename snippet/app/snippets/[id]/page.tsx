import db from "@/db";
import { notFound } from "next/navigation";

interface ShowSnippetPageProps {
  params: {
    id: string;
  };
}

export default async function ShowSnippetPage(props: ShowSnippetPageProps) {
  console.log(props.params.id, "---------------------");
  const snippet = await db.snippet.findUnique({
    where: { id: Number.parseInt((await props.params).id) },
  });

  if (!snippet) {
    return notFound();
  }

  return <div> {snippet.title} </div>;
}
