import withMDX from '@next/mdx';

const nextConfig = {
	output: "export",
	images: { unoptimized: true },
};

export default withMDX({
	extension: /\.mdx?$/,
	options: {},
})(nextConfig);
