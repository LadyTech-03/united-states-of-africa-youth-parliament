"use client"

import Link from "next/link"
import { Search, Menu, Phone, Mail, ChevronDown, X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NAV_ITEMS, SOCIAL_LINKS, TOPBAR_TEXT, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants"
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
  instagram: Instagram,
}

export function MainNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <span className="hidden sm:inline font-medium tracking-wide">{TOPBAR_TEXT}</span>
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Phone className="h-3 w-3" />
                  <span className="hidden md:inline">{CONTACT_PHONE}</span>
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="h-3 w-3" />
                  <span className="hidden lg:inline">{CONTACT_EMAIL}</span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons]
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold tracking-tight text-primary uppercase">Parliament</span>
              </Link>

              <nav className="hidden lg:flex items-center space-x-1">
                {NAV_ITEMS.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary text-foreground/80 rounded-md hover:bg-muted"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary text-foreground/80 rounded-md hover:bg-muted">
                        {item.name}
                        {item.submenu && <ChevronDown className="h-3.5 w-3.5" />}
                      </button>
                    )}

                    {item.submenu && activeDropdown === item.name && (
                      <div className="absolute left-0 top-full pt-2 w-56 animate-in fade-in-0 zoom-in-95">
                        <div className="bg-background border rounded-lg shadow-xl py-2">
                          {item.submenu.map((subItem, index) => {
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                target={subItem.external ? "_blank" : "_self"}
                                className={`flex items-center justify-between px-4 py-2 text-sm hover:bg-muted transition-colors ${subItem.separator ? subItem.separatorPosition : ""} group`}
                              >
                                {subItem.name}
                                {subItem.external && <ExternalLink className="size-3 hidden group-hover:block group-hover:text-primary" />}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden lg:block">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search bills, MPs, debates..."
                  className="pl-8 w-[280px] bg-muted/50 focus:bg-background transition-all"
                />
              </div>

              <Button
                variant="outline"
                size="icon"
                className="lg:hidden bg-transparent"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle Menu</span>
              </Button>
                <Link href="/contact">
                  <Button variant="secondary" className="hidden sm:inline-flex">
                    Contact Us
                  </Button>
                </Link>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden border-t py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.name}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div>
                      <button
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium hover:bg-muted rounded-md"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn("h-4 w-4 transition-transform", activeDropdown === item.name && "rotate-180")}
                        />
                      </button>
                      {activeDropdown === item.name && item.submenu && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.submenu.map((subItem, index) => {
                            if ("separator" in subItem) {
                              return <div key={`sep-${index}`} className="my-2 border-t" />
                            }
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 pt-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search..." className="pl-8 bg-muted/50" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
