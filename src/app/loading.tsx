export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-light">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-brand-blue border-t-transparent animate-spin" />
        <p className="text-brand-navy/40 text-sm font-medium">Memuat...</p>
      </div>
    </div>
  );
}
