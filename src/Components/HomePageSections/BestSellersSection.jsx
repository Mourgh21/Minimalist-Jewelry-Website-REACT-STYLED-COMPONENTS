import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	* {
		margin: 0;
	}
`;

const ProductImage = styled.div`
	flex-direction: column;
	margin-left: 20px;
`;
const Scalediv = styled.div`
	overflow: hidden;
`;

const Image = styled.img`
	width: 400px;
	height: 400px;
	transition: transform 0.6s;
	&:hover {
		transform: scale(1.1);
	}
	cursor: pointer;
`;

const ProductText = styled.h4`
	max-width: 80%;
	font-size: 18px;
	font-weight: 500;
	margin-top: 5px;
	margin-bottom: 0;
	margin-left: 20px;
`;

const ByText = styled.p`
	font-weight: 500;
	padding-top: 8px;
	margin-left: 20px;
`;

const PriceText = styled.p`
	font-size: 19px;
	font-weight: bold;
	padding-top: 10px;
	margin-left: 20px;
`;

const BestSellersSection = ({ data }) => {
	const { image, title, seller, price } = data;
	return (
		<Container>
			<ProductImage>
				<Scalediv>
					<Image
						src={image}
						alt=''
					/>
				</Scalediv>
			</ProductImage>
			<ProductText>{title}</ProductText>
			<ByText>{seller}</ByText>
			<PriceText>{price}</PriceText>
		</Container>
	);
};

export default BestSellersSection;
