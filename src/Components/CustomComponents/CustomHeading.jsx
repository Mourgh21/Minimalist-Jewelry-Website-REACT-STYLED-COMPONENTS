import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
	text-align: ${(props) => props.textAlign || 'center'};
	border-top: 1px solid #000;
	margin-left: 100px;
	margin-right: 100px;
	margin-top: 40px;
`;

const HeaderTitles = styled.h2`
	font-size: 18px;
	padding-top: 40px;
	padding-bottom: 30px;
	text-align: center;
`;

const HeaderDescription = styled.p`
	font-size: 2rem;
	color: #777e90;
`;

const CustomHeader = ({ title, description, textAlign }) => {
	return (
		<HeaderContainer textAlign={textAlign}>
			<HeaderTitles>{title}</HeaderTitles>
			<HeaderDescription>{description}</HeaderDescription>
		</HeaderContainer>
	);
};

export default CustomHeader;
