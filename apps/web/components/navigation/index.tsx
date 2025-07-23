"use client";

import { Menu, ShoppingCart, User2 } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { Button } from "@workspace/ui/components/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { Logo } from "@/components/logo";
import React from "react";
import { Link } from "@/lib/i18n/navigation";
import { signIn } from "next-auth/react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Company",
    href: "/company",
    subItems: [
      { name: "About Us", href: "/company/about" },
      { name: "Careers", href: "/company/careers" },
      { name: "Press", href: "/company/press" },
    ],
  },
  { name: "Marketplace", href: "/marketplace" },
  {
    name: "Features",
    href: "/features",
    subItems: [
      { name: "Analytics", href: "/features/analytics" },
      { name: "Automation", href: "/features/automation" },
      { name: "Collaboration", href: "/features/collaboration" },
    ],
  },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const NavbarSection = () => {
  return (
    <>
      <header className="bg-background sticky top-0 z-50">
        <nav>
          {/* Navigation Bar */}
          <div className="px-12 py-4 hidden lg:flex flex justify-center items-center w-full border-b-2 border-accent-foreground">
            <div className="contain-layout w-full max-w-[1920px] px-2 flex gap-6">
              <div className="flex items-center">
                <Logo />
              </div>
              <div className="container mx-auto flex h-14 items-center justify-between gap-6 px-4">
                <ul className="flex items-center gap-6">
                  <li>
                    <Link
                      href="/"
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/marketplace"
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      Marketplace
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources"
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 items-center gap-2 ml-auto justify-end">
                <Button variant={"ghost"} size="icon">
                  <ShoppingCart size={18} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    console.log("clicked");
                    signIn();
                  }}
                >
                  <User2 size={18} />
                </Button>
              </div>
            </div>
          </div>
          {/*Mobile*/}
          <div className="w-full lg:hidden px-2 py-4 border-b-2 border-accent-foreground">
            <div className="flex items-center justify-between">
              <div className={"flex flex-1"} />
              <div className={"flex flex-1 justify-center"}>
                <Logo />
              </div>
              <div className={"flex flex-1 justify-end"}>
                <Sheet>
                  <SheetTrigger asChild className="lg:hidden">
                    <Button variant="ghost" size="icon">
                      <Menu className="size-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="border-l-2 border-accent-foreground"
                  >
                    <div className="mt-8 flex flex-col gap-4">
                      <Accordion type="single" collapsible className="w-full">
                        {navigation.map((item, index) => (
                          <AccordionItem
                            value={`item-${index}`}
                            key={item.name}
                          >
                            {item.subItems ? (
                              <>
                                <AccordionTrigger className="hover:text-primary">
                                  {item.name}
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="flex flex-col gap-2">
                                    {item.subItems.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="pl-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </>
                            ) : (
                              <Link
                                href={item.href}
                                className="flex py-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
                              >
                                {item.name}
                              </Link>
                            )}
                          </AccordionItem>
                        ))}
                      </Accordion>
                      <hr className="my-4" />
                      <Button variant="ghost" asChild className="justify-start">
                        <Link href="/login">Log in</Link>
                      </Button>
                      <Button asChild>
                        <Link href="/get-started">Get started</Link>
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export { NavbarSection };
