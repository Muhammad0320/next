import db from "@/db";
import { ShowSnippetPageProps } from "../page";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

export default async function SnippetEditPage(props: ShowSnippetPageProps) {
  const id = Number.parseInt((await props.params).id);

  const snippet = await db.snippet.findUnique({
    where: { id },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
