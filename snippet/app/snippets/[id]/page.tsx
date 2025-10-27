import db from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

export interface ShowSnippetPageProps {
  params: {
    id: string;
  };
}

export default async function ShowSnippetPage(props: ShowSnippetPageProps) {
  //   await new Promise((r) => setTimeout(r, 2000));
  const snippet = await db.snippet.findUnique({
    where: { id: Number.parseInt((await props.params).id) },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold"> {snippet.title} </h1>

        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            {" "}
            Edit{" "}
          </Link>
          <Link href={`/handle Delete`} className="p-2 border rounded">
            {" "}
            Delete{" "}
          </Link>
        </div>
      </div>

      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code> {snippet.code} </code>
      </pre>
    </div>
  );
}
