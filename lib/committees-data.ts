/**
 * Parliamentary Committees Data
 * Simplified for clear listing and filtering.
 */

export type CommitteeCategory = "Economy" | "Social" | "Governance" | "Technology" | "Regional" | "Environment" | "Security"

export interface CommitteeMember {
    name: string
    role: "Chairperson" | "Vice Chairperson" | "Member"
    party: string
    constituency?: string
}

export interface Committee {
    id: string
    number: number
    name: string
    category: CommitteeCategory
    description: string
    members: CommitteeMember[]
}

export const COMMITTEES: Committee[] = [
    {
        id: "economic-development",
        number: 1,
        name: "Economic Development & Youth Employment",
        category: "Economy",
        description: "Focuses on economic policy, entrepreneurship, and strategies for reducing youth unemployment.",
        members: [
            { name: "Hon. Sarah Johnson", role: "Chairperson", party: "Progressive Alliance", constituency: "Central District" },
            { name: "Hon. Michael Chen", role: "Vice Chairperson", party: "National Coalition", constituency: "West End" }
        ]
    },
    {
        id: "education-innovation",
        number: 2,
        name: "Education, Innovation & Skills for the Future",
        category: "Social",
        description: "Oversees education reform, skills development, and preparing youth for the future economy.",
        members: [
            { name: "Hon. Amara Diallo", role: "Chairperson", party: "Future Party", constituency: "Highland Park" },
            { name: "Hon. Robert Fox", role: "Vice Chairperson", party: "Progressive Alliance", constituency: "Valley View" }
        ]
    },
    {
        id: "digital-sovereignty",
        number: 3,
        name: "Digital Sovereignty & Technology",
        category: "Technology",
        description: "Addresses digital infrastructure, data rights, and technological independence.",
        members: [
            { name: "Hon. Kwame Mensah", role: "Chairperson", party: "Tech Forward", constituency: "Innovation Hub" },
            { name: "Hon. Linda Gates", role: "Vice Chairperson", party: "Progressive Alliance", constituency: "Silicon Valley" }
        ]
    },
    {
        id: "governance-ethics",
        number: 4,
        name: "Governance, Ethics & Anti-Corruption",
        category: "Governance",
        description: "Promotes transparency, ethical leadership, and institutional integrity.",
        members: [
            { name: "Hon. Nelson Mandela II", role: "Chairperson", party: "Unity Party", constituency: "Capitol District" },
            { name: "Hon. Grace Kelly", role: "Vice Chairperson", party: "National Coalition", constituency: "Old Town" }
        ]
    },
    {
        id: "pan-african-integration",
        number: 5,
        name: "Pan-African Integration & Free Movement",
        category: "Regional",
        description: "Works towards continental unity, border policies, and free movement of people.",
        members: [
            { name: "Hon. Patrice Lumumba II", role: "Chairperson", party: "Pan-Africanist Union", constituency: "Border Region" },
            { name: "Hon. Sophie Dubois", role: "Vice Chairperson", party: "Progressive Alliance", constituency: "Port City" }
        ]
    },
    {
        id: "climate-agriculture",
        number: 6,
        name: "Climate, Agriculture & Food Security",
        category: "Environment",
        description: "Deals with environmental sustainability, climate resilience, and agricultural systems.",
        members: [
            { name: "Hon. Wangari Maathai II", role: "Chairperson", party: "Green Party", constituency: "Forest Hills" },
            { name: "Hon. Peter Farm", role: "Vice Chairperson", party: "National Coalition", constituency: "Plains" }
        ]
    },
    {
        id: "health-wellbeing",
        number: 7,
        name: "Health, Mental Wellbeing & Social Protection",
        category: "Social",
        description: "Ensures healthcare access, mental health support, and social safety nets.",
        members: [
            { name: "Hon. Dr. Seema Patel", role: "Chairperson", party: "Health First", constituency: "Medical District" },
            { name: "Hon. Mark Spencer", role: "Vice Chairperson", party: "Progressive Alliance", constituency: "Suburbs" }
        ]
    },
    {
        id: "culture-identity",
        number: 8,
        name: "Culture, Identity & African Renaissance",
        category: "Social",
        description: "Preserves heritage, promotes arts, and fosters a strong African identity.",
        members: [
            { name: "Hon. Chimamanda Adichie II", role: "Chairperson", party: "Culture Party", constituency: "Arts District" },
            { name: "Hon. Artist One", role: "Vice Chairperson", party: "Independent", constituency: "Creative Quarter" }
        ]
    },
    {
        id: "security-peacebuilding",
        number: 9,
        name: "Security, Peacebuilding & Youth Justice",
        category: "Security",
        description: "Focuses on conflict resolution, peace initiatives, and justice reform.",
        members: [
            { name: "Hon. Kofi Annan II", role: "Chairperson", party: "Peace Party", constituency: "Diplomatic Zone" },
            { name: "Hon. General Lee", role: "Vice Chairperson", party: "National Coalition", constituency: "Fort District" }
        ]
    },
    {
        id: "diaspora-affairs",
        number: 10,
        name: "Diaspora Affairs & Global African Relations",
        category: "Regional",
        description: "Strengthens ties with the global African diaspora and international relations.",
        members: [
            { name: "Hon. Marcus Garvey II", role: "Chairperson", party: "Diaspora Union", constituency: "International" },
            { name: "Hon. London Bridge", role: "Vice Chairperson", party: "Progressive Alliance", constituency: "Overseas" }
        ]
    }
]
