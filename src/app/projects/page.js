"use client"
import Breadcrumbs from '@/components/Breadcrumbs'

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    // More products...
]
export default function Home() {
    return (
        <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Breadcrumbs
                    items={[
                        { label: 'Trang chủ', href: '/' },
                        { label: 'Dự án' },
                    ]} />
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Dự án</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
                        {products.map((product) => (
                            <a key={product.id} href={product.href} className="group relative">
                                <div className="w-full aspect-square overflow-hidden bg-gray-200 relative">
                                    <img
                                        alt={product.imageAlt}
                                        src={product.imageSrc}
                                        className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-75"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-5">
                                        <p className="text-lg font-semibold text-white overflow-hidden text-ellipsis" style={{
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 5
                                        }}>
                                            Đây là một dự án nổi bật Đây là một dự án nổi bật Đây là một dự án nổi bật Đây là một dự án nổi bật Đây là một dự án nổi bật Đây là một dự án nổi bậtĐây là một dự án nổi bật Đây là một dự án nổi bật Đây là một dự án nổi bật
                                        </p>

                                        <a
                                            href={product.href}
                                            className="inline-block rounded-md bg-yellow-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-yellow-400 transition duration-200"
                                        >
                                            Xem chi tiết
                                        </a>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg font-semibold text-gray-900 text-center">{product.price}</p>
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}