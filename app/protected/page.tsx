import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { InfoIcon } from "lucide-react";
import Link from "next/link";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          Welcome to the East Coast Suite dashboard.
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="border rounded p-4">
          <h2 className="font-medium mb-2">Installation Quotes</h2>
          <div className="flex gap-3 text-sm">
            <Link className="underline" href="/protected/installation/quotes">View Quotes</Link>
            <Link className="underline" href="/protected/installation/quotes/new">New Quote</Link>
          </div>
        </div>

        <div className="border rounded p-4">
          <h2 className="font-medium mb-2">Projects</h2>
          <div className="flex gap-3 text-sm">
            <Link className="underline" href="/protected/projects">Open</Link>
          </div>
        </div>

        <div className="border rounded p-4">
          <h2 className="font-medium mb-2">Calendar</h2>
          <div className="flex gap-3 text-sm">
            <Link className="underline" href="/protected/calendar">Open</Link>
          </div>
        </div>

        <div className="border rounded p-4">
          <h2 className="font-medium mb-2">Tasks</h2>
          <div className="flex gap-3 text-sm">
            <Link className="underline" href="/protected/tasks">Open</Link>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="border rounded p-4">
          <h3 className="font-medium text-sm text-foreground/70 mb-1">Recent Quotes</h3>
          <p className="text-2xl font-bold">0</p>
          <p className="text-xs text-foreground/50">This month</p>
        </div>
        
        <div className="border rounded p-4">
          <h3 className="font-medium text-sm text-foreground/70 mb-1">Active Projects</h3>
          <p className="text-2xl font-bold">0</p>
          <p className="text-xs text-foreground/50">In progress</p>
        </div>
        
        <div className="border rounded p-4">
          <h3 className="font-medium text-sm text-foreground/70 mb-1">Upcoming Tasks</h3>
          <p className="text-2xl font-bold">0</p>
          <p className="text-xs text-foreground/50">Due this week</p>
        </div>
        
        <div className="border rounded p-4">
          <h3 className="font-medium text-sm text-foreground/70 mb-1">Calendar Events</h3>
          <p className="text-2xl font-bold">0</p>
          <p className="text-xs text-foreground/50">Today</p>
        </div>
      </div>
    </div>
  );
}
