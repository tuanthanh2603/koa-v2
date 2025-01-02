"use client";
import { useState } from "react";

const products = [
	{
		id: 1,
		name: "DỰ ÁN 1",
		href: "/projects/du-an-1",
		imageSrc: "https://koastudio.vn/wp-content/uploads/2-24.jpg",
		imageAlt: "IMAGE PROJECT",
		category: "Category A",
		description:
			"Đây là một dự án nổi bật với thiết kế độc đáo và hiện đại, tập trung vào trải nghiệm người dùng tối ưu.",
	},
	{
		id: 2,
		name: "DỰ ÁN 2",
		href: "/projects/du-an-2",
		imageSrc: "https://koastudio.vn/wp-content/uploads/2-24.jpg",
		imageAlt: "IMAGE PROJECT",
		category: "Category B",
		description:
			"Dự án này mang đến giải pháp sáng tạo cho các vấn đề phức tạp, sử dụng công nghệ tiên tiến nhất.",
	},
	{
		id: 3,
		name: "DỰ ÁN 3",
		href: "/projects/du-an-3",
		imageSrc: "https://koastudio.vn/wp-content/uploads/2-24.jpg",
		imageAlt: "IMAGE PROJECT",
		category: "Category A",
		description:
			"Một dự án với mục tiêu tạo ra sự khác biệt, dự án này kết hợp giữa nghệ thuật và công nghệ.",
	},
	{
		id: 4,
		name: "DỰ ÁN 4",
		href: "/projects/du-an-4",
		imageSrc: "https://koastudio.vn/wp-content/uploads/2-24.jpg",
		imageAlt: "IMAGE PROJECT",
		category: "Category C",
		description:
			"Dự án này tập trung vào việc cải thiện cuộc sống hàng ngày thông qua các giải pháp thông minh và bền vững.",
	},
	{
		id: 5,
		name: "DỰ ÁN 5",
		href: "/projects/du-an-5",
		imageSrc: "https://koastudio.vn/wp-content/uploads/2-24.jpg",
		imageAlt: "IMAGE PROJECT",
		category: "Category B",
		description:
			"Dự án này kết hợp giữa thiết kế tinh tế và chức năng vượt trội, mang lại trải nghiệm người dùng mượt mà.",
	},
	{
		id: 6,
		name: "DỰ ÁN 6",
		href: "/projects/du-an-6",
		imageSrc: "https://koastudio.vn/wp-content/uploads/2-24.jpg",
		imageAlt: "IMAGE PROJECT",
		category: "Category C",
		description:
			"Với mục tiêu đổi mới, dự án này áp dụng các phương pháp tiếp cận mới nhất trong ngành.",
	},
	{
		id: 7,
		name: "DỰ ÁN 7",
		href: "/projects/du-an-7",
		imageSrc: "https://koastudio.vn/wp-content/uploads/2-24.jpg",
		imageAlt: "IMAGE PROJECT",
		category: "Category A",
		description:
			"Dự án này được thiết kế để tối ưu hóa hiệu suất và tăng cường tương tác người dùng.",
	},
	{
		id: 8,
		name: "DỰ ÁN 8",
		href: "/projects/du-an-8",
		imageSrc: "https://koastudio.vn/wp-content/uploads/2-24.jpg",
		imageAlt: "IMAGE PROJECT",
		category: "Category B",
		description:
			"Một dự án đầy tham vọng, dự án này hướng tới việc thiết lập các tiêu chuẩn mới trong lĩnh vực của mình.",
	},
	{
		id: 9,
		name: "DỰ ÁN 9",
		href: "/projects/du-an-9",
		imageSrc: "https://koastudio.vn/wp-content/uploads/2-24.jpg",
		imageAlt: "IMAGE PROJECT",
		category: "Category C",
		description:
			"Dự án này nổi bật với việc áp dụng các giải pháp sáng tạo, mang lại giá trị gia tăng cho người dùng.",
	},
	{
		id: 10,
		name: "DỰ ÁN 10",
		href: "/projects/du-an-10",
		imageSrc: "https://koastudio.vn/wp-content/uploads/2-24.jpg",
		imageAlt: "IMAGE PROJECT",
		category: "Category A",
		description:
			"Dự án này phản ánh cam kết của chúng tôi trong việc cung cấp các sản phẩm chất lượng cao, thân thiện với người dùng.",
	},
	{
		id: 11,
		name: "DỰ ÁN 11",
		href: "/projects/du-an-11",
		imageSrc: "https://koastudio.vn/wp-content/uploads/2-24.jpg",
		imageAlt: "IMAGE PROJECT",
		category: "Category B",
		description:
			"Dự án này đặt mục tiêu nâng cao trải nghiệm sống thông qua việc kết hợp công nghệ và thiết kế thông minh.",
	},
	{
		id: 12,
		name: "DỰ ÁN 12",
		href: "/projects/du-an-12",
		imageSrc: "https://koastudio.vn/wp-content/uploads/2-24.jpg",
		imageAlt: "IMAGE PROJECT",
		category: "Category C",
		description:
			"Dự án này là sự kết hợp hoàn hảo giữa nghệ thuật và công nghệ, tạo ra một sản phẩm độc đáo và đầy cảm hứng.",
	},
	{
		id: 13,
		name: "DỰ ÁN 13",
		href: "/projects/du-an-13",
		imageSrc: "https://koastudio.vn/wp-content/uploads/2-24.jpg",
		imageAlt: "IMAGE PROJECT",
		category: "Category A",
		description:
			"Dự án này mang lại giải pháp đột phá, giúp giải quyết các thách thức hiện đại một cách hiệu quả.",
	},
	{
		id: 14,
		name: "DỰ ÁN 14",
		href: "/projects/du-an-14",
		imageSrc: "https://koastudio.vn/wp-content/uploads/2-24.jpg",
		imageAlt: "IMAGE PROJECT",
		category: "Category B",
		description:
			"Với thiết kế tối giản nhưng tinh tế, dự án này tạo ra một không gian sống lý tưởng và tiện nghi.",
	},
	{
		id: 15,
		name: "DỰ ÁN 15",
		href: "/projects/du-an-15",
		imageSrc: "https://koastudio.vn/wp-content/uploads/2-24.jpg",
		imageAlt: "IMAGE PROJECT",
		category: "Category C",
		description:
			"Dự án này hướng đến việc tạo ra một cộng đồng bền vững, kết nối con người và thiên nhiên.",
	},
];
const categories = [...new Set(products.map((product) => product.category))];

export default function Home() {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 6;

	const filteredProducts = selectedCategory
		? products.filter((product) => product.category === selectedCategory)
		: products;

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = filteredProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="bg-black text-white min-h-screen">
			<section className="relative">
				<div className="absolute inset-0">
					<img
						src="https://koastudio.vn/wp-content/uploads/2-24.jpg"
						alt="Hero Background"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/70"></div>
				</div>

				<div className="relative z-10 flex flex-col items-center justify-center py-40 px-4 sm:px-0 text-center">
					<h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
						Khám phá các dự án của chúng tôi
					</h1>
					<p className="text-base sm:text-lg text-white mb-8 max-w-2xl">
						Chúng tôi tự hào giới thiệu những dự án nổi bật, phản
						ánh sự sáng tạo và chuyên nghiệp trong từng chi tiết.
					</p>
					<a
						href="#projects"
						className="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition duration-200">
						Xem dự án
					</a>
				</div>
			</section>

			<section
				id="projects"
				className="py-8 bg-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold mb-6 text-black">
						Bộ lọc dự án
					</h2>
					<div className="flex flex-wrap gap-4 justify-center sm:justify-start">
						<button
							onClick={() => setSelectedCategory(null)}
							className={`px-4 py-2 rounded-md text-sm font-semibold transition duration-200 ${
								selectedCategory === null
									? "bg-black text-white"
									: "bg-gray-200 text-black hover:bg-gray-300"
							}`}>
							Tất cả
						</button>
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-4 py-2 rounded-md text-sm font-semibold transition duration-200 ${
									selectedCategory === category
										? "bg-black text-white"
										: "bg-gray-200 text-black hover:bg-gray-300"
								}`}>
								{category}
							</button>
						))}
					</div>
				</div>
			</section>

			<div className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
					{currentProducts.map((product) => (
						<div
							key={product.id}
							className="group relative">
							<div className="relative w-full aspect-square overflow-hidden rounded-lg">
								<img
									alt={product.imageAlt}
									src={product.imageSrc}
									className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-black/50 flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-5">
									<p
										className="text-base sm:text-lg font-semibold text-white overflow-hidden text-ellipsis mb-2"
										style={{
											display: "-webkit-box",
											WebkitBoxOrient: "vertical",
											WebkitLineClamp: 3,
										}}>
										{product.description}
									</p>
									<a
										href={product.href}
										className="w-full inline-block rounded-md bg-white px-4 py-2 text-center text-sm font-semibold text-black hover:bg-gray-100 transition duration-200">
										Xem chi tiết
									</a>
								</div>
							</div>
							<p className="mt-4 text-base sm:text-lg font-semibold text-black">
								{product.name}
							</p>
						</div>
					))}
				</div>
			</div>

			<section className="py-20 bg-gray-900">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold text-white mb-4">
						Bạn đã sẵn sàng để bắt đầu dự án tiếp theo?
					</h2>
					<p className="text-base sm:text-lg text-white mb-8">
						Liên hệ với chúng tôi ngay hôm nay để thảo luận về ý
						tưởng của bạn và biến chúng thành hiện thực.
					</p>
					<a
						href="#"
						className="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition duration-200">
						Liên hệ ngay
					</a>
				</div>
			</section>
		</div>
	);
}
