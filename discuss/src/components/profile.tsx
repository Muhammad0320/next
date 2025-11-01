"use client";

import {
  Avatar,
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React from "react";
import * as actions from "@/actions";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} />;
        </PopoverTrigger>

        <PopoverContent>
          <div className="p-4">
            <form action={actions.signout}>
              <Button type="submit"> Sign Out </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    <>
      <NavbarItem>
        <form action={actions.signin}>
          <Button type="submit" color="secondary" variant="bordered">
            {" "}
            Sign In{" "}
          </Button>
        </form>
      </NavbarItem>
      <NavbarItem>
        <form action={actions.signin}>
          <Button type="submit" color="primary" variant="flat">
            {" "}
            Sign Up{" "}
          </Button>
        </form>
      </NavbarItem>
    </>;
  }

  return authContent;
}
