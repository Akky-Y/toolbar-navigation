import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex gap-3">
        <Button asChild className="mt-4">
          <Link href="/music">Music</Link>
        </Button>
        <Button asChild className="mt-4">
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1716132813050-ed33a6dbb05d?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
}
