const stats = [
  ["Revenue", "CVE 0"],
  ["Bookings", "0"],
  ["Occupancy", "0%"],
  ["Experiences", "0"],
] as const;

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="mb-8">
          <p className="text-sm font-medium text-slate-500">TERA</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">Dashboard</h1>
          <p className="mt-2 text-slate-600">Your hospitality operation at a glance.</p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([label, value]) => (
            <article key={label} className="rounded-xl border bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">{value}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-slate-950">Upcoming bookings</h2>
            <p className="mt-2 text-sm text-slate-500">Bookings will appear here once the property and Hostex integration are connected.</p>
          </article>
          <article className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-slate-950">Channels</h2>
            <div className="mt-4 flex items-center justify-between rounded-lg bg-slate-50 p-4">
              <span className="font-medium">Hostex</span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">Not connected</span>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
