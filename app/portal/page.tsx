"use client";

import { useState } from "react";
import { HiOutlineHeart, HiOutlineClock, HiOutlineDocumentDownload, HiOutlineCurrencyDollar } from "react-icons/hi";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { AnimatedInView } from "@/components/ui/AnimatedInView";

// Future integration: Replace with real user data securely fetched via NextAuth session
const mockUser = {
    name: "Supporter",
    role: "Recurring Donor & Volunteer",
    joinDate: "March 2023",
    totalDonated: 1450,
    volunteerHours: 42,
    nextDonation: "2026-03-15",
    recentHistory: [
        { id: 1, date: "2026-02-15", type: "Donation", amount: "$50", program: "Girls Education Fund" },
        { id: 2, date: "2026-01-20", type: "Volunteer", hours: "4 hrs", program: "Tree Nursery Setup" },
        { id: 3, date: "2026-01-15", type: "Donation", amount: "$50", program: "Girls Education Fund" }
    ]
};

export default function PortalDashboard() {
    const [activeTab, setActiveTab] = useState<"overview" | "history" | "documents">("overview");

    return (
        <>
            <PageHero
                title={`Welcome back, ${mockUser.name}`}
                description="Manage your recurring impact, download tax receipts, and log your volunteer hours."
            />

            <Section className="bg-softGray/50">
                <div className="flex flex-col gap-8 lg:flex-row">

                    {/* Sidebar */}
                    <aside className="w-full lg:w-64 shrink-0">
                        <div className="rounded-xl2 bg-white p-5 shadow-soft">
                            <div className="mb-6 border-b border-slate-100 pb-4">
                                <p className="font-semibold text-brandBlue">{mockUser.name}</p>
                                <p className="text-sm text-brandGreen">{mockUser.role}</p>
                                <p className="mt-1 text-xs text-slate-500">Supporter since {mockUser.joinDate}</p>
                            </div>

                            <nav className="flex flex-col gap-2">
                                <button
                                    onClick={() => setActiveTab("overview")}
                                    className={`rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors ${activeTab === "overview" ? "bg-brandBlue text-white" : "text-slate-600 hover:bg-slate-50"
                                        }`}
                                >
                                    Impact Overview
                                </button>
                                <button
                                    onClick={() => setActiveTab("history")}
                                    className={`rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors ${activeTab === "history" ? "bg-brandBlue text-white" : "text-slate-600 hover:bg-slate-50"
                                        }`}
                                >
                                    History & Logging
                                </button>
                                <button
                                    onClick={() => setActiveTab("documents")}
                                    className={`rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors ${activeTab === "documents" ? "bg-brandBlue text-white" : "text-slate-600 hover:bg-slate-50"
                                        }`}
                                >
                                    Tax Documents
                                </button>
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1">
                        {activeTab === "overview" && (
                            <AnimatedInView>
                                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="rounded-xl2 border border-slate-200 bg-white p-6 shadow-sm">
                                        <HiOutlineHeart className="mb-3 h-8 w-8 text-brandGreen" />
                                        <p className="text-3xl font-bold text-brandBlue">${mockUser.totalDonated}</p>
                                        <p className="text-sm text-slate-600">Total Contributed</p>
                                    </div>
                                    <div className="rounded-xl2 border border-slate-200 bg-white p-6 shadow-sm">
                                        <HiOutlineClock className="mb-3 h-8 w-8 text-brandOrange" />
                                        <p className="text-3xl font-bold text-brandBlue">{mockUser.volunteerHours}</p>
                                        <p className="text-sm text-slate-600">Hours Volunteered</p>
                                    </div>
                                    <div className="rounded-xl2 border border-brandBlue/10 bg-brandBlue/5 p-6 md:col-span-2 lg:col-span-1">
                                        <HiOutlineCurrencyDollar className="mb-3 h-8 w-8 text-brandBlue" />
                                        <p className="text-lg font-semibold text-brandBlue">Next Recurring</p>
                                        <p className="text-sm text-slate-600">Scheduled for {mockUser.nextDonation}</p>
                                        <button className="mt-3 text-sm font-semibold text-brandGreen hover:underline">Manage Subscription</button>
                                    </div>
                                </div>
                            </AnimatedInView>
                        )}

                        {activeTab === "history" && (
                            <AnimatedInView>
                                <div className="rounded-xl2 border border-slate-200 bg-white shadow-soft overflow-hidden">
                                    <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-6 py-4">
                                        <h3 className="font-semibold text-brandBlue">Recent Activity</h3>
                                        <button className="text-sm font-semibold text-brandGreen hover:underline">+ Log Volunteer Hours</button>
                                    </div>
                                    <ul className="divide-y divide-slate-100">
                                        {mockUser.recentHistory.map((item) => (
                                            <li key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 gap-2 sm:gap-0">
                                                <div>
                                                    <p className="font-medium text-slate-800">{item.program}</p>
                                                    <p className="text-sm text-slate-500">{item.date} &bull; {item.type}</p>
                                                </div>
                                                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${item.type === "Donation" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                                                    }`}>
                                                    {item.amount || item.hours}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedInView>
                        )}

                        {activeTab === "documents" && (
                            <AnimatedInView>
                                <div className="rounded-xl2 border border-dashed border-slate-300 bg-white p-10 text-center">
                                    <HiOutlineDocumentDownload className="mx-auto mb-4 h-12 w-12 text-slate-400" />
                                    <h3 className="text-lg font-semibold text-brandBlue">2025 Annual Tax Receipt</h3>
                                    <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
                                        Your consolidated annual contribution summary is ready for download.
                                    </p>
                                    <button className="mt-6 rounded-lg bg-brandBlue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brandGreen">
                                        Download PDF
                                    </button>
                                </div>
                            </AnimatedInView>
                        )}
                    </main>

                </div>
            </Section>
        </>
    );
}
