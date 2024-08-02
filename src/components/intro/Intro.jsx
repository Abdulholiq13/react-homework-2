import React from 'react';
import { GreenWhite } from '../buttons/GreenWhite';
// import bgImage from '../../assets/bg-image';

export const Intro = () => {
	return (
		<section className='w-full h-[80vh] bg-introBg flex items-center justify-center'>
			<div className='container flex items-center justify-center'>
				<div className='w-[730px] flex flex-col items-center justify-center px-[95px] bg-white bgblue backdrop-blur-xl'>
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
