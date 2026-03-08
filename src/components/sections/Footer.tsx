import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    const quickLinks = (t('footer.quick_links', { returnObjects: true }) as any) || [];
    const solutions = (t('footer.solutions', { returnObjects: true }) as any) || [];
    const contact = (t('footer.contact', { returnObjects: true }) as any) || {};

    return (
        <footer id="contact" className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-vibe flex items-center justify-center text-teal-900 font-bold text-xl">
                                V
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                VibeBooth
                            </span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            {t('footer.brand_tagline')} - {t('footer.brand_description')}
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61573162288644" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-teal-500 hover:border-teal-400 hover:text-white transition-all text-slate-400">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-pink-500 hover:border-pink-400 hover:text-white transition-all text-slate-400">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-500 hover:border-blue-400 hover:text-white transition-all text-slate-400">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t('footer.quick_links_title')}</h4>
                        <ul className="flex flex-col gap-3">
                            {quickLinks.map((link: any, i: number) => (
                                <li key={i}><a href="#" className="hover:text-teal-400 transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t('footer.solutions_title')}</h4>
                        <ul className="flex flex-col gap-3">
                            {solutions.map((s: any, i: number) => (
                                <li key={i}><a href="#" className="hover:text-pink-400 transition-colors">{s}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t('footer.contact_title')}</h4>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                                <span>{contact.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                                <span>{contact.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                                <span>{contact.email}</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-300">{t('footer.privacy')}</a>
                        <a href="#" className="hover:text-slate-300">{t('footer.terms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
