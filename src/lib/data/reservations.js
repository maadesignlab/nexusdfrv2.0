import { sql } from "@/lib/db";

export async function createReservation({
  userId,
  coworkingSpaceId,
  startAt,
  endAt,
}) {
  const result = await sql`
    INSERT INTO reservations (
      user_id,
      coworking_space_id,
      start_at,
      end_at,
      status
    )
    VALUES (
      ${userId},
      ${coworkingSpaceId},
      ${startAt},
      ${endAt},
      'ACTIVE'
    )
    RETURNING *;
  `;

  return result[0];
}

export async function hasReservationConflict({
  coworkingSpaceId,
  startAt,
  endAt,
}) {
  const result = await sql`
    SELECT id
    FROM reservations
    WHERE coworking_space_id = ${coworkingSpaceId}
    AND status = 'ACTIVE'
    AND (
      start_at < ${endAt}
      AND end_at > ${startAt}
    )
    LIMIT 1;
  `;

  return result.length > 0;
}

export async function getReservationsByUser(
  userId
) {
  return sql`
    SELECT
      r.*,
      cs.name as space_name,
      cs.location as space_location,
      cs.space_type
    FROM reservations r
    INNER JOIN coworking_spaces cs
      ON cs.id = r.coworking_space_id
    WHERE r.user_id = ${userId}
    ORDER BY r.start_at DESC;
  `;
}

export async function getReservationsBySpace(
  spaceId,
  date
) {
  return sql`
    SELECT *
    FROM reservations
    WHERE coworking_space_id = ${spaceId}
    AND DATE(start_at) = ${date}
    AND status = 'ACTIVE'
    ORDER BY start_at;
  `;
}