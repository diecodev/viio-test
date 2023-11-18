export function ProductCardSkeleton() {
  return (
    <div className="h-[400px] w-full animate-pulse rounded-md border p-4">
      <div className="aspect-square h-auto w-full rounded-md bg-gray-200" />{" "}
      {/** image skeleton*/}
      <div className="mb-2 mt-4 h-6 rounded-lg bg-gray-200" />{" "}
      {/** title skeleton*/}
      <div className="flex items-end justify-between">
        <div className="flex w-1/2 flex-col gap-2">
          <div className="h-3 w-full rounded-lg bg-gray-200" />
          <div className="h-3 w-full rounded-lg bg-gray-200" />
        </div>
        <button className="group">
          <div className="h-6 w-6 rounded-full bg-gray-200" />
        </button>
      </div>
    </div>
  );
}
