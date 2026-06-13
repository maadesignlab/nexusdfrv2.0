"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useCart } from "@/context/CartContext";
import { submitOrder } from "@/app/actions/orderActions";

import CheckoutForm from "@/components/section/checkout/items/CheckoutForm";
import CheckoutSummary from "@/components/section/checkout/items/CheckoutSummary";

function CheckoutClient({
  locale,
  t,
}) {
  const router = useRouter();

  const {
    cart,
    clearCart,
  } = useCart();

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState({
      nombre: "",
      email: "",
      tarjeta: "",
    });

  const [errors, setErrors] =
    useState({});

  const total = cart.reduce(
    (acc, item) =>
      acc +
      Number(item.precio || 0) *
        Number(item.cantidad || 0),
    0
  );

  const validate = () => {
    const newErrors = {};

    if (!form.nombre.trim()) {
      newErrors.nombre =
        t.validation.requiredName;
    }

    if (
      !form.email.includes("@")
    ) {
      newErrors.email =
        t.validation.invalidEmail;
    }

    if (
      form.tarjeta.replace(
        /\s/g,
        ""
      ).length < 16
    ) {
      newErrors.tarjeta =
        t.validation.invalidCard;
    }

    return newErrors;
  };

  const handleChange = (e) => {
    let value = e.target.value;

    if (
      e.target.name ===
      "tarjeta"
    ) {
      value = value
        .replace(/\D/g, "")
        .replace(
          /(.{4})/g,
          "$1 "
        )
        .trim();
    }

    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    const validation =
      validate();

    if (
      Object.keys(validation)
        .length > 0
    ) {
      setErrors(validation);
      return;
    }

    try {
      setLoading(true);

      const order =
        await submitOrder({
          cart,
          total,
        });

      clearCart();

      router.push(
        `/${locale}/success?order=${order.id}`
      );
    } catch (error) {
      console.error(error);

      alert(
        "Error creating order"
      );
    } finally {
      setLoading(false);
    }
  };

  if (!cart.length) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <p>
          {t.empty.message}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* HEADER */}
      <div className="mb-10">
        <p className="text-sm font-semibold text-yellow-500 uppercase tracking-wider">
          {t.header.badge}
        </p>

        <h1 className="text-4xl font-bold mt-2">
          {t.header.title}
        </h1>

        <p className="text-slate-500 mt-2">
          {
            t.header
              .description
          }
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-[1fr_420px] gap-10">

        <CheckoutForm
          form={form}
          errors={errors}
          loading={loading}
          total={total}
          t={t}
          onChange={
            handleChange
          }
          onSubmit={
            handleSubmit
          }
        />

        <CheckoutSummary
          cart={cart}
          total={total}
          t={t}
          locale={locale}
        />

      </div>

    </div>
  );
}

export default CheckoutClient;