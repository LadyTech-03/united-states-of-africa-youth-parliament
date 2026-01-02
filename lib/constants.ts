interface SubMenu {
  name: string
  href: string
  separator?: boolean
  separatorPosition?: "border-t" | "border-b"
  external?: boolean
}

export interface NavItem {
  name: string
  href?: string
  submenu?: SubMenu[]
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Parliament Business",
    // href: "/parliament-business",
    submenu: [
      { name: "Committees of Parliament", href: "/parliament-business/committees", separator: true, separatorPosition: "border-b" },
      { name: "Agenda", href: "/parliament-business/agenda" },
      { name: "Business Statement", href: "/parliament-business/statement" },
      { name: "Order Paper", href: "/parliament-business/order-paper" },
      { name: "Votes & Proceedings", href: "/parliament-business/votes-proceedings", separator: true, separatorPosition: "border-b" },
      { name: "Acts", href: "/parliament-business/acts" },
      { name: "Bills", href: "/parliament-business/bills" },
      { name: "Instruments", href: "/parliament-business/instruments" },
      { name: "Official Journal", href: "/parliament-business/journal" },
    ],
  },
  {
    name: "MPs & Offices",
    // href: "/mp-offices",
    submenu: [
      { name: "Overview", href: "/mp-offices/overview" },
      { name: "Speaker's Office", href: "/mp-offices/speaker" },
      { name: "Members of Parliament", href: "/mp-offices/mps" },
      { name: "Leadership of Parliament", href: "/mp-offices/leader", separator: true, separatorPosition: "border-b" },
      { name: "Library", href: "/mp-offices/library", external: true },
    ],
  },
  { 
    name: "About", 
    // href: "/about" 
    submenu: [
      { name: "Overview", href: "/about/overview" },
      { name: "Vision & Mission", href: "/about/vision-mission" },
      { name: "Structure & Governance", href: "/about/structure-governance" },
    ]
  },
  {
    name: "Publications",
    // href: "/publications",
    submenu: [
      { name: "Research Papers", href: "/publications/research-papers" },
      { name: "Official Reports", href: "/publications/official-reports" },
      { name: "Journals & Statements", href: "/publications/journals-statements", separator: true, separatorPosition: "border-b" },
      { name: "Press Releases", href: "/publications/press-releases" },
    ],
  },
  { name: "Visits", href: "/visit" },
  {
    name: "Media",
    // href: "/media",
    submenu: [
      { name: "Photo Gallery", href: "/media/gallery" },
      { name: "Videos", href: "/media/video" },
    ],
  },
]

export const TOPBAR_TEXT = "Welcome to The United States of Africa Youth Parliament"
export const CONTACT_EMAIL = "info@youthparliament.gov"
export const CONTACT_PHONE = "+0 (000) 000-0000"

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { name: "Youtube", href: "https://youtube.com", icon: "youtube" },
  { name: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { name: "Mail", href: "https://mail.com", icon: "mail" },
  // { name: "Whatsapp", href: "https://whatsapp.com", icon: "whatsapp" },
]

export interface ProceedingVideo {
  id: string
  title: string
  date: string
  duration: string
  youtubeUrl: string
  thumbnailUrl: string
  category: string
}

export interface FeaturedMP {
  id: string
  name: string
  title: string
  constituency: string
  party: string
  imageUrl: string
  profileUrl: string
}

export interface InsightCard {
  id: string
  title: string
  imageUrl: string
  linkUrl: string
}

export const PROCEEDING_VIDEOS: ProceedingVideo[] = [
  {
    id: "1",
    title: "Budget Session 2025 - Day 3 Debate",
    date: "January 15, 2025",
    duration: "2:34:15",
    youtubeUrl: "https://youtube.com/watch?v=",
    thumbnailUrl: "/placeholder.svg?key=osk97",
    category: "Budget Session",
  },
  {
    id: "2",
    title: "Question Time with the Prime Minister",
    date: "January 12, 2025",
    duration: "1:45:30",
    youtubeUrl: "https://youtube.com/watch?v=",
    thumbnailUrl: "/placeholder.svg?key=5v42u",
    category: "Question Time",
  },
  {
    id: "3",
    title: "Standing Committee on Finance - Public Hearing",
    date: "January 10, 2025",
    duration: "3:12:45",
    youtubeUrl: "https://youtube.com/watch?v=",
    thumbnailUrl: "/placeholder.svg?key=r2jna",
    category: "Committee",
  },
  {
    id: "4",
    title: "Healthcare Reform Bill - Second Reading",
    date: "January 8, 2025",
    duration: "2:05:20",
    youtubeUrl: "https://youtube.com/watch?v=",
    thumbnailUrl: "/placeholder.svg?key=gyobw",
    category: "Legislation",
  },
  {
    id: "5",
    title: "State of the Nation Address",
    date: "January 5, 2025",
    duration: "1:30:00",
    youtubeUrl: "https://youtube.com/watch?v=",
    thumbnailUrl: "/placeholder.svg?key=7j71h",
    category: "Special Session",
  },
]

export const FEATURED_MPS: FeaturedMP[] = [
  {
    id: "1",
    name: "Hon. Sarah Mitchell",
    title: "Speaker of Parliament",
    constituency: "Central District",
    party: "Independent",
    imageUrl: "/images/speaker.jpg?key=srjue",
    profileUrl: "/members/sarah-mitchell",
  },
  {
    id: "2",
    name: "Hon. James Chen",
    title: "Minister of Finance",
    constituency: "Harbor Bay",
    party: "Progressive Alliance",
    imageUrl: "/images/speaker.jpg?key=d3tyf",
    profileUrl: "/members/james-chen",
  },
  {
    id: "3",
    name: "Hon. Amara Okonkwo",
    title: "Leader of Opposition",
    constituency: "Northern Region",
    party: "National Coalition",
    imageUrl: "/images/speaker.jpg?key=6cqul",
    profileUrl: "/members/amara-okonkwo",
  },
  {
    id: "4",
    name: "Hon. David Kimani",
    title: "Minister of Health",
    constituency: "Eastside",
    party: "Progressive Alliance",
    imageUrl: "/images/speaker.jpg?key=0gp19",
    profileUrl: "/members/david-kimani",
  },
]

export const INSIGHT_CARDS: InsightCard[] = [
  {
    id: "1",
    title: "Constitutional Values Parliamentary Alert",
    imageUrl: "/images/insight.png",
    linkUrl: "/insights/constitutional-values",
  },
  {
    id: "2",
    title: "Subsidiary Legislation Parliamentary Alert",
    imageUrl: "/images/insight1.png",
    linkUrl: "/insights/subsidiary-legislation",
  },
  {
    id: "3",
    title: "Democracy and Freedom Parliamentary Alert",
    imageUrl: "/images/insight.png",
    linkUrl: "/insights/democracy-values",
  },
  {
    id: "4",
    title: "Democracy Cup 2025 Event",
    imageUrl: "/images/insight1.png",
    linkUrl: "/events/democracy-cup-2025",
  },
]
