import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
	padding: 40px;
	margin-left: 100px;
	margin-right: 100px;
	border-top: 1px solid #000;
	border-bottom: 1px solid #000;
	margin-top: 60px;
`;

const ContainerDiv = styled.div`
	display: flex;
	justify-content: center;
`;

const CtegoryDiv = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 500px;
	padding: 40px;
	margin-right: 20px;
	margin-left: 20px;
`;

const LineBorder = styled.div`
	border-left: 1px solid black;
`;

const FeaturedText = styled.p`
	text-align: center;
	margin-bottom: 20px;
	font-size: 12px;
	color: #94a3b8;
`;

const DivTextTitle = styled.div`
	display: flex;
	justify-content: center;
`;

const TitleDiv = styled.div`
	border: 2px solid black;
	width: 250px;
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
`;

const VideoContainer = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Video = styled.iframe`
	width: 500px;
	height: 500px;
	border: none;
`;

const TextDiv = styled.div``;

const Title = styled.h1`
	font-size: 20px;
	cursor: pointer;
	&:hover {
		color: #475569;
	}
`;

const Desc = styled.p``;

const CallToActionText = styled.p`
	font-size: 20px;
	font-weight: bold;
	text-decoration: underline;
	cursor: pointer;
	&:hover {
		color: #475569;
	}
`;

export const FeaturedSection = () => {
	return (
		<Container>
			<ContainerDiv>
				<CtegoryDiv>
					<FeaturedText>FEATURED CATEGORY</FeaturedText>
					<DivTextTitle>
						<TitleDiv>
							<Title>RINGS</Title>
						</TitleDiv>
					</DivTextTitle>

					<VideoContainer>
						<Video
							src='https://player.vimeo.com/video/641606891?autoplay=1&loop=1&controls=0&autopause=0&muted=1'
							alt='video'
							loop
							autoPlay
							muted
						/>
						<TextDiv>
							<Desc>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate
							</Desc>
							<CallToActionText>DISCOVER ALL RINGS</CallToActionText>
						</TextDiv>
					</VideoContainer>
				</CtegoryDiv>
				<LineBorder>
					<CtegoryDiv>
						<FeaturedText>FEATURED CATEGORY</FeaturedText>
						<DivTextTitle>
							<TitleDiv>
								<Title>NECKLACES</Title>
							</TitleDiv>
						</DivTextTitle>

						<VideoContainer>
							<Video
								src='https://player.vimeo.com/video/575528842?autoplay=1&loop=1&controls=0&autopause=0&muted=1'
								alt='video'
								loop
								autoPlay
								muted
							/>
							<TextDiv>
								<Desc>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate
								</Desc>
								<CallToActionText>DISCOVER ALL NECKLACES</CallToActionText>
							</TextDiv>
						</VideoContainer>
					</CtegoryDiv>
				</LineBorder>
			</ContainerDiv>
		</Container>
	);
};
