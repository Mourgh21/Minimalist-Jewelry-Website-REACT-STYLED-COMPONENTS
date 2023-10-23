import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
	margin-top: 50px;
`;

const BlogCard = styled.div``;

const Scalediv = styled.div`
	overflow: hidden;
`;

const ImageDiv = styled.div``;

const Image = styled.img`
	width: 410px;
	height: 260px;
	transition: transform 0.6s;
	&:hover {
		transform: scale(1.1);
	}
	cursor: pointer;
`;

const Title = styled.h3`
	max-width: 410px;
`;

const Paragraph = styled.p`
	max-width: 410px;
`;

const CallToAction = styled.p`
	font-size: 15px;
	font-weight: bold;
	text-decoration: underline;
	cursor: pointer;
	&:hover {
		color: #777;
	}
`;

const NewsBlogSection = ({ data }) => {
	const { image, title, desc, calltoaction } = data;
	return (
		<Container>
			<BlogCard>
				<ImageDiv>
					<Scalediv>
						<Image
							src={image}
							alt='image'
						/>
					</Scalediv>
				</ImageDiv>
				<Title>{title}</Title>
				<Paragraph>{desc}</Paragraph>
				<CallToAction>{calltoaction}</CallToAction>
			</BlogCard>
		</Container>
	);
};

export default NewsBlogSection;
