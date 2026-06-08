import { auth0 } from "@/lib/auth0";
import { getUserByAuth0Sub } from "@/lib/data/users";

import AccountClient from "@/components/section/account/AccountClient";

export default async function AccountPage() {
  const session = await auth0.getSession();

  const dbUser =
    session?.user?.sub
      ? await getUserByAuth0Sub(
          session.user.sub
        )
      : null;

  return (
    <AccountClient
      user={session?.user}
      userId={dbUser?.id}
    />
  );
}