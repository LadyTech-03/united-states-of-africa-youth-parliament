import Link from "next/link"
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight uppercase">Parliament</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              The supreme legislative body dedicated to serving the citizens through law-making, representation, and
              oversight.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-xs">Resources</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link href="/legislation" className="hover:text-white transition-colors">
                  Hansard Records
                </Link>
              </li>
              <li>
                <Link href="/legislation" className="hover:text-white transition-colors">
                  Acts of Parliament
                </Link>
              </li>
              <li>
                <Link href="/legislation" className="hover:text-white transition-colors">
                  Standing Orders
                </Link>
              </li>
              <li>
                <Link href="/legislation" className="hover:text-white transition-colors">
                  Parliamentary Calendar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-xs">Engagement</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link href="/visit" className="hover:text-white transition-colors">
                  Public Participation
                </Link>
              </li>
              <li>
                <Link href="/visit" className="hover:text-white transition-colors">
                  Submit a Petition
                </Link>
              </li>
              <li>
                <Link href="/visit" className="hover:text-white transition-colors">
                  School Programs
                </Link>
              </li>
              <li>
                <Link href="/visit" className="hover:text-white transition-colors">
                  Visiting Hours
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Constitution Ave, Capital City, CP 1000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+1 (555) 0123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@parliament.gov</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>© 2026 National Parliament. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="hover:text-white">
              Accessibility Statement
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
