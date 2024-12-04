import Link from "next/link"
import { usePathname } from "next/navigation";

interface sideBarProps {
    url: string,
    icon: React.ReactNode,
    title: string
}
export const SideBarItem = ({ url, icon, title }: sideBarProps) => {
    const pathname = usePathname();

    return (
        <div className={`${pathname == url ? 'text-customBlue' : ''} flex gap-2 items-center`}>
            {icon}
            <Link className={`${pathname == url ? 'text-customBlue' : ''} cursor-pointer `} href={url}>{title}</Link>
        </div>
    )
}

