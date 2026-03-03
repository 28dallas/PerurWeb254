"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
    amountRaised: number;
    fundingGoal: number;
    className?: string;
    showLabels?: boolean;
}

export function ProgressBar({ amountRaised, fundingGoal, className, showLabels = true }: ProgressBarProps) {
    // Safe limits to prevent overflow or NaN
    const safeGoal = Math.max(fundingGoal, 1);
    const safeRaised = Math.max(amountRaised, 0);
    const percentage = Math.min(Math.round((safeRaised / safeGoal) * 100), 100);

    // Format currency
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    });

    return (
        <div className={cn("w-full", className)}>
            {showLabels && (
                <div className="mb-2 flex items-center justify-between text-sm font-medium">
                    <span className="text-brandBlue">{formatter.format(safeRaised)} raised</span>
                    <span className="text-slate-500">Goal: {formatter.format(safeGoal)}</span>
                </div>
            )}
            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
                <motion.div
                    className="h-full rounded-full bg-brandGreen"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </div>
            {showLabels && (
                <p className="mt-1 text-right text-xs font-semibold text-brandGreen">
                    {percentage}% Funded
                </p>
            )}
        </div>
    );
}
