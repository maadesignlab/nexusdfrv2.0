import { auth0 } from "@/lib/auth0";
import { getUserByAuth0Sub } from "@/lib/data/users";

import { storeService } from "@/services/storeService";
import CoworkingClient from "@/components/section/coworking/CoworkingClient";

export default async function CoworkingPage() {
  const session = await auth0.getSession();

  const dbUser =
    session?.user?.sub
      ? await getUserByAuth0Sub(
          session.user.sub
        )
      : null;

  const data =
    await storeService.getInitialData();

  return (
    <CoworkingClient
      spaces={data.coworking}
      userId={dbUser?.id}
    />
  );
}