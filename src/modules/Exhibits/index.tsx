import { useGetExhibits } from "@/queries/useGetExhibits";

export function Exhibits() {
  const { exhibits, isLoading } = useGetExhibits();

  return (
    <div className="min-h-content w-full max-w-5xl m-auto p-6 flex flex-col gap-6">
      <h1 className="text-2xl text-center"> Lista de salas de exhibicion</h1>
      {isLoading ? (
        <div className="w-full flex justify-center items-center">
          <span className="loading loading-lg loading-bars" />
        </div>
      ) : (
        <main className="w-full grid grid-cols-3 gap-6 animate-fade-in">
          {exhibits.map(
            ({ room: { room_name, description, exhibits: list } }) => (
              <div
                className="w-full p-4 h-full flex flex-col shadow-md rounded-md bg-base-200 gap-4"
                key={room_name}
              >
                <h3 className="text-lg font-semibold">{room_name}</h3>
                <p>{description.slice(0, 70)}</p>
                <h4 className="text-base font-medium text-center">
                  {" "}
                  Exhibiciones
                </h4>
                <ul className="flex flex-col gap-1 px-4">
                  {list.map((item) => (
                    <li className="text-sm list-disc" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </main>
      )}
    </div>
  );
}
