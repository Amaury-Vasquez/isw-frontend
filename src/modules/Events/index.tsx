import { useGetEvents } from "@/queries/useGetEvents";
import Image from "next/image";

export function Events() {
  const { events, isLoading } = useGetEvents();

  return (
    <div className="min-h-content w-full max-w-5xl m-auto p-6 flex flex-col gap-6">
      <h1 className="text-2xl text-center"> Lista de eventos</h1>
      {isLoading ? (
        <span className="loading loading-lg loading-bars m-auto" />
      ) : (
        <div className="grid grid-cols-3 w-full gap-8">
          {events.map(({ title, image_url, description, location }) => (
            <div className="w-full h-full relative" key={title}>
              <Image
                className="w-full h-full absolute z-0 rounded-md"
                src={image_url}
                alt={title + "image"}
                fill
              />
              <div className="flex w-full h-full flex-col gap-4 p-4 bg-black z-30 relative bg-opacity-70 text-white rounded-inherit rounded-md">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p>{description.slice(0, 100)}</p>
                <h4 className="text-base font-medium">Ubicacion: {location}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
