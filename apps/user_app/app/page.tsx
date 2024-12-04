import { Navbar } from "@repo/ui/navbar";
import { Section } from "@repo/ui/section";
import { Section2 } from "@repo/ui/section2";
import { Stript } from "@repo/ui/stript";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard/home");
    return null; 
  }

  return (
    <>
      <div className="h-screen w-screen">
        <Stript />
        <Section />
        <Section2 />
      </div>
    </>
  );
}
