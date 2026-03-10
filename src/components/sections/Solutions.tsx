import { motion } from 'framer-motion';
import {
    Store,
    Layers,
    Glasses,
    CreditCard,
    PieChart,
    Headset,
    MapPin,
    Paintbrush,
    Wrench,
    Settings,
    PartyPopper
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const roadmapSteps = [
    { step: 1, key: 'solutions.roadmap_steps.0', icon: <MapPin className="w-4 h-4" /> },
    { step: 2, key: 'solutions.roadmap_steps.1', icon: <Paintbrush className="w-4 h-4" /> },
    { step: 3, key: 'solutions.roadmap_steps.2', icon: <Wrench className="w-4 h-4" /> },
    { step: 4, key: 'solutions.roadmap_steps.3', icon: <Settings className="w-4 h-4" /> },
    { step: 5, key: 'solutions.roadmap_steps.4', icon: <PartyPopper className="w-4 h-4" /> },
];

export default function Solutions() {
    const { t } = useTranslation();

    // ĐƯA VÀO TRONG ĐỂ DÙNG ĐƯỢC HÀM t()
    const spaceFeatures = [
        {
            title: t('solutions.space_features.0.title', 'Tư vấn Setup Concept'),
            desc: t('solutions.space_features.0.desc', 'Mẫu thiết kế shop từ hiện đại, minimalist đến dễ thương kiểu Hàn Quốc.'),
            icon: <Store className="w-5 h-5 text-teal-600" />
        },
        {
            title: t('solutions.space_features.1.title', 'Hệ thống Booth đa dạng'),
            desc: t('solutions.space_features.1.desc', 'Tùy biến nhiều phòng chụp (mỗi phòng một vibe) để tối ưu doanh thu.'),
            icon: <Layers className="w-5 h-5 text-teal-600" />
        },
        {
            title: t('solutions.space_features.2.title', 'Kệ trưng bày phụ kiện'),
            desc: t('solutions.space_features.2.desc', 'Gợi ý cách sắp xếp bờm, kính, đạo cụ tạo trải nghiệm mượt mà.'),
            icon: <Glasses className="w-5 h-5 text-teal-600" />
        }
    ];

    const opFeatures = [
        {
            title: t('solutions.ops_features.0.title', 'Smart Payment'),
            desc: t('solutions.ops_features.0.desc', 'Thanh toán online (QR) và offline (tiền mặt), tự động hóa quy trình.'),
            icon: <CreditCard className="w-5 h-5 text-pink-600" />
        },
        {
            title: t('solutions.ops_features.1.title', 'Dashboard từ xa'),
            desc: t('solutions.ops_features.1.desc', 'Theo dõi doanh thu, tình trạng giấy in và vật tư theo thời gian thực.'),
            icon: <PieChart className="w-5 h-5 text-pink-600" />
        },
        {
            title: t('solutions.ops_features.2.title', 'Support 24/7'),
            desc: t('solutions.ops_features.2.desc', 'Hỗ trợ kỹ thuật từ đội ngũ kỹ sư để máy luôn hoạt động 100%.'),
            icon: <Headset className="w-5 h-5 text-pink-600" />
        }
    ];

    return (
        <section id="solutions" className="relative py-24 overflow-hidden bg-slate-50">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

            <div className="container relative z-10 px-4 mx-auto md:px-6">

                {/* Header */}
                <div className="max-w-2xl mx-auto mb-20 text-center">
                    <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl text-slate-900">
                        {t('solutions.title')}
                    </h2>
                    <p className="text-lg text-slate-600">
                        {t('solutions.desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-16 mb-24 lg:grid-cols-2 lg:gap-8">

                    {/* Section 1: Space Component */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-teal-700 bg-teal-100 rounded-full">
                                {t('solutions.space_badge')}
                            </div>
                            <h3 className="mb-4 text-2xl font-bold md:text-3xl text-slate-900">
                                {t('solutions.space_title')}
                            </h3>
                            <p className="leading-relaxed text-slate-600">
                                {t('solutions.space_desc')}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {spaceFeatures.map((f, i) => (
                                <div key={i} className="flex items-start gap-4 p-5 transition-colors bg-white border shadow-sm rounded-2xl border-slate-100 group hover:border-teal-200">
                                    <div className="flex items-center justify-center w-10 h-10 transition-all rounded-full bg-teal-50 shrink-0 group-hover:bg-teal-100 group-hover:scale-110">
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-bold text-slate-900">{f.title}</h4>
                                        <p className="text-sm text-slate-600">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Section 2: Operations Component */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-pink-700 bg-pink-100 rounded-full">
                                {t('solutions.ops_badge')}
                            </div>
                            <h3 className="mb-4 text-2xl font-bold md:text-3xl text-slate-900">
                                {t('solutions.ops_title')}
                            </h3>
                            <p className="leading-relaxed text-slate-600">
                                {t('solutions.ops_desc')}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {opFeatures.map((f, i) => (
                                <div key={i} className="flex items-start gap-4 p-5 transition-colors bg-white border shadow-sm rounded-2xl border-slate-100 group hover:border-pink-200">
                                    <div className="flex items-center justify-center w-10 h-10 transition-all rounded-full bg-pink-50 shrink-0 group-hover:bg-pink-100 group-hover:scale-110">
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-bold text-slate-900">{f.title}</h4>
                                        <p className="text-sm text-slate-600">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Section 3: Roadmap */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative p-8 overflow-hidden bg-white border shadow-xl rounded-3xl shadow-slate-200/50 border-slate-100 md:p-12"
                >
                    <div className="absolute inset-0 bg-gradient-vibe opacity-5 mix-blend-multiply"></div>

                    <div className="relative z-10 mb-12 text-center">
                        <h3 className="mb-3 text-2xl font-bold text-slate-900">{t('solutions.roadmap_title')}</h3>
                        <p className="text-slate-500">{t('solutions.roadmap_desc')}</p>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row md:items-start md:gap-4">
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-slate-100 -z-10"></div>

                        {roadmapSteps.map((step) => (
                            <div key={step.step} className="relative flex flex-col items-center w-full text-center group md:w-1/5">
                                <div className="z-10 flex items-center justify-center mb-4 font-bold transition-colors bg-white border-4 rounded-full shadow-sm w-14 h-14 border-slate-100 text-slate-400 group-hover:border-teal-400 group-hover:text-teal-500">
                                    {step.icon}
                                </div>
                                <div className="px-3 py-1 mb-2 text-xs font-bold rounded-full bg-slate-50 text-slate-400">{t('solutions.roadmap_step_prefix', 'STEP')} {step.step}</div>
                                <h4 className="text-sm font-semibold text-slate-800 md:text-base">{t(step.key)}</h4>
                            </div>
                        ))}
                    </div>

                </motion.div>

            </div>
        </section>
    );
}