import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
	text-align: ${(props) => props.textAlign || 'center'};
	margin-left: 100px;
	margin-right: 100px;
	margin-top: 40px;
`;

const HeaderTitles = styled.h2`
	font-size: 12px;
	text-align: center;
	color: #94a3b8;
`;

const HeaderDescription = styled.p`
	font-size: 18px;
	color: black;
	font-weight: bold;
`;

const CustomHeaderNews = ({ title, description, textAlign }) => {
	return (
		<HeaderContainer textAlign={textAlign}>
			<HeaderTitles>{title}</HeaderTitles>
			<HeaderDescription>{description}</HeaderDescription>
		</HeaderContainer>
	);
};

export default CustomHeaderNews;
