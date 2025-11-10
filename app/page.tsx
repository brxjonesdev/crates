import { Button } from "@/lib/components/shadcn/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <main>
    {/* Landing Page */}
    <Link href={"/auth/login"}>
      <Button>Go to Auth</Button>
    </Link>
  </main>
  );
}
