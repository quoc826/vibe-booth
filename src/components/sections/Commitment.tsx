import { motion } from 'framer-motion';
import { ClipboardCheck, Ruler, CalendarClock, Handshake } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const commitmentPoints = [
    { id: 1, icon: <ClipboardCheck className="w-6 h-6 text-teal-600" />, color: "bg-teal-50" },
    { id: 2, icon: <Ruler className="w-6 h-6 text-pink-600" />, color: "bg-pink-50" },
    { id: 3, icon: <CalendarClock className="w-6 h-6 text-indigo-600" />, color: "bg-indigo-50" },
    { id: 4, icon: <Handshake className="w-6 h-6 text-amber-600" />, color: "bg-amber-50" }
];

export default function Commitment() {
    const { t } = useTranslation();
    return (
        <section className="relative py-24 overflow-hidden bg-white">
            <div className="container relative z-10 px-4 mx-auto md:px-6">

                <div className="flex flex-col items-center gap-16 lg:flex-row">

                    {/* Left Content - Text & Steps */}
                    <div className="flex flex-col gap-8 lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl text-slate-900">
                                {t('commitment.title_part1')} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">{t('commitment.title_highlight')}</span>
                            </h2>
                            <p className="mb-4 text-lg leading-relaxed text-slate-600">
                                {t('commitment.p1')}
                            </p>
                            <p className="py-1 pl-4 text-base italic border-l-4 text-slate-500 border-slate-200">
                                {t('commitment.quote')}
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {commitmentPoints.map((point, idx) => (
                                <motion.div
                                    key={point.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 + 0.3 }}
                                >
                                    <Card className="h-full transition-shadow shadow-sm border-slate-100 hover:shadow-md bg-slate-50/50">
                                        <CardContent className="flex flex-col gap-3 p-5">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${point.color}`}>
                                                {point.icon}
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-800">{t(`commitment.points.${point.id - 1}.title`)}</h3>
                                            <p className="text-sm leading-relaxed text-slate-600">{t(`commitment.points.${point.id - 1}.desc`)}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Image / Blueprint */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Decorative backgrounds */}
                            <div className="absolute inset-0 transform scale-105 opacity-50 bg-gradient-to-tr from-teal-100 to-pink-100 rounded-3xl rotate-3 blur-lg"></div>
                            <div className="absolute inset-0 transform bg-slate-900 rounded-3xl -rotate-2"></div>

                            {/* Main Image Container */}
                            <div className="relative p-2 bg-white border shadow-2xl md:p-4 rounded-3xl border-slate-200">
                                <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-100 group">
                                    <img
                                        src="/commitment-blueprint.jpg"
                                        alt="Bản vẽ kỹ thuật và Demo 3D Photobooth chi tiết của VibeBooth"
                                        className="w-full h-auto object-cover max-h-[600px] transition-transform duration-700"
                                        onError={(e) => {
                                            (e.currentTarget as HTMLImageElement).src = `https://placehold.co/800x600/e2e8f0/64748b?text=Blueprint+Image`;
                                        }}
                                    />

                                    {/* Overlay Tags */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-sm border border-slate-200/50 flex items-center gap-1.5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                        Approved Design
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
