"use client";

import { motion } from "framer-motion";

type Milestone = {
    date: string;
    event: string;
};

export default function MilestoneTimeline({
    milestones,
}: {
    milestones: Milestone[];
}) {
    return (
        <div className="relative">
            {/* Garis */}
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute left-[11px] top-2 bottom-2 w-0.5"
                style={{ background: "rgba(111,150,209,0.3)" }}
            />

            <div className="space-y-8">
                {milestones.map((m, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className="flex items-start gap-6 pl-10 relative"
                    >
                        {/* DOT */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                                delay: i * 0.2 + 0.2,
                                type: "spring",
                                stiffness: 200,
                            }}
                            className="absolute left-0 top-1 w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center"
                            style={{ borderColor: "#6F96D1" }}
                        >
                            <span
                                className="w-2 h-2 rounded-full"
                                style={{ background: "#6F96D1" }}
                            />
                        </motion.div>

                        {/* CONTENT */}
                        <div className="flex-1 pb-2">
                            <span
                                className="text-sm font-bold block"
                                style={{ color: "#6F96D1" }}
                            >
                                {m.date}
                            </span>
                            <p className="mt-1 text-brand-navy/65">{m.event}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}