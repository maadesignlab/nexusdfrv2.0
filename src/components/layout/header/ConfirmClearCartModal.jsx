"use client";

import { createPortal } from "react-dom";

export default function ConfirmClearCartModal({
  t,
  onCancel,
  onConfirm,
}) {
  return createPortal(
    <div
      className="
        fixed inset-0 z-[9999]
        bg-black/60
        backdrop-blur-md
        flex items-center justify-center
        px-4
      "
      onClick={onCancel}
    >
      <div
        onClick={(e) =>
          e.stopPropagation()
        }
        className="
          w-full max-w-md
          rounded-3xl
          bg-white
          p-6
          shadow-2xl
        "
      >
        <div className="text-center">
          <div
            className="
              mx-auto mb-4
              flex h-16 w-16
              items-center justify-center
              rounded-full
              bg-red-100
              text-3xl
            "
          >
            🗑
          </div>

          <h2 className="text-xl font-bold">
            {t.cart.clearModal.title}
          </h2>

          <p className="mt-2 text-slate-500">
            {t.cart.clearModal.description}
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onCancel}
            className="
              flex-1
              rounded-xl
              border border-slate-200
              py-3
            "
          >
            {t.cart.clearModal.cancel}
          </button>

          <button
            onClick={onConfirm}
            className="
              flex-1
              rounded-xl
              bg-red-600
              py-3
              font-semibold
              text-white
            "
          >
            {t.cart.clearModal.confirm}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}