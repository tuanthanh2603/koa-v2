"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { LiaHandshakeSolid } from "react-icons/lia";
import { TbReportMoney } from "react-icons/tb";
import { RiContractLine } from "react-icons/ri";
import { SiTimescale } from "react-icons/si";

const packages = [
	{
		title: "Thiết Kế Kiến Trúc",
		description: "Sáng tạo không gian sống đẳng cấp",
		features: [
			"Tư vấn thiết kế chuyên sâu",
			"Bản vẽ 3D trực quan",
			"Tối ưu hóa công năng sử dụng",
			"Cập nhật xu hướng thiết kế mới nhất",
			"Đảm bảo tiến độ và chất lượng",
		],
	},
	{
		title: "Thi Công Trọn Gói",
		description: "Hiện thực hóa giấc mơ của bạn",
		features: [
			"Đội ngũ thi công chuyên nghiệp",
			"Sử dụng vật liệu cao cấp",
			"Giám sát thi công chặt chẽ",
			"Đảm bảo an toàn lao động",
			"Bảo hành dài hạn",
		],
	},
	{
		title: "Hoàn Thiện Nội Thất",
		description: "Nâng tầm không gian sống",
		features: [
			"Thiết kế nội thất tinh tế",
			"Cung cấp đồ nội thất chất lượng",
			"Thi công lắp đặt chuyên nghiệp",
			"Tối ưu hóa chi phí đầu tư",
			"Bàn giao đúng tiến độ",
		],
	},
];

const projects = [
	{
		id: 1,
		name: "Biệt Thự Hiện Đại",
		description: "Không gian mở, giao hòa với thiên nhiên",
		imageSrc: "https://koastudio.vn/wp-content/uploads/NGOAITHAT_2.jpg",
		imageAlt: "Biệt thự hiện đại với thiết kế sang trọng",
		href: "#",
	},
	{
		id: 2,
		name: "Căn Hộ Cao Cấp",
		description: "Thiết kế tinh tế, tối ưu công năng",
		imageSrc: "https://koastudio.vn/wp-content/uploads/MATTIEN_1.jpg",
		imageAlt: "Căn hộ cao cấp với nội thất sang trọng",
		href: "#",
	},
	{
		id: 3,
		name: "Nhà Phố Tân Cổ Điển",
		description: "Kết hợp hài hòa giữa cổ điển và hiện đại",
		imageSrc: "https://koastudio.vn/wp-content/uploads/4-16-scaled.jpg",
		imageAlt: "Nhà phố tân cổ điển với kiến trúc độc đáo",
		href: "#",
	},
];

const PackageCard = ({ title, description, features }) => (
	<div className="bg-gray-900 p-8 rounded-lg border hover:shadow-lg transition duration-300 flex flex-col">
		<h3 className="text-2xl text-center uppercase font-bold text-white mb-2">
			{title}
		</h3>
		<p className="text-gray-200 text-center mb-4 flex-grow">
			{description}
		</p>
		<ul className="mt-2 mb-6 space-y-2">
			{features.map((feature, index) => (
				<li
					key={index}
					className="flex items-center text-gray-200">
					<svg
						className="h-5 w-5 text-white shrink-0 mr-2"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true">
						<path
							fillRule="evenodd"
							d="M10 0a10 10 0 100 20 10 10 0 000-20zm3.707 8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clipRule="evenodd"
						/>
					</svg>
					{feature}
				</li>
			))}
		</ul>
		<button className="mt-auto block w-full bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded-lg text-center transition duration-200">
			Liên Hệ Tư Vấn
		</button>
	</div>
);

export default function Home() {
	const [visibleSections, setVisibleSections] = useState({
		section2: false,
		section3: false,
		section4: false,
		section5: false,
	});
	const section2Ref = useRef(null);
	const section3Ref = useRef(null);
	const section4Ref = useRef(null);
	const section5Ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const sectionId =
						entry.target.getAttribute("data-section-id");
					if (entry.isIntersecting) {
						setVisibleSections((prev) => ({
							...prev,
							[sectionId]: true,
						}));
					}
				});
			},
			{ threshold: 0.2 }
		);

		if (section2Ref.current) observer.observe(section2Ref.current);
		if (section3Ref.current) observer.observe(section3Ref.current);
		if (section4Ref.current) observer.observe(section4Ref.current);
		if (section5Ref.current) observer.observe(section5Ref.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	const handleScrollToSection = () => {
		if (section2Ref.current) {
			section2Ref.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = ["/static/bg_1.jpg", "/static/bg_2.jpg", "/static/bg_3.jpg"];
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false);
			setTimeout(() => {
				setCurrentImageIndex(
					(prevIndex) => (prevIndex + 1) % images.length
				);
				setFade(true);
			}, 500);
		}, 5000);

		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<>
			{/* Hero Section */}
			<section
				className={`relative h-screen flex flex-col justify-center items-center bg-cover bg-center transition-opacity duration-1000 ${
					fade ? "opacity-100" : "opacity-0"
				}`}
				style={{
					backgroundImage: `url(${images[currentImageIndex]})`,
				}}>
				<div className="absolute inset-0 bg-black/60"></div>
				<div className="relative z-10 text-center">
					<Image
						src="/static/logo-koa-4.png"
						alt="KOA Studio Logo"
						width={500}
						height={120}
						className="mx-auto"
					/>
					<h1 className="text-4xl md:text-5xl text-white font-montserrat">
						Kiến trúc KOA
					</h1>
					<p className="text-lg text-white mt-2 font-light">
						Kiến Tạo Không Gian - Nâng Tầm Cuộc Sống
					</p>
				</div>
				<div className="absolute bottom-10">
					<button
						className="flex items-center justify-center w-12 h-12 rounded-full border border-white bg-transparent text-white hover:bg-white hover:text-gray-900 transition-colors duration-300 animate-bounce"
						onClick={handleScrollToSection}
						aria-label="Scroll to next section">
						<IoChevronDown size={24} />
					</button>
				</div>
			</section>

			{/* Services Section */}
			<section
				ref={section2Ref}
				data-section-id="section2"
				className={`bg-black py-20 transition-all duration-700 ease-in-out ${
					visibleSections.section2
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-20"
				}`}>
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-white mb-12 font-serif">
						Dịch Vụ Của Chúng Tôi
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{packages.map((pkg, index) => (
							<PackageCard
								key={index}
								{...pkg}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Featured Projects Section */}
			<section
				ref={section3Ref}
				data-section-id="section3"
				className={`bg-white py-20 transition-all duration-700 ease-in-out ${
					visibleSections.section3
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-20"
				}`}>
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-serif">
						Dự Án Nổi Bật
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project) => (
							<div
								key={project.id}
								className="group relative block overflow-hidden rounded-lg cursor-pointer"
								onClick={() => {
									window.location.href = project.href;
								}}>
								<Image
									src={project.imageSrc}
									alt={project.imageAlt}
									width={400}
									height={400}
									className="h-64 w-full object-cover rounded-lg transition duration-300 group-hover:scale-110"
								/>
								<div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 p-4">
									<h3 className="text-xl font-bold text-white mb-1">
										{project.name}
									</h3>
									<p className="text-gray-200 mb-2 line-clamp-2">
										{project.description}
									</p>
									<button className="mt-2 px-4 py-2 bg-white text-gray-900 rounded-md text-sm font-medium hover:bg-gray-100 transition duration-200">
										Xem Chi Tiết
									</button>
								</div>
							</div>
						))}
					</div>
					<div className="mt-12 text-center">
						<Link href="/projects">
							<button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
								Xem Tất Cả
							</button>
						</Link>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section
				ref={section4Ref}
				data-section-id="section4"
				className={`py-20 bg-black transition-all duration-700 ease-in-out ${
					visibleSections.section4
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-20"
				}`}>
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-white mb-12 font-serif">
						Quy Trình Chuyên Nghiệp
					</h2>
					<div className="flex flex-col md:flex-row items-center justify-center w-full max-w-12xl">
						{" "}
						<div className="flex flex-col items-center p-4 w-full md:w-auto">
							{" "}
							<div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full max-w-[280px]">
								{" "}
								<div className="mb-4">
									<LiaHandshakeSolid className="mx-auto text-4xl text-black" />
								</div>
								<h3 className="text-[16px] text-center text-[#000] font-bold">
									TRAO ĐỔI TƯ VẤN
								</h3>
								<p className="text-[14px] text-center text-[#1a1a1a]">
									Trao đổi và tư vấn khách hàng về nhu cầu,
									mong muốn, và định hướng mức đầu tư.
								</p>
							</div>
						</div>
						<div className="text-2xl text-white my-4 md:my-0 md:mx-4">
							{" "}
							<FaArrowRightLong className="hidden md:block" />
							<FaArrowDownLong className="md:hidden" />
						</div>
						<div className="flex flex-col items-center p-4 w-full md:w-auto">
							{" "}
							<div className="bg-white p-6 rounded-lg shadow-md  flex flex-col items-center w-full max-w-[280px]">
								{" "}
								<div className="mb-4">
									<TbReportMoney className="mx-auto text-4xl text-black" />
								</div>
								<h3 className="text-[16px] text-center text-[#000] font-bold">
									BÁO GIÁ
								</h3>
								<p className="text-[14px] text-center text-[#1a1a1a]">
									Trao đổi và tư vấn khách hàng về nhu cầu,
									mong muốn, và định hướng mức đầu tư.
								</p>
							</div>
						</div>
						<div className="text-2xl text-white my-4 md:my-0 md:mx-4">
							{" "}
							<FaArrowRightLong className="hidden md:block" />
							<FaArrowDownLong className="md:hidden" />
						</div>
						<div className="flex flex-col items-center p-4 w-full md:w-auto">
							{" "}
							<div className="bg-white p-6 rounded-lg shadow-md  flex flex-col items-center w-full max-w-[280px]">
								{" "}
								<div className="mb-4">
									<RiContractLine className="mx-auto text-4xl text-black" />
								</div>
								<h3 className="text-[16px] text-center text-[#000] font-bold">
									KÝ HỢP ĐỒNG
								</h3>
								<p className="text-[14px] text-center text-[#1a1a1a]">
									Trao đổi và tư vấn khách hàng về nhu cầu,
									mong muốn, và định hướng mức đầu tư.
								</p>
							</div>
						</div>
						<div className="text-2xl text-white my-4 md:my-0 md:mx-4">
							{" "}
							<FaArrowRightLong className="hidden md:block" />
							<FaArrowDownLong className="md:hidden" />
						</div>
						<div className="flex flex-col items-center p-4 w-full md:w-auto">
							{" "}
							<div className="bg-white p-6 rounded-lg shadow-md  flex flex-col items-center w-full max-w-[280px]">
								{" "}
								<div className="mb-4">
									<SiTimescale className="mx-auto text-4xl text-black" />
								</div>
								<h3 className="text-[16px] text-center text-[#000] font-bold">
									BÀN GIAO & QUYẾT TOÁN
								</h3>
								<p className="text-[14px] text-center text-[#1a1a1a]">
									Trao đổi và tư vấn khách hàng về nhu cầu,
									mong muốn, và định hướng mức đầu tư.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Contact Form Section */}
			<section
				ref={section5Ref}
				data-section-id="section5"
				className={`py-20 bg-white transition-all duration-700 ease-in-out ${
					visibleSections.section5
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-20"
				}`}>
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
							<h2 className="text-3xl font-bold text-gray-900 mb-6 text-center font-serif">
								Đăng Ký Tư Vấn
							</h2>
							<form>
								<div className="mb-4">
									<label
										htmlFor="name"
										className="block text-gray-700 mb-2">
										Họ và tên (*)
									</label>
									<input
										type="text"
										id="name"
										name="name"
										className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
										required
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="phone"
										className="block text-gray-700 mb-2">
										Số điện thoại (*)
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
										required
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="email"
										className="block text-gray-700 mb-2">
										Email (*)
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
										required
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="land-area"
										className="block text-gray-700 mb-2">
										Diện tích đất và số tầng muốn xây (*)
									</label>
									<input
										type="text"
										id="land-area"
										name="land-area"
										className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
										required
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="location"
										className="block text-gray-700 mb-2">
										Địa phương muốn xây (*)
									</label>
									<input
										type="text"
										id="location"
										name="location"
										className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
										required
									/>
								</div>
								<div className="mb-4">
									<label className="block text-gray-700 mb-2">
										Ngân sách (*)
									</label>
									<div className="flex flex-wrap gap-2">
										<label className="inline-flex items-center">
											<input
												type="checkbox"
												name="budget"
												value="1.3-1.4"
												className="form-checkbox h-4 w-4 text-gray-600"
											/>
											<span className="ml-2 text-gray-700">
												1.3 - 1.4 tỷ
											</span>
										</label>
										<label className="inline-flex items-center">
											<input
												type="checkbox"
												name="budget"
												value="1.5-1.6"
												className="form-checkbox h-4 w-4 text-gray-600"
											/>
											<span className="ml-2 text-gray-700">
												1.5 - 1.6 tỷ
											</span>
										</label>
										<label className="inline-flex items-center">
											<input
												type="checkbox"
												name="budget"
												value="1.7-1.9"
												className="form-checkbox h-4 w-4 text-gray-600"
											/>
											<span className="ml-2 text-gray-700">
												1.7 - 1.9 tỷ
											</span>
										</label>
										<label className="inline-flex items-center">
											<input
												type="checkbox"
												name="budget"
												value=">2"
												className="form-checkbox h-4 w-4 text-gray-600"
											/>
											<span className="ml-2 text-gray-700">
												Trên 2 tỷ
											</span>
										</label>
									</div>
								</div>
								<div className="mb-4">
									<label className="block text-gray-700 mb-2">
										Gói dịch vụ
									</label>
									<div className="flex flex-wrap gap-2">
										<label className="inline-flex items-center">
											<input
												type="checkbox"
												name="package"
												value="bao-gom-noi-that"
												className="form-checkbox h-4 w-4 text-gray-600"
											/>
											<span className="ml-2 text-gray-700">
												Bao gồm nội thất
											</span>
										</label>
										<label className="inline-flex items-center">
											<input
												type="checkbox"
												name="package"
												value="chua-gom-noi-that"
												className="form-checkbox h-4 w-4 text-gray-600"
											/>
											<span className="ml-2 text-gray-700">
												Chưa gồm nội thất
											</span>
										</label>
									</div>
								</div>
								<div className="mb-4">
									<label
										htmlFor="consultation-type"
										className="block text-gray-700 mb-2">
										Tư vấn thiết kế
									</label>
									<select
										id="consultation-type"
										name="consultation-type"
										className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
										<option value="tu-van">Tư vấn</option>
										<option value="thiet-ke">
											Thiết kế
										</option>
									</select>
								</div>
								<div className="mb-4">
									<label
										htmlFor="additional-info"
										className="block text-gray-700 mb-2">
										Yêu cầu chi tiết nếu có!
									</label>
									<textarea
										id="additional-info"
										name="additional-info"
										rows="3"
										className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"></textarea>
								</div>
								<button
									type="submit"
									className="w-full bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
									Gửi yêu cầu thiết kế thi công
								</button>
							</form>
						</div>
						<div className="w-full lg:w-1/2">
							<h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-serif">
								Chi Nhánh Miền Nam
							</h3>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4942669768863!2d106.62616797487247!3d10.773418359196728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d542c73f09f%3A0x999d9ddf8788d691!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOZ2_huqFpIG5n4buvIC0gVGluIGjhu41jIFRQLiBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1707742118396!5m2!1svi!2s"
								width="600"
								height="450"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="w-full h-96 rounded-lg mb-8"></iframe>
							<h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-serif">
								Chi Nhánh Miền Trung
							</h3>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61349.85298997903!2d108.1620037783203!3d16.047325500000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b4434f757f%3A0x42b355e4f34c07e!2zSOG6o2kgQ2jDonUsIFF14bqjbiBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1707808195698!5m2!1svi!2s"
								width="600"
								height="450"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="w-full h-96 rounded-lg"></iframe>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
