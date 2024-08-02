/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '2rem',
			},
			colors: {
				white: {
					DEFAULT: '#ffff',
					80: '#ffffff80',
				},
			},
		},
	},
	plugins: [],
};
