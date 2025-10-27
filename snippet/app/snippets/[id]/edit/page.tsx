import { ShowSnippetPageProps } from "../page";

export default async function SnippetEditPage(props: ShowSnippetPageProps) {
  const id = (await props.params).id;

  return <h1>{`Editing Snippet with id ${id}`}</h1>;
}
