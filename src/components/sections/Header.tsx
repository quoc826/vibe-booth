import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('header.features', 'Trang chủ'), href: '#' },
        { name: t('header.solutions', 'Giải pháp'), href: '#solutions' },
        { name: t('header.pricing', 'Bảng giá'), href: '#pricing' },
        { name: t('header.contact', 'Liên hệ'), href: '#contact' },
    ];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const handleQuoteClick = () => {
        window.open('https://www.facebook.com/profile.php?id=61573162288644', '_blank');
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container flex items-center justify-between px-4 mx-auto md:px-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img 
                        src="/vibeBoothLogo.png" 
                        alt="VibeBooth Logo" 
                        className="object-contain w-auto h-10 rounded-lg shadow-sm"
                    />
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                        VibeBooth
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="items-center hidden gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium transition-colors text-slate-600 hover:text-teal-600"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA Button and Language Switcher */}
                <div className="items-center hidden gap-4 md:flex">
                    <div className="flex items-center gap-2 pr-4 text-sm font-medium border-r text-slate-500 border-slate-200">
                        <button onClick={() => changeLanguage('vi')} className={`hover:text-teal-600 transition-colors ${i18n.language === 'vi' ? 'font-bold text-teal-600' : ''}`}>VI</button>
                        <span>|</span>
                        <button onClick={() => changeLanguage('en')} className={`hover:text-teal-600 transition-colors ${i18n.language === 'en' ? 'font-bold text-teal-600' : ''}`}>EN</button>
                        <span>|</span>
                        <button onClick={() => changeLanguage('zh')} className={`hover:text-teal-600 transition-colors ${i18n.language === 'zh' ? 'font-bold text-teal-600' : ''}`}>ZH</button>
                    </div>
                    {/* CẬP NHẬT: Thêm sự kiện onClick cho Desktop Button */}
                    <Button 
                        onClick={handleQuoteClick}
                        className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6 shadow-lg shadow-teal-500/30 transition-all hover:-translate-y-0.5"
                    >
                        {t('hero.btn_quote', 'Nhận báo giá ngay')}
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-slate-800"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="absolute left-0 flex flex-col w-full gap-4 px-4 py-4 bg-white border-b shadow-lg md:hidden top-full border-slate-100">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="p-2 text-base font-medium rounded-md text-slate-700 hover:bg-slate-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-4 py-2 text-sm font-medium text-slate-600">
                        <button onClick={() => changeLanguage('vi')} className={i18n.language === 'vi' ? 'text-teal-600 font-bold' : ''}>Tiếng Việt</button>
                        <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'text-teal-600 font-bold' : ''}>English</button>
                        <button onClick={() => changeLanguage('zh')} className={i18n.language === 'zh' ? 'text-teal-600 font-bold' : ''}>中文</button>
                    </div>
                    <Button 
                        onClick={handleQuoteClick}
                        className="w-full mt-2 text-white bg-teal-500 rounded-full hover:bg-teal-600"
                    >
                        {t('hero.btn_quote', 'Nhận báo giá ngay')}
                    </Button>
                </div>
            )}
        </header>
    );
}