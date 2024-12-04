import { LayoutNavbar } from "@repo/ui/layoutNavbar";
import { SideMenu } from "../../components/sidemenu";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body >
                <div className="flex">
                    <SideMenu />
                    {children}
                </div>
            </body>
        </html>
    );
}