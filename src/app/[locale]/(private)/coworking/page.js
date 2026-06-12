import { auth0 } from "@/lib/auth0";
import { getUserByAuth0Sub } from "@/lib/data/users";
import { getTranslations } from "@/lib/translations";

import { storeService } from "@/services/storeService";
import CoworkingClient from "@/components/section/coworking/CoworkingClient";

export default async function CoworkingPage({
  params,
}) {
  const { locale } =
    await params;

  const session =
    await auth0.getSession();

  const dbUser =
    session?.user?.sub
      ? await getUserByAuth0Sub(
          session.user.sub
        )
      : null;

  const data =
    await storeService.getInitialData();

  const translations =
    await getTranslations(locale);

  return (
    <CoworkingClient
      spaces={data.coworking}
      userId={dbUser?.id}
      t={translations.coworking}
    />
  );
}