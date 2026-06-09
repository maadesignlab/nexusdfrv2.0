import { auth0 } from "@/lib/auth0";

import { getUserByAuth0Sub } from "@/lib/data/users";
import { getOrdersByUser } from "@/lib/data/orders";
import { getReservationsByUser } from "@/lib/data/reservations";

import AccountClient from "@/components/section/account/AccountClient";

export default async function AccountPage() {
  const session =
    await auth0.getSession();

  const dbUser =
    await getUserByAuth0Sub(
      session.user.sub
    );

  const [orders, reservations] =
    await Promise.all([
      getOrdersByUser(dbUser.id),
      getReservationsByUser(
        dbUser.id
      ),
    ]);

  return (
    <AccountClient
      user={session.user}
      orders={orders}
      reservations={reservations}
    />
  );
}