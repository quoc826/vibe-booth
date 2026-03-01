import { motion } from 'framer-motion';
import { CheckCircle2, Store } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const boothModels = [
    {
        id: 1,
        title: 'Rustic Wooden Box',
        desc: 'Thiết kế mộc mạc với chất liệu gỗ tự nhiên, rèm nâu ấm áp và bảng đen phấn trắng cổ điển.',
        idealFor: ['Quán Pub, Bar', 'Cafe mộc', 'Rạp chiếu phim', 'Sảnh khách sạn'],
        img: '/booths/booth-6.jpg',
        badge: 'Mộc mạc'
    },
    {
        id: 2,
        title: 'Elegant White Minimal',
        desc: 'Khối hộp tối giản với hệ rèm thanh lịch, tôn lên sự chuyên nghiệp và tinh khôi.',
        idealFor: ['Sự kiện doanh nghiệp', 'Tiệc cưới', 'Fashion Shop'],
        img: '/booths/booth-7.jpg',
        badge: 'Sang trọng'
    },
    {
        id: 3,
        title: 'Retro Classic Black',
        desc: 'Tone đen nhám kết hợp họa tiết typography vintage và rèm nhung đỏ, tạo chất hoài cổ sâu sắc.',
        idealFor: ['Quán Pub, Bar', 'Nhà hàng Âu', 'Sự kiện Retro'],
        img: '/booths/booth-8.jpg',
        badge: 'Cá tính'
    },
    {
        id: 4,
        title: 'Red Line Compact',
        desc: 'Thiết kế cực kỳ nhỏ gọn bo góc hiện đại, đi kèm viền đỏ nổi bật, hút mắt người qua lại.',
        idealFor: ['Quán trà sữa', 'Cafe check in', 'Store mặt tiền'],
        img: '/booths/booth-9.jpg',
        badge: 'Hot Trend'
    },
    {
        id: 5,
        title: 'Coastal Retro Booth',
        desc: 'Dạng tủ vuông vức ốp gỗ vân sáng, điểm xuyết họa tiết retro gợn sóng và rèm xanh navy.',
        idealFor: ['Quán Cafe', 'Tiệm bánh ngọt', 'Mini Studio'],
        img: '/booths/booth-10.jpg',
        badge: 'Hot Trend'
    },
    {
        id: 6,
        title: 'Classic Arcade Booth',
        desc: 'Tủ gỗ viền đen kết hợp bảng hiệu hộp đèn rực rỡ, mang đậm vibe bốt chụp ảnh thập niên 90.',
        idealFor: ['Bia craft', 'Quán Pub', 'Tổ hợp giải trí'],
        img: '/booths/booth-11.jpg',
        badge: 'Cổ điển'
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
                            <span>Thiết kế Module linh hoạt</span>
                        </div>
                        <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl text-slate-900">
                            Mẫu Booth <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Thịnh Hành</span>
                        </h2>
                        <p className="text-lg leading-relaxed text-slate-500">
                            Chiêm ngưỡng các concept lắp đặt thực tế. VibeBooth hỗ trợ tùy biến thiết kế để cỗ máy hoàn toàn "ăn khớp" với không gian của bạn.
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
                                            {booth.badge}
                                        </span>
                                    </div>

                                    <img
                                        src={booth.img}
                                        alt={booth.title}
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
                                        {booth.title}
                                    </h3>
                                    
                                    <p className="flex-1 mb-6 text-sm leading-relaxed text-slate-500 line-clamp-3">
                                        {booth.desc}
                                    </p>

                                    {/* Modern Ideal For Tags */}
                                    <div className="pt-5 mt-auto border-t border-slate-100">
                                        <p className="flex items-center gap-1.5 mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                                            Gợi ý lắp đặt
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {booth.idealFor.map((ideal, index) => (
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