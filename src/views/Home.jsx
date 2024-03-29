import React from 'react';
import { Container } from '@mui/material';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Skills from '../components/Skills';
import ScrollArrow from '../components/ScrollArrow';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
	height: '100vh',
	width: '100vw',
	display: 'grid',
	gridTemplateColumns: 'repeat(6, 1fr)',
	gap: 4,
});

const Home = () => {
	return (
		<StyledContainer maxWidth='xl' disableGutters>
			<Hero />
			<Summary />
			<Skills />
			<ScrollArrow />
		</StyledContainer>
	);
};

export default Home;
