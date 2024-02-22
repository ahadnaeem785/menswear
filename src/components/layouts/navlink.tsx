"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; }[] = [
    {
        title: "Pants",
        href: "/pants",
    },
    {
        title: "Shirts",
        href: "/shirts",
    },
    {
        title: "Shoes",
        href: "/shoes",
    },
    {
        title: "Hoodies",
        href: "/hoodie",
    },
    //   {
    //     title: "Pants",
    //     href: "/docs/primitives/alert-dialog",
    //     description:
    //       "A modal dialog that interrupts the user with important content and expects a response.",
    //   },
    //   {
    //     title: "Shirts",
    //     href: "/docs/primitives/hover-card",
    //     description:
    //       "For sighted users to preview content available behind a link.",
    //   },
    //   {
    //     title: "Shoes",
    //     href: "/docs/primitives/progress",
    //     description:
    //       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    //   },
    //   {
    //     title: "Accessories",
    //     href: "/docs/primitives/scroll-area",
    //     description: "Visually or semantically separates content.",
    //   },
]

export function NavLinks() {
    return (
        <NavigationMenu>
            <NavigationMenuList >
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="bg-mywhite outline-none border-none rounded-xl hover:border-none hover:outline-none  flex px-5 py-1 space-x-4 text-myBlakeHead">
                            {components.map((component) => (
                                <Link href={component.href} key={component.title}>
                                    <ListItem
                                 title={component.title}   
                                    >
                                        {/* {component.description} */}
                                    </ListItem>
                                </Link>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Contact us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1  bg-mywhite  p-3 leading-none no-underline outline-none transition-colors rounded-xl",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm bg-mywhite leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

