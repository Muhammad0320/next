import * as actions from "@/actions";

export default function Home() {
  return (
    <div>
      <form action={actions.signin}>
        <button type="submit"> Sign In </button>
      </form>

      <form action={actions.signout}>
        <button type="submit"> Sign In </button>
      </form>
    </div>
  );
}
