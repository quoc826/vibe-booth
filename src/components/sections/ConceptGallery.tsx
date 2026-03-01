import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const concepts = [
    {
        id: 1,
        title: 'Pink Glamour Booth',
        desc: 'Bán chạy nhất cho quán cafe hoặc không gian mở trong giới trẻ.',
        img: '/shop-4.jpg',
        badge: 'Trending'
    },
    {
        id: 2,
        title: 'Industrial Automat Booth',
        desc: 'Thiết kế kim loại nguyên khối mang đậm phong cách công nghiệp, kết hợp bảng hiệu retro trứ danh. Lựa chọn phá cách cho các không gian underground, studio hoặc quán cafe minimalist.',
        img: '/shop-5.jpg',
        badge: 'Industrial'
    },
    {
        id: 3,
        title: 'Neon Nightclub Booth',
        desc: 'Giải pháp tuyệt vời cho lễ hội âm nhạc hoặc bar, pub.',
        img: '/shop-6.jpg',
        badge: 'Events'
    }
];

export default function ConceptGallery() {
    return (
        <section className="relative py-24 overflow-hidden bg-slate-50/50">
            {/* Ambient Background Blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-pink-200/20 blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-rose-200/20 blur-[120px]"></div>
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
                        <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl text-slate-900">
                            Tùy biến <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Mọi Concept Không Gian</span>
                        </h2>
                        <p className="text-lg leading-relaxed text-slate-500">
                            Với thiết kế có tính "Modular" dạng khối ghép, VibeBooth dễ dàng chuyển mình khớp với concept nội thất sẵn có của bạn - từ sự dịu dàng của Korea Style đến độ ngầu của Cyberpunk.
                        </p>
                    </motion.div>
                </div>

                {/* Grid Cards */}
                <motion.div 
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >
                    {concepts.map((concept) => (
                        <motion.div 
                            key={concept.id} 
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
                            }}
                            className="flex h-full"
                        >
                            <Card className="flex flex-col w-full h-full overflow-hidden transition-all duration-500 bg-white border-transparent shadow-md rounded-3xl hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2 group">
                                
                                {/* Image Container */}
                                <div className="relative overflow-hidden aspect-[4/5] bg-slate-100">
                                    {/* Glassmorphism Badge */}
                                    <div className="absolute z-20 top-4 right-4">
                                        <span className="px-3 py-1.5 text-xs font-bold tracking-wide text-slate-800 bg-white/85 backdrop-blur-md rounded-full shadow-sm">
                                            {concept.badge}
                                        </span>
                                    </div>

                                    {/* Image with zoom effect */}
                                    <img
                                        src={concept.img}
                                        alt={concept.title}
                                        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                                        onError={(e) => {
                                            e.currentTarget.src = `https://placehold.co/600x800/f8fafc/94a3b8?text=Concept+${concept.id}`;
                                        }}
                                    />

                                    {/* Cinematic Play Button Overlay */}
                                    <div className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-500 opacity-0 bg-slate-900/40 group-hover:opacity-100">
                                        <div className="flex items-center justify-center w-16 h-16 transition-all duration-500 transform scale-50 rounded-full shadow-2xl bg-white/20 backdrop-blur-md group-hover:scale-100 hover:bg-white/30">
                                            <Play className="ml-1 text-white w-7 h-7 drop-shadow-md" fill="currentColor" />
                                        </div>
                                    </div>

                                    {/* Smooth bottom gradient for text contrast */}
                                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent group-hover:opacity-100"></div>
                                </div>

                                {/* Content Container */}
                                <CardContent className="relative z-10 flex flex-col flex-1 p-6 bg-white">
                                    <h3 className="mb-3 text-2xl font-bold transition-colors duration-300 text-slate-900 group-hover:text-pink-600 line-clamp-1">
                                        {concept.title}
                                    </h3>
                                    <p className="flex-1 text-sm leading-relaxed text-slate-500 line-clamp-3">
                                        {concept.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}