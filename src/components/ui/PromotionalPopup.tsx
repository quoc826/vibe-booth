import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function PromotionalPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        // Show popup after 2 seconds on every page load
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleContact = () => {
        // Scroll to pricing section
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
        handleClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    />

                    {/* Popup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="relative max-w-lg w-full bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-10 p-2 hover:bg-slate-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6 text-slate-600" />
                        </button>

                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-500/10 to-blue-500/10" />

                        {/* Content */}
                        <div className="relative p-8 md:p-12">
                            {/* Badge */}
                            <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block mb-4"
                            >
                                <span className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-bold rounded-full">
                                    {t('promoPopup.subtitle')}
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl md:text-4xl font-bold text-slate-900 mb-2"
                            >
                                {t('promoPopup.title')}
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-slate-600 mb-8"
                            >
                                {t('promoPopup.description')}
                            </motion.p>

                            {/* Pricing Cards */}
                            <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                            >
                                {/* 6 Month Plan */}
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 hover:border-teal-400 transition-colors">
                                    <h3 className="font-bold text-slate-900 mb-2 text-sm md:text-base">
                                        {t('promoPopup.plan_6months')}
                                    </h3>
                                    <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                        {t('promoPopup.plan_6months_price')}
                                    </p>
                                </div>

                                {/* 12 Month Plan */}
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 hover:border-blue-400 transition-colors relative">
                                    <div className="absolute -top-3 -right-3 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                                        HOT
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2 text-sm md:text-base">
                                        {t('promoPopup.plan_12months')}
                                    </h3>
                                    <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                        {t('promoPopup.plan_12months_price')}
                                    </p>
                                </div>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.button
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleContact}
                                className="w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg transition-shadow"
                            >
                                {t('promoPopup.cta')}
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
