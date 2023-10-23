import React from 'react';
import styled from 'styled-components';
import video from '../Assets/VideoJe.mp4';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import video2 from '../Assets/VideoJe2.mp4';
import video3 from '../Assets/VideoJe3.mp4';

const Container = styled.section``;

const StyledSlider = styled(Slider)`
	.slick-dots {
	}
`;

const HeroContainer = styled.div`
	margin-bottom: 40px;
`;

const HeroTitle = styled.div`
	margin-top: 50px;
	margin-bottom: 30px;
`;

const NormalText = styled.p`
	text-align: center;
	justify-content: center;
	font-size: 12px;
`;

const BiggerText = styled.h1`
	text-align: center;
	justify-content: center;
	font-size: 30px;
`;

const HeroVideo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Video = styled.video`
	max-width: 85%;
	height: auto;
	display: block;
	object-fit: cover;
`;

const HeroDesc = styled.div`
	display: flex;
	margin-left: 100px;
	justify-content: space-between;
`;

const Text = styled.h3`
	font-size: 18px;
	cursor: pointer;
	&:hover {
		color: #475569;
	}
`;

const Desc = styled.p`
	max-width: 60%;
	line-height: 1.5;
`;

const BottomText = styled.h3`
	font-size: 18px;
	cursor: pointer;
	margin-right: 40px;
	text-decoration: underline;
	&:hover {
		color: #475569;
	}
`;

const BottomDesc = styled.h3`
	font-size: 18px;
	cursor: pointer;
	margin-right: 100px;
	text-decoration: underline;
	&:hover {
		color: #475569;
	}
`;

const HeroDecChild = styled.div`
	flex: 1;
`;

const HeroSection = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
	};
	return (
		<Container>
			<StyledSlider {...settings}>
				<HeroContainer>
					<HeroTitle>
						<NormalText>FAMOUS BRANDS</NormalText>
						<BiggerText> SOPHIE BILLE</BiggerText>
					</HeroTitle>
					<HeroVideo>
						<Video
							src={video}
							alt='video'
							loop
							autoPlay
							muted
						/>
						<HeroDesc>
							<HeroDecChild>
								<Text>ABOUT THE COLLECTION</Text>
								<Desc>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Desc>
							</HeroDecChild>
							<BottomText>ABOUT MARIE</BottomText>
							<BottomDesc>DISCOVER SOPHIE BILLE</BottomDesc>
						</HeroDesc>
					</HeroVideo>
				</HeroContainer>
				<HeroContainer>
					<HeroTitle>
						<NormalText>FAMOUS BRANDS</NormalText>
						<BiggerText> SOPHIE BILLE</BiggerText>
					</HeroTitle>
					<HeroVideo>
						<Video
							src={video2}
							alt='video'
							loop
							autoPlay
							muted
						/>
						<HeroDesc>
							<HeroDecChild>
								<Text>ABOUT THE COLLECTION</Text>
								<Desc>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Desc>
							</HeroDecChild>
							<BottomText>ABOUT MARIE</BottomText>
							<BottomDesc>DISCOVER SOPHIE BILLE</BottomDesc>
						</HeroDesc>
					</HeroVideo>
				</HeroContainer>
				<HeroContainer>
					<HeroTitle>
						<NormalText>FAMOUS BRANDS</NormalText>
						<BiggerText> SOPHIE BILLE</BiggerText>
					</HeroTitle>
					<HeroVideo>
						<Video
							src={video3}
							alt='video'
							loop
							autoPlay
							muted
						/>
						<HeroDesc>
							<HeroDecChild>
								<Text>ABOUT THE COLLECTION</Text>
								<Desc>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Desc>
							</HeroDecChild>
							<BottomText>ABOUT MARIE</BottomText>
							<BottomDesc>DISCOVER SOPHIE BILLE</BottomDesc>
						</HeroDesc>
					</HeroVideo>
				</HeroContainer>
			</StyledSlider>
		</Container>
	);
};

export default HeroSection;
