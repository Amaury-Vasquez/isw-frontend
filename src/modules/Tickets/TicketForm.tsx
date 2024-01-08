"use client";
import { FormEvent, useState } from "react";
import { MdOutlineErrorOutline, MdOutlineCheckCircle } from "react-icons/md";
import { QuantityInput } from "@/components";
import { Modal } from "@/components/Modal";
import { useModal } from "@/hooks/useModal";
import { useBuyTicket } from "@/mutations/useBuyTicket";

interface IReservationForm {
  name: string;
  lastName: string;
  email: string;
  freeTickets: number;
  basicTickets: number;
  fullTickets: number;
}

export default function TicketForm() {
  const [freeTickets, setFreeTickets] = useState(0);
  const [basicTickets, setBasicTickets] = useState(0);
  const [fullTickets, setFullTickets] = useState(0);
  const { buyTicket, isSuccess, isError } = useBuyTicket();
  const { modalRef, openModal, closeModal } = useModal();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    openModal();
    if (freeTickets >= 0)
      await buyTicket({ ticketType: "free", quantity: freeTickets });
    if (basicTickets >= 0)
      await buyTicket({ ticketType: "basic", quantity: basicTickets });
    if (fullTickets >= 0)
      await buyTicket({ ticketType: "full", quantity: fullTickets });
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  return (
    <>
      <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
        <div className="flex w-full justify-center pt-4 pr-14">
          <div className="flex flex-col gap-y-2 items-end w-fit">
            <QuantityInput
              label="gratuito"
              value={freeTickets}
              onChange={setFreeTickets}
            />
            <QuantityInput
              label="basico"
              value={basicTickets}
              onChange={setBasicTickets}
            />
            <QuantityInput
              label="completo"
              value={fullTickets}
              onChange={setFullTickets}
            />
          </div>
        </div>
        <p className="italic">
          <strong className="text-accent">{"*Nota: "}</strong>
          Al reservar tu entrada, puedes mostrar tu comprobante en taquilla.
        </p>
        <div className="w-full text-center">
          <button className="btn btn-accent">Reservar entrada</button>
        </div>
      </form>
      <Modal
        ref={modalRef}
        closeModal={closeModal}
        position="center"
        fullHeight={false}
        contentClassName="gap-4 pb-4"
        showCloseButton={false}
      >
        <p className="text-center text-lg">
          {isSuccess
            ? "Entrada reservada"
            : isError
            ? "Error al reservar entrada"
            : "Reservando entrada..."}
        </p>
        {isSuccess ? (
          <MdOutlineCheckCircle className="text-2xl text-success m-auto" />
        ) : isError ? (
          <MdOutlineErrorOutline className="text-2xl text-error m-auto" />
        ) : (
          <span className="loading loading-lg loading-bars m-auto" />
        )}
      </Modal>
    </>
  );
}
