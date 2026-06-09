import DashboardClient from "@/components/section/dashboard/DashboardClient";
import { storeService } from "@/services/storeService";
import { getTranslations } from "@/lib/translations";

export default async function DashboardPage({ params, }) {
  const data = await storeService.getInitialData(1);

  const totalLibros = data.libros?.length || 0;
  const espaciosDisponibles =
    data.coworking?.filter((s) => !s.ocupado).length || 0;

  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <DashboardClient
      t={t.dashboard}
      totalLibros={totalLibros}
      espaciosDisponibles={espaciosDisponibles}
    />
  );
}