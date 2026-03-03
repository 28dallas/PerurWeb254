"use client";

import { motion } from "framer-motion";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    { year: "2019", children: 200, women: 50, youth: 0 },
    { year: "2020", children: 450, women: 120, youth: 80 },
    { year: "2021", children: 600, women: 250, youth: 200 },
    { year: "2022", children: 950, women: 380, youth: 410 },
    { year: "2023", children: 1200, women: 450, youth: 580 },
    { year: "2024", children: 1500, women: 480, youth: 620 },
];

export function ImpactChart() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] w-full rounded-xl2 bg-white p-6 shadow-soft"
        >
            <h3 className="mb-6 text-lg font-semibold text-brandBlue">Communities Reached (Year-over-Year)</h3>
            <ResponsiveContainer width="100%" height="90%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorChildren" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0B3C5D" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#0B3C5D" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorWomen" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1E7F4F" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#1E7F4F" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorYouth" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F4A300" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#F4A300" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} dx={-10} />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <Tooltip
                        contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                        labelStyle={{ fontWeight: "bold", color: "#0B3C5D", marginBottom: "4px" }}
                    />
                    <Area type="monotone" dataKey="children" name="Children Protected" stroke="#0B3C5D" strokeWidth={3} fillOpacity={1} fill="url(#colorChildren)" />
                    <Area type="monotone" dataKey="women" name="Women Empowered" stroke="#1E7F4F" strokeWidth={3} fillOpacity={1} fill="url(#colorWomen)" />
                    <Area type="monotone" dataKey="youth" name="Youth Skilled" stroke="#F4A300" strokeWidth={3} fillOpacity={1} fill="url(#colorYouth)" />
                </AreaChart>
            </ResponsiveContainer>
        </motion.div>
    );
}
