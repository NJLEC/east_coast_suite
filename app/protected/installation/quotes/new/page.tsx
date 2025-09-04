import Link from "next/link";

export default function NewInstallationQuotePage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">New Installation Quote</h1>
      <p className="text-sm text-foreground/70">Start a new quote.</p>
      <div className="text-sm">
        <Link className="underline" href="/protected/installation/quotes">Back to quotes</Link>
      </div>
    </div>
  );
}


