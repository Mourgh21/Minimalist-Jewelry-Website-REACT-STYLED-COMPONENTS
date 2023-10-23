import React from 'react';
import HeroSection from './HomePageSections/HeroSection';
import Heading from './HomePageSections/Heading';
import CustomBestSellers from './CustomComponents/CustomBestSellers';
import { FeaturedSection } from './HomePageSections/FeaturedSection';
import JoinMemberSection from './HomePageSections/JoinMemberSection';
import CustomNewsData from './CustomComponents/CustomNewsData';
import MovingTextComponent from './CustomComponents/CustomMovingText';
import CustomHeadNews from './CustomComponents/CustomHeadNews';

const HomePage = () => {
	return (
		<div>
			<HeroSection />
			<Heading />
			<CustomBestSellers />
			<FeaturedSection />
			<JoinMemberSection />
			<CustomHeadNews
				title='LATEST NEWS'
				description='FEATURED NEWS'
			/>
			<CustomNewsData />
			<MovingTextComponent />
		</div>
	);
};

export default HomePage;
