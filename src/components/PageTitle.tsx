export function PageTitle({ kicker, title, lede }: { kicker?: string; title: string; lede?: string }) {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1100px] px-4 py-10 md:px-6">
        {kicker && <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-magenta">{kicker}</p>}
        <h1 className="text-[34px] text-black md:text-[46px]">{title}</h1>
        {lede && <p className="mt-4 max-w-3xl text-[18px] font-semibold leading-7 text-ink">{lede}</p>}
      </div>
    </header>
  )
}
