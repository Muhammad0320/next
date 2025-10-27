import db from "@/db";
import { notFound } from "next/navigation";

interface ShowSnippetPageProps {
  params: {
    id: string;
  };
}

export async function ShowSnippetPage(props: ShowSnippetPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: Number.parseInt(props.params.id) },
  });

  if (!snippet) {
    return notFound;
  }

  return <div> {snippet.title} </div>;
}
