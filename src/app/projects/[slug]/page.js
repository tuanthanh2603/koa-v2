"use client"
import { useState } from 'react';
const product = {
    name: 'DỰ ÁN 1',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Dự án', href: '#' },
        { id: 2, name: 'abcd', href: '#' },
    ],
    images: [
        {
            src: 'https://koastudio.vn/wp-content/uploads/6-24.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://koastudio.vn/wp-content/uploads/3-25.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://koastudio.vn/wp-content/uploads/2-24.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://koastudio.vn/wp-content/uploads/1-24.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
        {
            src: 'https://koastudio.vn/wp-content/uploads/4-24.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
        {
            src: 'https://koastudio.vn/wp-content/uploads/5-24.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],

    description:
        'Mô tả dự án',

}

export default function PageProjectDetail({ params }) {

    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    return (

        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8">
                        <div className="lg:col-span-2">
                            <img
                                alt={selectedImage.alt}
                                src={selectedImage.src}
                                className="w-full h-[90vh] object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-4 overflow-y-auto h-[90vh]">
                            {product.images.slice(0).map((image, index) => (
                                <img
                                    key={index}
                                    alt={image.alt}
                                    src={image.src}
                                    className="w-full h-[32%] object-cover rounded-lg cursor-pointer"
                                    onClick={() => setSelectedImage(image)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">Nhận tư vấn ngay</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="full-name" className="block text-sm/6 font-medium text-gray-900">
                                    Họ và tên
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="full-name"
                                        name="full-name"
                                        type="text"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3 mt-2">
                                <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">
                                    Số điện thoại
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3 mt-2">
                                <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">
                                    Email (nếu có)
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <form className="mt-10">



                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Gửi yêu cầu thiết kế thi công
                            </button>
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}