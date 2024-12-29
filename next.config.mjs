/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "koastudio.vn",
				port: "",
				pathname: "/wp-content/uploads/**",
			},
		],
	},
};

export default nextConfig;
