import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

import type { FaqItem } from "@/types/landing-page";
import { Head } from "@inertiajs/react";

type FAQsPageProps = {
    faqItems: FaqItem[];
    whatsappUrl: string;
};

export default function FAQsPage({ faqItems, whatsappUrl }: FAQsPageProps) {
    const [openId, setOpenId] = useState<number | null>(
        faqItems[0]?.id ?? null,
    );

    return (
        <>
            <Head title="FAQs">
                <meta
                    name="description"
                    content="The answers to some of the questions families ask us most often."
                />
            </Head>

            <main className="min-h-screen bg-[#FFF9F5] px-5 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pb-20">
                <div className="mx-auto max-w-3xl">
                    {/* Heading */}
                    <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D94D83] sm:text-sm">
                            Frequently Asked Questions
                        </p>

                        <h1 className="font-serif text-4xl leading-tight tracking-tight text-[#292524] sm:text-5xl">
                            Everything You Need to Know
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#78716C] sm:text-base">
                            We understand that every family has different needs.
                            Here are answers to some of the questions families
                            ask us most often.
                        </p>
                    </header>

                    {/* FAQ list */}
                    {faqItems.length > 0 && (
                        <section
                            aria-label="Frequently asked questions"
                            className="overflow-hidden rounded-xl border border-[#E7DCD6] bg-white shadow-sm"
                        >
                            {faqItems.map((item, index) => {
                                const isOpen = openId === item.id;

                                return (
                                    <article
                                        key={item.id}
                                        className={
                                            index !== faqItems.length - 1
                                                ? "border-b border-[#E7DCD6]"
                                                : ""
                                        }
                                    >
                                        <h2>
                                            <button
                                                type="button"
                                                aria-expanded={isOpen}
                                                aria-controls={`faq-answer-${item.id}`}
                                                onClick={() =>
                                                    setOpenId(
                                                        isOpen ? null : item.id,
                                                    )
                                                }
                                                className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left transition-colors hover:bg-[#FFFAFC] sm:px-6 sm:py-4.5"
                                            >
                                                <span className="text-sm font-medium leading-6 text-[#292524] sm:text-base">
                                                    {item.question}
                                                </span>

                                                <span
                                                    className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-[#FCEEF2] text-[#D94D83] transition-transform duration-200 ${
                                                        isOpen
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                >
                                                    <ChevronDown
                                                        className="size-4"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </button>
                                        </h2>

                                        {isOpen && (
                                            <div
                                                id={`faq-answer-${item.id}`}
                                                className="px-5 pb-5 sm:px-6 sm:pb-6"
                                            >
                                                <p className="text-sm leading-7 text-[#78716C]">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        )}
                                    </article>
                                );
                            })}
                        </section>
                    )}

                    {/* Contact CTA */}
                    <section className="mt-7 rounded-xl bg-[#292524] px-6 py-8 text-center sm:mt-8 sm:px-10 sm:py-10">
                        <h2 className="font-serif text-2xl leading-snug text-[#FFF9F5] sm:text-3xl">
                            Have a specific question about your family?
                        </h2>

                        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#D6CEC9]">
                            We are happy to help you find the right childcare
                            arrangement for your Bali stay.
                        </p>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#E8A7B0] px-5 py-2.5 text-sm font-medium text-[#292524] transition-colors hover:bg-[#F2BAC2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A7B0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#292524]"
                        >
                            <MessageCircle
                                className="size-4"
                                aria-hidden="true"
                            />
                            Chat With Us on WhatsApp
                        </a>
                    </section>
                </div>
            </main>
        </>
    );
}
