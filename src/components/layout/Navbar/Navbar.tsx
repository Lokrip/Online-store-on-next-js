import Link from "next/link";
import { FC, PropsWithChildren } from "react";

interface DropDownItems { 
    label: string; 
    link: string
}

interface NavbarItemProps extends PropsWithChildren {
    label: string; 
    link: string; 
    dropdown: boolean;
    items?: DropDownItems[];
}

export const NavbarDropDownItems: FC<DropDownItems> = (subItem) => (
    <li key={subItem.label}>
        <Link href={subItem.link} className="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">
            {subItem.label}
        </Link>
    </li>
)

export const NavbarItem: FC<NavbarItemProps> = ({ label, link, dropdown, items, children }) => (
    <li className="relative group">
        <Link href={link} className="hover:text-secondary font-semibold flex items-center">
            {label}
            {dropdown && <i className="fas fa-chevron-down ml-1 text-xs"></i>}
        </Link>
        {dropdown && (
            <ul className="absolute left-0 bg-white text-black space-y-2 mt-1 p-2 rounded shadow-lg">
                {children}
            </ul>
        )}
    </li>
);