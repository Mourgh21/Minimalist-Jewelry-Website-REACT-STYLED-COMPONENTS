import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
	position: relative;
	display: inline-block;
`;

const DropdownButton = styled.button`
	border: none;
	background-color: transparent;
	font-size: 19px;
	cursor: pointer;
	font-family: 'Raleway';
`;

const DropdownContent = styled.ul`
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
	position: absolute;
	background-color: white;
	min-width: 600px;
	min-height: 210px;
	z-index: 1;
`;

const DropdownItem = styled.li`
	padding: 5px 16px;
	text-decoration: none;
	display: block;
	&:hover {
		color: #475569;
		text-decoration: underline;
	}
	cursor: pointer;
	font-size: 12px;
	color: black;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
`;

const DrowOne = styled.div`
	display: flex;
	flex-direction: column;
`;

const DisplayContent = styled.div`
	padding-top: 30px;
	display: flex;
	gap: 100px;
`;

const Line = styled.div`
	border-left: 1px solid black;
`;

const Span = styled.p`
	font-size: 13px;
	font-weight: bold;
`;

function DropdownMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const handleMouseEnter = () => {
		setIsOpen(true);
	};

	const handleMouseLeave = () => {
		setIsOpen(false);
	};

	return (
		<DropdownContainer
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<DropdownButton>PRODUCTS</DropdownButton>
			<DropdownContent
				className='dropdown-content'
				isOpen={isOpen}>
				<DisplayContent>
					<DrowOne>
						<DropdownItem>
							<Span>COLLECTIONS</Span>
						</DropdownItem>
						<DropdownItem>ALL GIFTS</DropdownItem>
						<DropdownItem>BEST SELLERS</DropdownItem>
						<DropdownItem>LEAVING SOON</DropdownItem>
						<DropdownItem>Lifestyle</DropdownItem>
					</DrowOne>
					<Line>
						<Content>
							<DropdownItem>
								<Span>SHOP BY PRICE</Span>
							</DropdownItem>
							<DropdownItem>Under $150</DropdownItem>
							<DropdownItem>Under $300</DropdownItem>
							<DropdownItem>Under $500</DropdownItem>
							<DropdownItem>Over $500</DropdownItem>
						</Content>
					</Line>
					<Line>
						<Content>
							<DropdownItem>
								<Span>SHOP BY STYLE</Span>
							</DropdownItem>
							<DropdownItem>ALL RINGS</DropdownItem>
							<DropdownItem>ALL NECKLACES</DropdownItem>
							<DropdownItem>BRACELET CHARMS</DropdownItem>
							<DropdownItem>ANKLETS</DropdownItem>
						</Content>
					</Line>
				</DisplayContent>
			</DropdownContent>
		</DropdownContainer>
	);
}

export default DropdownMenu;
