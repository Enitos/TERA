import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">TERA v0.1</p>
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Hospitality experiences, from booking to stay.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          A hospitality platform for properties, direct bookings, guests and experiences — with Hostex as the first channel integration.
        </p>
        <div className="mt-10 flex gap-4">
          <Link href="/dashboard" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950">
            Open dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
