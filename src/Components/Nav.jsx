import React from 'react';
import styled from 'styled-components';
import LUSTER from './Assets/LUSTER.png';
import heartrounded from './Assets/heart-rounded.png';
import searchIcon from './Assets/search-sm.png';
import shoppingbag02 from './Assets/shopping-bag-02.png';
import accounticon from './Assets/user-03.png';
import chevrondown from './Assets/chevron-down.png';
import DropdownMenu from './DrowDownMenu';
import BackToTopButton from './CustomComponents/BackToTopButton';

const Container = styled.section``;

const TopNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30px;
	color: #cbd5e1;
`;

const En = styled.div`
	display: flex;
	align-items: center;
	margin-left: 40px;
`;

const Text = styled.p`
	font-size: 19px;
	cursor: pointer;
	&:hover {
		color: #475569;
	}
`;

const Links = styled.a`
	text-align: center;
	display: flex;
	align-items: center;
	margin-right: 40px;
`;

const BottomnNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid #000; /* Add a top border */
	border-bottom: 1px solid #000; /* Add a bottom border */
	margin: 0 40px;
`;

const Logo = styled.div`
	margin-left: 60px;
`;

const Image = styled.img`
	width: 200px;
	height: 40px;
`;

const ImageHeartIcon = styled.img`
	width: 25px;
	height: 20px;
	margin-right: 5px;
`;

const LinkNav = styled.p`
	display: flex;
	gap: 40px;
`;

const NavIcons = styled.p`
	margin-right: 40px;
`;

const SearchIcon = styled.img`
	width: 40px;
	padding-right: 25px;
	cursor: pointer;
`;

const BagIcon = styled.img`
	width: 30px;
	cursor: pointer;
`;

const Nav = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<Container>
			<TopNav>
				<En>
					<Text>EN</Text>
					<ImageHeartIcon
						src={chevrondown}
						alt='heart icon'
					/>{' '}
				</En>
				<En>
					<Links>
						{' '}
						<ImageHeartIcon
							src={heartrounded}
							alt='heart icon'
						/>{' '}
						<Text>MY WISHLIST</Text>
					</Links>
					<Links>
						<ImageHeartIcon
							src={accounticon}
							alt='heart icon'
						/>{' '}
						<Text>ACCOUNT</Text>
					</Links>
				</En>
			</TopNav>

			<BottomnNav>
				<Logo>
					<Image
						src={LUSTER}
						alt='logo'
					/>
				</Logo>

				<LinkNav>
					<Text>
						<DropdownMenu />
					</Text>
					<Text>INSPIRATION</Text>
					<Text>GIFTING</Text>
					<Text>ABOUT</Text>
				</LinkNav>

				<NavIcons>
					<SearchIcon
						src={searchIcon}
						alt=''
					/>
					<BagIcon
						src={shoppingbag02}
						alt=''
					/>
				</NavIcons>
			</BottomnNav>
			<BackToTopButton onClick={scrollToTop} />
		</Container>
	);
};

export default Nav;
