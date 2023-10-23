import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BackToTopButtonContainer = styled.button`
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 1000;
	display: ${(props) => (props.visible ? 'block' : 'none')};
	background-color: #1d1d1d;
	color: white;
	border: none;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	cursor: pointer;
`;

const ScrollToTopIcon = styled.i`
	font-size: 29px;
`;

const BackToTopButton = ({ onClick }) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<BackToTopButtonContainer
			onClick={onClick}
			visible={isVisible}>
			<ScrollToTopIcon>&uarr;</ScrollToTopIcon>
		</BackToTopButtonContainer>
	);
};

export default BackToTopButton;
