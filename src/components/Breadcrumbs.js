import Link from "next/link";

const Breadcrumbs = ({ items }) => {
	return (
		<nav
			aria-label="Breadcrumb"
			className="flex items-center">
			{items.map((item, index) => (
				<div
					key={index}
					className="flex items-center">
					{index > 0 && (
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							width={16}
							height={16}
							viewBox="0 0 24 24"
							aria-hidden="true"
							className="h-4 w-4 text-gray-400 mx-2">
							<path d="M9 6l6 6-6 6" />
						</svg>
					)}
					{item.href ? (
						<Link
							href={item.href}
							passHref
							className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
							{item.label}
						</Link>
					) : (
						<span className="text-sm font-medium text-gray-300">
							{item.label}
						</span>
					)}
				</div>
			))}
		</nav>
	);
};

export default Breadcrumbs;
