export default function PreferencesTab() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-6">
          Preferencias de Cuenta
        </h3>

        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h4 className="text-sm font-semibold mb-4">
              Notificaciones
            </h4>

            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span className="text-sm">
                  Recordatorios de préstamos
                </span>

                <input
                  type="checkbox"
                  defaultChecked
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}