"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useLoader } from "@/hooks/useLoader";

import BookingHeader from "./booking/BookingHeader";
import BookingLoadingOverlay from "./booking/BookingLoadingOverlay";

import BookingStepSchedule from "./booking/BookingStepSchedule";
import BookingStepContact from "./booking/BookingStepContact";
import BookingStepReview from "./booking/BookingStepReview";
import BookingStepSuccess from "./booking/BookingStepSuccess";

import {
  createReservationAction,
} from "@/app/actions/reservationActions";

function BookingFlow({
  space,
  onClose,
  userId,
  t,
}) {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const [bookingData, setBookingData] =
    useState({
      fecha: new Date()
        .toISOString()
        .split("T")[0],

      hora: "",

      duracion: 1,

      celular: "",

      notas: "",
    });

  const ocupados =
    space?.horariosOcupados || [];

  const {
    isLoading,
    startLoading,
    stopLoading,
  } = useLoader(false);

  const updateBooking = (
    field,
    value
  ) => {
    setBookingData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () =>
    setStep((prev) => prev + 1);

  const prevStep = () =>
    setStep((prev) => prev - 1);

  const handleConfirm = async () => {
    startLoading();

    try {
      const startAt = new Date(
        `${bookingData.fecha}T${bookingData.hora}:00`
      );

      const endAt = new Date(startAt);

      endAt.setHours(
        endAt.getHours() +
          bookingData.duracion
      );

      await createReservationAction({
        userId,
        coworkingSpaceId: space.id,
        startAt: startAt.toISOString(),
        endAt: endAt.toISOString(),
      });

      setStep(4);
    } catch (error) {
      console.error(error);

      alert(
        error.message ||
          t.booking.errors.createReservation
      );
    } finally {
      stopLoading();
    }
  };

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/40
        backdrop-blur-[2px]
        flex items-center justify-center
        px-4
      "
      onClick={onClose}
    >
      {isLoading && (
        <BookingLoadingOverlay
          t={t}
        />
      )}

      <div
        onClick={(e) =>
          e.stopPropagation()
        }
        className="
          relative
          w-full max-w-2xl
          bg-[#f4f7f9]
          rounded-[20px]
          p-8 md:p-10
          shadow-2xl
        "
      >
        {step < 4 && (
          <BookingHeader
            title={`${t.booking.header.reserveAt} ${space.nombre}`}
            step={step}
            onClose={onClose}
          />
        )}

        {step === 1 && (
          <BookingStepSchedule
            bookingData={
              bookingData
            }
            ocupados={ocupados}
            onChange={
              updateBooking
            }
            onCancel={onClose}
            onNext={nextStep}
            t={t}
          />
        )}

        {step === 2 && (
          <BookingStepContact
            bookingData={
              bookingData
            }
            onChange={
              updateBooking
            }
            onBack={prevStep}
            onNext={nextStep}
            t={t}
          />
        )}

        {step === 3 && (
          <BookingStepReview
            space={space}
            bookingData={
              bookingData
            }
            onBack={prevStep}
            onConfirm={
              handleConfirm
            }
            t={t}
          />
        )}

        {step === 4 && (
          <BookingStepSuccess
            space={space}
            bookingData={
              bookingData
            }
            onFinish={() => {
              onClose();

              router.push(
                "/dashboard"
              );
            }}
            t={t}
          />
        )}
      </div>
    </div>
  );
}

export default BookingFlow;