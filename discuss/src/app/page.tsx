import * as actions from "@/actions";
import { auth } from "@/auth";
import { Button } from "@nextui-org/react";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <h1>Test Page</h1>
      <form action={actions.signin}>
        <Button type="submit"> Sign In </Button>
      </form>
      <form action={actions.signout}>
        <Button type="submit"> Sign out </Button>
      </form>

      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div> Not signin in </div>
      )}
    </div>
  );
}
