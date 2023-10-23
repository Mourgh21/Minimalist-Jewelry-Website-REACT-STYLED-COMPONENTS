import React from 'react';
import BestSellersSection from '../HomePageSections/BestSellersSection';
import DataProducts from '../../Data/DataProducts';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSlider = styled(Slider)``;

const Container = styled.div``;

const CustomBestSellers = () => {
	const settings = {
		slidesToShow: 3,
		speed: 900,
		infinite: false,
		slidesToScroll: 1,
		initialSlide: 0,
		dots: false,
	};
	return (
		<Container>
			<StyledSlider {...settings}>
				{DataProducts.map((data, index) => (
					<BestSellersSection
						key={index}
						data={data}
					/>
				))}
			</StyledSlider>
		</Container>
	);
};

export default CustomBestSellers;
