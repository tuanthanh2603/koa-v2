"use client";

import { Fragment, useState, useEffect } from "react";
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
} from "@headlessui/react";
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	ShoppingBagIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";

import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";
import Link from "next/link";
import Banners from "./Banners";

const navigation2 = {
	categories: [
		{
			id: 1,
			name: "BÁO GIÁ",
		},
	],
};

export default function Navigation() {
	const navigation = {
		categories: [
			{
				id: "women",
				name: "DỰ ÁN",
				featured: [
					{
						name: "Dự án 1",
						href: "#",
						imageSrc:
							"https://koastudio.vn/wp-content/uploads/1-25.jpg",
					},
					{
						name: "Dự án 2",
						href: "#",
						imageSrc:
							"https://koastudio.vn/wp-content/uploads/RECEP_2.jpg",
					},
					{
						name: "Dự án 3",
						href: "#",
						imageSrc:
							"https://koastudio.vn/wp-content/uploads/6-24.jpg",
					},
					{
						name: "Dự án 4",
						href: "#",
						imageSrc:
							"https://koastudio.vn/wp-content/uploads/1-27.jpg",
					},
				],
				sections: [
					{
						id: "clothing",
						name: "Clothing",
						items: [
							{ name: "Tops", href: "#" },
							{ name: "Dresses", href: "#" },
							{ name: "Pants", href: "#" },
							{ name: "Denim", href: "#" },
							{ name: "Sweaters", href: "#" },
							{ name: "T-Shirts", href: "#" },
							{ name: "Jackets", href: "#" },
							{ name: "Activewear", href: "#" },
							{ name: "Browse All", href: "#" },
						],
					},
					{
						id: "accessories",
						name: "Accessories",
						items: [
							{ name: "Watches", href: "#" },
							{ name: "Wallets", href: "#" },
							{ name: "Bags", href: "#" },
							{ name: "Sunglasses", href: "#" },
							{ name: "Hats", href: "#" },
							{ name: "Belts", href: "#" },
						],
					},
					{
						id: "brands",
						name: "Brands",
						items: [
							{ name: "Full Nelson", href: "#" },
							{ name: "My Way", href: "#" },
							{ name: "Re-Arranged", href: "#" },
							{ name: "Counterfeit", href: "#" },
							{ name: "Significant Other", href: "#" },
						],
					},
				],
			},
		],
		pages: [
			{ name: "KIẾN THỨC", href: "knowledge" },
			{ name: "TUYỂN DỤNG", href: "recruitment" },
			{ name: "THÔNG TIN", href: "information" },
		],
	};
	const [open, setOpen] = useState(false);

	const visibleSlides = 2;
	let currentSlide = 0; // Use `let` instead of `const` to allow reassignment
	const handleNext = () => {
		const totalSlides = slider.children.length;
		const visibleSlides = 2; // Number of slides visible at a time
		if (currentSlide < totalSlides - visibleSlides) {
			currentSlide++;
		} else {
			currentSlide = 0; // Go back to the first slide
		}
		slider.style.transform = `translateX(-${currentSlide * 50}%)`;
	};

	const handlePrev = () => {
		const totalSlides = slider.children.length;
		const visibleSlides = 2; // Number of slides visible at a time
		if (currentSlide > 0) {
			currentSlide--;
		} else {
			currentSlide =
				navigation.categories[0].featured.length - visibleSlides; // Get featured length from categories
		}
		slider.style.transform = `translateX(-${currentSlide * 50}%)`;
	};

	const solutions = [
		{ name: "NHÀ PHỐ", href: "#" },
		{ name: "BIỆT THỰ", href: "#" },
		{ name: "CHUNG CƯ", href: "#" },
		{ name: "NHÀ VƯỜN", href: "#" },
		{ name: "SHOPHOUSE", href: "#" },
		{ name: "BILLIARD", href: "#" },
		{ name: "CAFE", href: "#" },
	];

	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="bg-white">
				{/* Mobile menu */}
				<Dialog
					open={open}
					onClose={setOpen}
					className="relative z-400 lg:hidden">
					<DialogBackdrop
						transition
						className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
					/>

					<div className="fixed inset-0 z-40 flex">
						<DialogPanel
							transition
							className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full">
							<div className="flex px-4 pb-2 pt-5">
								<button
									type="button"
									onClick={() => setOpen(false)}
									className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Close menu</span>
									<XMarkIcon
										aria-hidden="true"
										className="size-6"
									/>
								</button>
							</div>

							{/* Links */}
							<TabGroup className="mt-2">
								<div className="border-b border-gray-200">
									<TabList className="-mb-px flex space-x-8 px-4">
										{navigation.categories.map(
											(category) => (
												<Tab
													key={category.name}
													className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600">
													{category.name}
												</Tab>
											)
										)}
									</TabList>
								</div>
								<TabPanels as={Fragment}>
									{navigation.categories.map((category) => (
										<TabPanel
											key={category.name}
											className="space-y-10 px-4 pb-8 pt-10">
											<div className="grid grid-cols-2 gap-x-4">
												{category.featured.map(
													(item) => (
														<div
															key={item.name}
															className="group relative text-sm">
															<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
																<img
																	alt={
																		item.imageAlt
																	}
																	src={
																		item.imageSrc
																	}
																	className="object-cover object-center"
																/>
															</div>
															<a
																href={item.href}
																className="mt-6 block font-medium text-gray-900">
																<span
																	aria-hidden="true"
																	className="absolute inset-0 z-10"
																/>
																{item.name}
															</a>
															<p
																aria-hidden="true"
																className="mt-1">
																Shop now
															</p>
														</div>
													)
												)}
											</div>
											{category.sections.map(
												(section) => (
													<div key={section.name}>
														<p
															id={`${category.id}-${section.id}-heading-mobile`}
															className="font-medium text-gray-900">
															{section.name}
														</p>
														<ul
															role="list"
															aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
															className="mt-6 flex flex-col space-y-6">
															{section.items.map(
																(item) => (
																	<li
																		key={
																			item.name
																		}
																		className="flow-root">
																		<a
																			href={
																				item.href
																			}
																			className="-m-2 block p-2 text-gray-500">
																			{
																				item.name
																			}
																		</a>
																	</li>
																)
															)}
														</ul>
													</div>
												)
											)}
										</TabPanel>
									))}
								</TabPanels>
							</TabGroup>

							<div className="space-y-6 border-t border-gray-200 px-4 py-6">
								{navigation.pages.map((page) => (
									<div
										key={page.name}
										className="flow-root">
										<a
											href={page.href}
											className="-m-2 block p-2 font-medium text-gray-900">
											{page.name}
										</a>
									</div>
								))}
							</div>

							<div className="space-y-6 border-t border-gray-200 px-4 py-6">
								<div className="flow-root">
									<a
										href="#"
										className="-m-2 block p-2 font-medium text-gray-900">
										CONTACT
									</a>
								</div>
								<div className="flow-root">
									<a
										href="#"
										className="-m-2 block p-2 font-medium text-gray-900">
										0785 96 8888
									</a>
								</div>
							</div>
						</DialogPanel>
					</div>
				</Dialog>

				<header className="relative bg-white">
					<Banners />

					<nav
						aria-label="Top"
						className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between items-center py-4 px-4">
							{/* Left Section: Contact and Phone */}
							<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-start lg:space-x-6">
								<a
									href="#"
									className="text-sm font-medium text-gray-700 hover:text-gray-800">
									CONTACT
								</a>
								<span
									aria-hidden="true"
									className="h-6 w-px bg-gray-200"
								/>
								<a
									href="#"
									className="text-sm font-medium text-gray-700 hover:text-gray-800">
									0785 96 8888
								</a>
							</div>
							<button
								type="button"
								onClick={() => setOpen(true)}
								className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
								<span className="absolute -inset-0.5" />
								<span className="sr-only">Open menu</span>
								<Bars3Icon
									aria-hidden="true"
									className="size-6"
								/>
							</button>

							{/* Center Section: Logo */}
							<div className="flex flex-grow justify-center lg:flex-none">
								<a
									href="/"
									className="flex">
									<span className="sr-only">
										Your Company
									</span>
									<img
										alt="Your Company Logo"
										src="/static/logo_v2.png"
										className="h-[70px] w-auto"
									/>
								</a>
							</div>

							{/* Right Section: Search Icon */}
							<div className="flex lg:flex-1 justify-end">
								<a
									href="#"
									className=" text-gray-400 hover:text-gray-500"
									onClick={(e) => {
										e.preventDefault();
										toggleModal();
									}}>
									<span className="sr-only">Search</span>
									<MagnifyingGlassIcon
										aria-hidden="true"
										className="h-6 w-6"
									/>
								</a>
							</div>
						</div>
					</nav>
				</header>

				{isOpen && (
					<div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
						onClick={toggleModal} // Close modal when clicking on the background
					>
						{/* Content Container */}
						<div
							className="relative bg-transparent bg-opacity-75 backdrop-blur-md rounded-full p-4 w-11/12 max-w-md shadow-lg"
							onClick={(e) => e.stopPropagation()} // Prevent background click from closing modal
						>
							{/* Close Button */}
							<button
								onClick={toggleModal}
								className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
								<span className="sr-only">Close</span>
							</button>

							{/* Input Field */}
							<input
								type="text"
								className="  w-full border border-transparent focus:border-indigo-500 bg-opacity-70 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								placeholder="Nhập tên dự án cần tìm.."
							/>
						</div>
					</div>
				)}
			</div>
			<div className="bg-white border-b border-gray-200 sticky top-0 z-40 hidden sm:block">
				<div className="flex h-16 items-center justify-center">
					{/* Flyout menus */}
					<PopoverGroup className="lg:ml-8 lg:block lg:self-stretch">
						<div className="flex h-full space-x-8 ">
							{navigation.categories.map((category) => (
								<Popover
									key={category.name}
									className="flex z-20">
									<div className="relative flex z-20">
										<PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm  text-black font-semibold transition-colors duration-200 ease-out hover:text-yellow-600 data-[open]:border-[#2d2d2d] data-[open]:text-[#000000] data-[open]:font-semibold ">
											{category.name}
										</PopoverButton>
									</div>

									<PopoverPanel
										transition
										className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
										{/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
										<div
											aria-hidden="true"
											className="absolute inset-0 top-1/2 bg-white shadow"
										/>

										<div className="relative bg-white">
											<div className="mx-auto max-w-7xl px-8">
												<div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
													<div className="relative overflow-hidden w-full">
														<div
															id="slider"
															className="flex transition-transform duration-500 ease-in-out"
															style={{
																transform: `translateX(-${
																	(currentSlide *
																		100) /
																	visibleSlides
																}%)`,
															}}>
															{navigation.categories[0].featured.map(
																(item) => (
																	<div
																		key={
																			item.name
																		}
																		className="w-1/2 flex-shrink-0 px-4">
																		<div className="group relative text-base sm:text-sm">
																			<div className="w-full h-64 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
																				{" "}
																				{/* Fixed size for square */}
																				<img
																					alt="Image project"
																					src={
																						item.imageSrc
																					}
																					className="object-cover object-center w-full h-full" // Image will fill the square container
																				/>
																			</div>
																			<a
																				href={
																					item.href
																				}
																				className="mt-6 block font-medium text-gray-900 text-center">
																				{" "}
																				{/* Center the text */}
																				<span
																					aria-hidden="true"
																					className="absolute inset-0 z-10"
																				/>
																				{
																					item.name
																				}
																			</a>
																		</div>
																	</div>
																)
															)}
														</div>

														{/* Nút điều hướng dưới slider */}
														<div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-4">
															<button
																onClick={
																	handlePrev
																}
																className="text-black p-2 rounded-full">
																<CiCircleChevLeft className="text-3xl" />
															</button>
															<button
																onClick={
																	handleNext
																}
																className="text-black p-2 rounded-full ">
																<CiCircleChevRight className="text-3xl" />
															</button>
														</div>
													</div>

													<div className="row-start-1 grid grid-cols-2 gap-x-1 gap-y-1 text-sm">
														{solutions.map(
															(item) => (
																<div
																	key={
																		item.name
																	}
																	className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 shadow-sm cursor-pointer">
																	<div className="w-full overflow-hidden relative">
																		<a
																			href={
																				item.href
																			}
																			className="font-semibold text-gray-900">
																			{
																				item.name
																			}
																		</a>
																		<p className="mt-1 text-gray-600">
																			{
																				item.description
																			}
																		</p>
																		<div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
																	</div>
																</div>
															)
														)}
													</div>
												</div>
											</div>
										</div>
									</PopoverPanel>
								</Popover>
							))}
							{navigation2.categories.map((category) => (
								<Popover
									key={category.name}
									className="flex z-20">
									<div className="relative flex z-20">
										<PopoverButton className="relative z-20 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm  text-black font-semibold transition-colors duration-200 ease-out hover:text-yellow-600 data-[open]:border-[#2d2d2d] data-[open]:text-[#000000] data-[open]:font-semibold ">
											{category.name}
										</PopoverButton>
									</div>

									<PopoverPanel
										transition
										className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
										<div
											aria-hidden="true"
											className="absolute inset-0 top-1/2 bg-white shadow"
										/>

										<div className="relative bg-white">
											<div className="mx-auto max-w-7xl px-8">
												<div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
													<div className="p-6 border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:border-yellow-600 transition">
														<a
															href="/bao-gia-xay-nha-tron-goi"
															className="block text-lg font-semibold text-black hover:text-yellow-600">
															Báo giá xây nhà trọn
															gói
														</a>
														<p className="mt-2 text-sm text-gray-600">
															Chi tiết về báo giá
															xây nhà trọn gói,
															bao gồm các dịch vụ
															và chi phí liên
															quan.
														</p>
													</div>
													<div className="p-6 border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:border-yellow-600 transition">
														<a
															href="/bao-gia-hoan-thien"
															className="block text-lg font-semibold text-black hover:text-yellow-600">
															Báo giá hoàn thiện
														</a>
														<p className="mt-2 text-sm text-gray-600">
															Thông tin về báo giá
															hoàn thiện nhà, từ
															nội thất đến ngoại
															thất.
														</p>
													</div>
													<div className="p-6 border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:border-yellow-600 transition">
														<a
															href="/bao-gia-xay-dung-phan-tho"
															className="block text-lg font-semibold text-black hover:text-yellow-600">
															Báo giá xây dựng
															phần thô
														</a>
														<p className="mt-2 text-sm text-gray-600">
															Chi tiết về báo giá
															xây dựng phần thô,
															bao gồm các công
															đoạn và chi phí.
														</p>
													</div>
													<div className="p-6 border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:border-yellow-600 transition">
														<a
															href="/bao-gia-thiet-ke"
															className="block text-lg font-semibold text-black hover:text-yellow-600">
															Báo giá thiết kế
														</a>
														<p className="mt-2 text-sm text-gray-600">
															Thông tin về báo giá
															thiết kế, bao gồm
															các gói dịch vụ và
															chi phí.
														</p>
													</div>
												</div>
											</div>
										</div>
									</PopoverPanel>
								</Popover>
							))}

							{navigation.pages.map((page) => (
								<Link
									passHref
									key={page.name}
									href={page.href}
									className="flex items-center text-sm font-semibold text-black hover:text-yellow-600">
									{page.name}
								</Link>
							))}
						</div>
					</PopoverGroup>
				</div>
			</div>
		</>
	);
}
