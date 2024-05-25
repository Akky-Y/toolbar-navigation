import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>About</h1>
      <Button asChild className="mt-4">
        <Link href="/">Top</Link>
      </Button>
    </div>
  );
}
