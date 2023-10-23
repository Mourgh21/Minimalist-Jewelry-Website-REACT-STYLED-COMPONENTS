import React from 'react';
import styled from 'styled-components';
import ImageN from '../Assets/Member.png';
import Member from '../Assets/Member.mp4';

const Container = styled.div`
	margin: 40px;
	padding-top: 40px;
	border-bottom: 1px solid black;
	margin-left: 100px;
	margin-right: 100px;
`;

const JoinDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 50px;
	margin-bottom: 60px;
`;

const ImageDiv = styled.div``;

const Image = styled.img`
	align-items: center;
	max-width: 550px;
`;

const TextAndImageDiv = styled.div`
	text-align: center;
	padding: 30px;
`;

const Video = styled.video`
	height: 200px;
	width: 150px;
	padding-bottom: 10px;
`;

const Text = styled.h1`
	font-size: 25px;
	font-weight: bold;
`;

const Desc = styled.p`
	max-width: 350px;
	font-size: 16px;
`;

const CallToAction = styled.h2`
	font-size: 18px;
	text-decoration: underline;
	padding-top: 12px;
`;

const JoinMemberSection = () => {
	return (
		<Container>
			<JoinDiv>
				<ImageDiv>
					<Image
						src={ImageN}
						alt='Image'
					/>
				</ImageDiv>
				<TextAndImageDiv>
					<Video
						src={Member}
						alt='image'
						loop
						autoPlay
						muted
					/>
					<Text>GET MORE AS A MEMBER</Text>
					<Desc>
						Join our free membership program and discover exclusive access to
						our biggest drops, promotions, and more.
					</Desc>
					<CallToAction>JOIN NOW FOR FREE</CallToAction>
				</TextAndImageDiv>
			</JoinDiv>
		</Container>
	);
};

export default JoinMemberSection;
