import Image from "next/image";
const Footer = () => {
	return (
		<footer className="bg-gray-800 py-12 text-gray-300">
			<div className="container mx-auto px-4 text-center">
				<Image
					src="/static/logo-koa-2.png"
					alt="KOA Studio Logo"
					width={150}
					height={90}
					className="mx-auto mb-4"
				/>
				<p className="mb-4">
					KOA Studio - Kiến Tạo Không Gian, Nâng Tầm Cuộc Sống
				</p>
				<p>
					© {new Date().getFullYear()} KOA Studio. All rights
					reserved.
				</p>
				<p className="text-white-900">
					Trụ sở Miền Nam: 574/1/18 Đường Huỳnh Thị Hai, Phường Tân
					Chánh Hiệp, Quận 12, TP. Hồ Chí Minh
				</p>
				<p className="text-white-900">
					Trụ sở Miền Trung: 10/74 Nguyễn Văn Cừ, Phường 7, Thành Phố
					Tuy Hoà, Phú Yên
				</p>
				<p className="text-white-900">
					Nhà máy sản xuất: Huyện Hóc Môn - TP. Hồ Chí Minh
				</p>
			</div>
		</footer>
	);
};
export default Footer;
