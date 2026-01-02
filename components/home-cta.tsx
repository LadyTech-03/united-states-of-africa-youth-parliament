import { CardContent, Card } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import SectionWrapper from "./section-wrapper"

const HomeCtaSection = () => {
    return (
        <>
            <SectionWrapper>
                <Card className="border-none shadow-2xl bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
                <CardContent className="p-12 text-center relative">
                    <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                    </div>
                    <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-serif">
                        Stay Informed. Stay Engaged. Stay Connected.
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
                        Subscribe to receive updates on legislation, committee meetings, and parliamentary activities directly
                        to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="max-w-md bg-white text-foreground"
                        />
                        <Button size="lg" variant="secondary" className="px-8">
                        Subscribe Now
                        </Button>
                    </div>
                    </div>
                </CardContent>
                </Card>
            </SectionWrapper>
        </>
    )
}

export default HomeCtaSection
