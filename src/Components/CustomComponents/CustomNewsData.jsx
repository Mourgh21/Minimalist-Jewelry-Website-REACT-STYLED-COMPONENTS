import React from 'react';
import NewsBlogSection from '../HomePageSections/NewsBlogSection';
import BlogData from '../../Data/BlogData';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const StyledSlider = styled(Slider)`
	.slick-slide {
	}
`;

const Container = styled.div``;

const CustomNewsData = () => {
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
				{BlogData.map((data, index) => (
					<NewsBlogSection
						key={index}
						data={data}
					/>
				))}
			</StyledSlider>
		</Container>
	);
};

export default CustomNewsData;
