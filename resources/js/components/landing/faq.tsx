import { useEffect, useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { FaqItem } from "@/types/landing-page";

export type FAQSectionProps = {
    items: FaqItem[];
    whatsappUrl: string;
    eyebrow?: string;
    title?: string;
    description?: string;
    ctaTitle?: string;
    ctaDescription?: string;
    ctaLabel?: string;
    defaultOpenIndex?: number | null;
};

export default function FAQSection({
    items,
    whatsappUrl,
    eyebrow = "Frequently Asked Questions",
    title = "Everything You Need to Know",
    description = "We understand that every family has different needs. Here are answers to some of the questions families ask us most often.",
    ctaTitle = "Have a specific question about your family?",
    ctaDescription = "We are happy to help you find the right childcare arrangement for your Bali stay.",
    ctaLabel = "Chat With Us on WhatsApp",
    defaultOpenIndex = 0,
}: FAQSectionProps) {
    const getInitialIndex = () => {
        if (
            defaultOpenIndex === null ||
            defaultOpenIndex === undefined ||
            defaultOpenIndex < 0 ||
            defaultOpenIndex >= items.length
        ) {
            return null;
        }

        return defaultOpenIndex;
    };

    const [openIndex, setOpenIndex] = useState<number | null>(
        getInitialIndex(),
    );

    useEffect(() => {
        setOpenIndex((currentIndex) => {
            if (
                currentIndex !== null &&
                currentIndex >= 0 &&
                currentIndex < items.length
            ) {
                return currentIndex;
            }

            return getInitialIndex();
        });
    }, [items.length, defaultOpenIndex]);

    const toggleItem = (index: number) => {
        setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
    };

    return (
        <section
            id="faq"
            className="scroll-mt-24 bg-[#FFF9F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
            <div className="mx-auto max-w-4xl">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9828D]">
                        {eyebrow}
                    </p>

                    <h2 className="font-serif text-4xl leading-tight text-[#292524] sm:text-5xl">
                        {title}
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-[#78716C] sm:text-base">
                        {description}
                    </p>
                </div>

                <div className="mt-12 overflow-hidden rounded-2xl border border-[#E9DED7] bg-white shadow-sm">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;
                        const contentId = `faq-answer-${item.id}`;
                        const triggerId = `faq-question-${item.id}`;

                        return (
                            <div
                                key={item.id}
                                className="border-b border-[#E9DED7] last:border-b-0"
                            >
                                <button
                                    id={triggerId}
                                    type="button"
                                    onClick={() => toggleItem(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={contentId}
                                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-[#FFF9F5] sm:px-7"
                                >
                                    <span className="text-sm font-semibold leading-6 text-[#292524] sm:text-base">
                                        {item.question}
                                    </span>

                                    <span
                                        className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-[#FBECEF] text-[#C9828D] transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    >
                                        <ChevronDown
                                            className="size-4"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </button>

                                <div
                                    id={contentId}
                                    role="region"
                                    aria-labelledby={triggerId}
                                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                        isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-5 pb-6 pt-0 sm:px-7">
                                            <p className="max-w-3xl text-sm leading-7 text-[#78716C]">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 overflow-hidden rounded-2xl bg-[#292524] px-6 py-8 text-center sm:px-10 sm:py-10">
                    <div className="mx-auto max-w-2xl">
                        <h3 className="font-serif text-2xl text-[#FFF9F5] sm:text-3xl">
                            {ctaTitle}
                        </h3>

                        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#D6CEC9]">
                            {ctaDescription}
                        </p>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#E8A7B0] px-6 py-3 text-sm font-semibold text-[#292524] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F1B8C0] hover:shadow-lg"
                        >
                            <MessageCircle
                                className="size-4"
                                aria-hidden="true"
                            />
                            {ctaLabel}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
