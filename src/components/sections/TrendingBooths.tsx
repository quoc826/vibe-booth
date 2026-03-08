import { motion } from 'framer-motion';
import { CheckCircle2, Store } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const boothModels = [
    {
        id: 1,
        img: '/booths/booth-6.jpg'
    },
    {
        id: 2,
        img: '/booths/booth-7.jpg'
    },
    {
        id: 3,
        img: '/booths/booth-8.jpg'
    },
    {
        id: 4,
        img: '/booths/booth-9.jpg'
    },
    {
        id: 5,
        img: '/booths/booth-10.jpg'
    },
    {
        id: 6,
        img: '/booths/booth-11.jpg'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            type: "spring" as const, 
            stiffness: 80,
            damping: 15
        } 
    }
};

export default function TrendingBooths() {
    const { t } = useTranslation();
    return (
        <section className="relative py-24 overflow-hidden bg-slate-50/50">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-teal-200/20 blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-rose-200/20 blur-[120px]"></div>
            </div>

            <div className="container relative z-10 px-4 mx-auto md:px-6 max-w-7xl">
                
                {/* Header Section */}
                <div className="max-w-2xl mx-auto mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 text-sm font-semibold bg-white border rounded-full shadow-sm border-slate-200 text-slate-700">
                            <Store className="w-4 h-4 text-teal-500" />
                            <span>{t('trending.badge')}</span>
                        </div>
                        <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl text-slate-900">
                            {t('trending.title', 'Trending Booths')}
                        </h2>
                        <p className="text-lg leading-relaxed text-slate-500">
                            {t('trending.desc')}
                        </p>
                    </motion.div>
                </div>

                {/* Grid Cards */}
                <motion.div 
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {boothModels.map((booth) => (
                        <motion.div key={booth.id} variants={itemVariants} className="flex h-full">
                            <Card className="flex flex-col w-full h-full overflow-hidden transition-all duration-500 bg-white border-transparent shadow-md rounded-3xl hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-2 group">
                                
                                {/* Image Container */}
                                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                                    {/* Glassmorphism Badge */}
                                    <div className="absolute z-20 top-4 right-4">
                                        <span className="px-3 py-1.5 text-xs font-bold tracking-wide text-slate-800 bg-white/85 backdrop-blur-md rounded-full shadow-sm">
                                            {t(`trending.booths.${booth.id - 1}.badge`)}
                                        </span>
                                    </div>

                                    <img
                                        src={booth.img}
                                        alt={t(`trending.booths.${booth.id - 1}.title`, `Booth ${booth.id}`)}
                                        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                                        onError={(e) => {
                                            e.currentTarget.src = `https://placehold.co/600x800/f8fafc/94a3b8?text=Booth+${booth.id}`;
                                        }}
                                    />

                                    {/* Gradient overlay to make text transition smoother */}
                                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent group-hover:opacity-100"></div>
                                </div>

                                {/* Content Container */}
                                <CardContent className="relative z-10 flex flex-col flex-1 p-6 bg-white">
                                        <h3 className="mb-3 text-xl font-bold transition-colors duration-300 text-slate-900 group-hover:text-teal-600 line-clamp-1">
                                        {t(`trending.booths.${booth.id - 1}.title`)}
                                    </h3>
                                    
                                    <p className="flex-1 mb-6 text-sm leading-relaxed text-slate-500 line-clamp-3">
                                        {t(`trending.booths.${booth.id - 1}.desc`)}
                                    </p>

                                    {/* Modern Ideal For Tags */}
                                    <div className="pt-5 mt-auto border-t border-slate-100">
                                        <p className="flex items-center gap-1.5 mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                                            {t('trending.ideal_for')}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {((t(`trending.booths.${booth.id - 1}.idealFor`, { returnObjects: true, defaultValue: [] }) as unknown as string[]) || []).map((ideal: string, index: number) => (
                                                <span 
                                                    key={index} 
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors bg-slate-50 text-slate-600 rounded-lg group-hover:bg-teal-50 border border-slate-100 group-hover:border-teal-100 group-hover:text-teal-700"
                                                >
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                                                    {ideal}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}