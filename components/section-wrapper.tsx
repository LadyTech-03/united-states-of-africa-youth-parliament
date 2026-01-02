interface SectionWrapperProps {
    children: React.ReactNode
    className?: string
}

const SectionWrapper = ({ children, className }: SectionWrapperProps) => {
    return (
        <section className={`container mx-auto px-4 py-8 ${className}`}>
            {children}
        </section>
    )
}

export default SectionWrapper
