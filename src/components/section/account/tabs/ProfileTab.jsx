export default function ProfileTab({
  user,
  t
}) {
  const userProfile = {
    nombre:
      user?.name ??
      t.profile.defaultUser,

    email:
      user?.email ??
      "usuario@nexus.com.co",

    rol: t.profile.role,
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pb-8 border-b border-slate-300 text-center md:text-left">
        <div className="w-24 h-24 rounded-full border border-slate-800 bg-slate-300 flex items-center justify-center overflow-hidden">
          <span className="text-3xl font-bold">
            {userProfile.nombre
              ?.charAt(0)
              ?.toUpperCase()}
          </span>
        </div>

        <div className="flex flex-col items-center md:items-start pt-1">
          <h1 className="text-2xl font-bold text-black mb-1">
            {userProfile.nombre}
          </h1>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-brand-400 text-black mb-2">
            {userProfile.rol}
          </span>

          <p className="text-slate-600 font-medium">
            {userProfile.email}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h4 className="text-[10px] font-bold uppercase text-slate-400 mb-2 tracking-wider">
            {t.profile.borrowedBook}
          </h4>

          <p className="text-lg font-bold text-black">
            El olvido que seremos
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h4 className="text-[10px] font-bold uppercase text-slate-400 mb-2 tracking-wider">
            {t.profile.nextCoworking}
          </h4>

          <p className="text-lg font-bold text-black">
            Sala 01 - Reunión
          </p>
        </div>
      </div>
    </div>
  );
}