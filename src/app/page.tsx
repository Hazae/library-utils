import Archive from "@/containers/archive";

export default function Home() {
  const placeNames: string[] = [
    "🧸청소년자료실🧸",
    "📰연속간행물📰",
    "📚종합자료실📚",
    "🖥️PC🖥️",
  ];

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
    <div className="m-2 font-[family-name:var(--font-noto-sans)">
      <h1 className="text-5xl font-bold my-16 text-center">야간 통계일지</h1>
      <div className="grid grid-cols-1 justify-around gap-10">
        {placeNames.map((item, idx) => (
          <Archive key={idx} place={item} />
        ))}
      </div>
    </div>
  );
}
