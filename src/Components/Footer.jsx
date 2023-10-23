import React from 'react';
import styled from 'styled-components';
import instagram from './Assets/instagram.png';
import facebook from './Assets/facebook.png';
import tiktok from './Assets/tiktok.png';
import pinterest from './Assets/pinterest.png';

const Container = styled.section`
	margin-top: 60px;
	border-top: 1px solid black;
	background-color: #333333;
`;

const TopFooter = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
	margin-left: 100px;
	margin-right: 100px;
`;

const FooterItemOne = styled.div``;

const FooterItemTwo = styled.div``;

const FooterItemThree = styled.div``;

const FooterItemFour = styled.div``;

const Title = styled.h4`
	font-size: 15px;
	color: white;
`;

const Text = styled.p`
	color: white;
	font-size: 12px;
	font-weight: 400;
	margin: 0;
	margin-top: 10px;
	&:hover {
		color: #777;
	}
	cursor: pointer;
`;

const Icons = styled.div`
	align-items: center;
`;

const Image = styled.img`
	padding-left: 10px;
`;

const BottomFooter = styled.div``;

const CopyRight = styled.div`
	display: flex;
	justify-content: space-between;
	margin-left: 50px;
	margin-right: 80px;
	margin-top: 40px;
	align-items: center;
`;

const TextRight = styled.p`
	font-size: 12px;
	color: white;
`;

const TileRight = styled.p`
	color: white;
	font-weight: bold;
	font-size: 20px;
`;

const Footer = () => {
	return (
		<Container>
			<TopFooter>
				<FooterItemOne>
					<Title>CUSTOMER SERVICES</Title>
					<Text>CONTACT</Text>
					<Text>SHIPPING & RETURNS</Text>
					<Text>FAQ</Text>
					<Text>PRIVACY POLICY</Text>
					<Text>TERMS & CONDITIONS</Text>
				</FooterItemOne>
				<FooterItemTwo>
					<Title>B2B</Title>
					<Text>DESIGN FOR US</Text>
					<Text>B2B PORTAL</Text>
				</FooterItemTwo>
				<FooterItemThree>
					<Title>COMPANY</Title>
					<Text>BRAND</Text>
					<Text>CAREERS</Text>
					<Text>SUSTAINABILITY</Text>
					<Text>PROJECTS</Text>
					<Text>PRESS</Text>
				</FooterItemThree>
				<FooterItemFour>
					<Title>FOLLOW US</Title>
					<Icons>
						<Image
							src={instagram}
							alt='instagram'
						/>
						<Image
							src={facebook}
							alt='facebook'
						/>
						<Image
							src={tiktok}
							alt='tiktok'
						/>
						<Image
							src={pinterest}
							alt='pinterest'
						/>
					</Icons>
				</FooterItemFour>
			</TopFooter>
			<BottomFooter>
				<CopyRight>
					<TextRight>© LUSTER 2023. MADE BY MOURGH</TextRight>
					<TileRight>LUSTER</TileRight>
				</CopyRight>
			</BottomFooter>
		</Container>
	);
};

export default Footer;
