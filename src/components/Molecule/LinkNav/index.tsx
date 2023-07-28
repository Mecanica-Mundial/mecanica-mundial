"use client";

import NextLink from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";


interface LinkProps {
    path: string
    children: ReactNode
}

export function LinkNav ({path, children}: LinkProps) {
    const pathName = usePathname();

    return (
        <NextLink 
            href={path}
            className={
                pathName === path 
                ? "text-white py-1 px-4 rounded-full text-sm bg-blue-500" 
                : "text-white py-1 px-4 rounded-full text-sm"
            }
        >
            {children}
        </NextLink>
    )
}