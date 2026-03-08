import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Star, ShieldCheck, HeartHandshake, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function PricingOptions() {
    const { t } = useTranslation();
    const pricingPlans = t('pricing.plans', { returnObjects: true }) as any[];
    const whyUs = t('pricing.why', { returnObjects: true }) as any[];
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="container px-4 mx-auto md:px-6">

                {/* Header */}
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <Badge className="px-4 py-1 mb-4 text-teal-800 border-none bg-teal-100/80 hover:bg-teal-200/80">
                        {t('pricing.badge')}
                    </Badge>
                    <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl text-slate-900">
                        {t('pricing.title_prefix', 'Investment')}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-pink-500">{t('pricing.title')}</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        {t('pricing.desc')}
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 gap-6 mb-24 md:grid-cols-2 lg:grid-cols-4">
                    {pricingPlans.map((plan, idx) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative rounded-3xl p-6 sm:p-8 flex flex-col h-full bg-gradient-to-bl ${plan.color} ${plan.highlight
                                    ? 'ring-4 ring-teal-500/30 scale-100 lg:scale-105 z-10 shadow-2xl'
                                    : 'border border-slate-200/50 shadow-lg scale-100'
                                } transition-transform`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2">
                                    <Badge className="px-4 py-1 text-xs font-bold tracking-wider text-white uppercase bg-teal-500 border-none shadow-md">
                                        Bán chạy nhất
                                    </Badge>
                                </div>
                            )}

                                <div className="mb-6">
                                <p className="mb-1 text-sm font-bold text-slate-500">{t(`pricing.plans.${idx}.theme`, plan.theme)}</p>
                                <h3 className="text-2xl font-bold text-slate-900">{t(`pricing.plans.${idx}.name`, plan.name)}</h3>
                            </div>

                            <div className="p-4 mb-6 space-y-4 bg-white/60 rounded-xl">
                                <div>
                                    <p className="mb-1 text-xs font-semibold tracking-wider uppercase text-slate-400">Phần cứng</p>
                                    <p className="text-xl font-bold text-slate-900">{plan.hardware}</p>
                                </div>
                                {plan.software !== 'Turnkey' && (
                                    <div>
                                        <p className="mb-1 text-xs font-semibold tracking-wider uppercase text-slate-400">Phần mềm (Thuê bao)</p>
                                        <p className="text-lg font-bold text-teal-700">{plan.software}</p>
                                    </div>
                                )}
                            </div>

                            <p className="text-slate-600 text-sm mb-6 min-h-[40px]">
                                {t(`pricing.plans.${idx}.description`, plan.description)}
                            </p>

                            <ul className="flex-1 mb-8 space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                                        <span>{t(`pricing.plans.${idx}.features.${i}`, feature)}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.button as any}
                                className={`w-full rounded-2xl h-12 font-semibold ${plan.button === 'default' ? 'bg-teal-600 hover:bg-teal-700 shadow-xl shadow-teal-500/20' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-900'
                                    }`}
                            >
                                {t('pricing.button_text')}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose VibeBooth? */}
                <div className="glass-dark bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div className="absolute -top-[50%] -left-[10%] w-[80%] h-[150%] bg-teal-500/20 blur-[120px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10 mb-12 text-center">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <ShieldCheck className="w-6 h-6 text-teal-400" />
                            <h3 className="text-2xl font-bold tracking-tight text-white md:text-4xl">{t('pricing.why_title')}</h3>
                        </div>
                        <p className="max-w-2xl mx-auto text-slate-300">{t('pricing.why_desc')}</p>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {whyUs.map((item, idx) => {
                            const icons = [
                                <Code2 key="code" className="w-8 h-8 text-teal-600" />,
                                <Star key="star" className="w-8 h-8 text-pink-600" />,
                                <HeartHandshake key="heart" className="w-8 h-8 text-amber-600" />
                            ];
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 }}
                                    className="p-6 transition-colors border bg-slate-800/50 backdrop-blur-md border-slate-700/50 rounded-3xl hover:bg-slate-800/80"
                                >
                                    <div className="flex items-center justify-center mb-5 border shadow-inner w-14 h-14 bg-slate-900 rounded-2xl border-slate-700">
                                        {icons[idx]}
                                    </div>
                                    <h4 className="mb-3 text-xl font-bold text-white">{item.title}</h4>
                                    <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
