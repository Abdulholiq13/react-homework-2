import { GreenWhite } from '../buttons/GreenWhite';

export const Intro = () => {
	return (
		<section
			className='w-full h-[80vh] bg-red-200 flex items-center justify-center'
			style={{ backgroundImage: "url('../../assets/bg-image.jpg')" }}
		>
			<div className='container flex items-center justify-center'>
				<div className='w-[730px] flex flex-col items-center justify-center px-[95px] pt-[33px] pb-[63px] bg-white-80 backdrop-blur-xl rounded-[2px]'>
					<h2 className='text-[40px] text-center leading-10'>
						<p className='w-full mb-5'>🌱</p>
						The nature candle
					</h2>
					<p className='text-center text-[18px] leading-6 mb-[45px]'>
						All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments
					</p>

					<GreenWhite />
				</div>
			</div>
		</section>
	);
};
