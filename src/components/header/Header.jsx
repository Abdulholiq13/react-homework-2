import logo from '../../assets/logo.svg';
import { FaAngleDown } from 'react-icons/fa6';
import { FaRegUser } from 'react-icons/fa6';
import { FaCartShopping } from 'react-icons/fa6';

export const Header = () => {
	return (
		<header className='py-[25px]'>
			<div className='container mx-auto flex items-center justify-between'>
				<a href='App.jsx'>
					<img src={logo} alt='Logo img' />
				</a>

				<nav>
					<ul className='flex items-center gap-[40px]'>
						<li className=''>
							<a href='#' className='flex items-center gap-3 text-[16px]'>
								Discover <FaAngleDown />
							</a>
						</li>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Contact us</a>
						</li>
					</ul>
				</nav>

				<div className='flex items-center gap-[20px]'>
					<FaRegUser className='text-[24px]' />
					<FaCartShopping className='text-[24px]' />
				</div>
			</div>
		</header>
	);
};
