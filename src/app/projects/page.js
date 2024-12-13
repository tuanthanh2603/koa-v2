"use client"
import Breadcrumbs from '@/components/Breadcrumbs'

const products = [
    {
        id: 1,
        name: 'DỰ ÁN 1',
        href: '#',
        imageSrc: 'https://koastudio.vn/wp-content/uploads/2-24.jpg',
        imageAlt: "IMAGE PROJECT",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'DỰ ÁN 2',
        href: '#',
        imageSrc: 'https://koastudio.vn/wp-content/uploads/2-24.jpg',
        imageAlt: "IMAGE PROJECT",
        price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'DỰ ÁN 3',
        href: '#',
        imageSrc: 'https://koastudio.vn/wp-content/uploads/2-24.jpg',
        imageAlt: "IMAGE PROJECT",
        price: '$35',
        color: 'Black',
    },
    {
        id: 4,
        name: 'DỰ ÁN 4',
        href: '#',
        imageSrc: 'https://koastudio.vn/wp-content/uploads/2-24.jpg',
        imageAlt: "IMAGE PROJECT",
        price: '$35',
        color: 'Black',
    },
    // More products...
]
export default function Home() {
    return (
        <div className="pt-6">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Breadcrumbs
                    items={[
                        { label: 'Trang chủ', href: '/' },
                        { label: 'Dự án' },
                    ]} />
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Dự án</h2> */}

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group flex flex-col items-center z-10">
                                <a
                                    href={product.href}
                                    className="relative z-10 w-full aspect-square overflow-hidden bg-gray-200 flex items-center justify-center"
                                >
                                    {/* Image */}
                                    <img
                                        alt={product.imageAlt}
                                        src={product.imageSrc}
                                        className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-75"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-5">
                                        <p
                                            className="text-lg font-semibold text-white overflow-hidden text-ellipsis"
                                            style={{
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 5,
                                            }}
                                        >
                                            Đây là một dự án nổi bật Đây là một dự án nổi bật Đây là một dự án nổi bật Đây là một dự án nổi bật Đây là một dự án nổi bật Đây là một dự án nổi bật Đây là một dự án nổi bật Đây là một dự án nổi bật Đây là một dự án nổi bật
                                        </p>
                                        <a
                                            href={product.href}
                                            className="inline-block rounded-md bg-yellow-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-yellow-400 transition duration-200"
                                        >
                                            Xem chi tiết
                                        </a>
                                    </div>
                                </a>
                                {/* Product Name */}
                                <p className="mt-1 text-lg font-semibold text-gray-900 text-center">
                                    {product.name}
                                </p>
                            </div>
                        ))}



                    </div>

                </div>
            </div>
        </div>
    )
}