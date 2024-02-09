import React from 'react';
import { Avatar, Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
	gridColumn: '1/7',
	display: 'grid',
	gridTemplateColumns: 'repeat(6, 1fr)',
	gap: 4,
	gridTemplateRows: 'repeat(3, 1fr)',
	height: '100vh',
	flexDirection: 'column',
	justifyContent: 'end',
});

const StyledBox = styled(Box)({
	width: '100%',
	height: 'auto',
});

const StyledSubtitle1 = styled(Typography)({
	fontSize: '5rem',
	fontWeight: 600,
	padding: 25,
	color: 'var(--gradient-color)',
});

const StyledAvatar = styled(Avatar)({
	width: 220,
	height: 220,
});

const Hero = () => {
	return (
		<StyledContainer maxWidth='xl' disableGutters>
			<StyledBox gridColumn='1/5' gridRow='2/3'>
				<Typography variant='title'>JESSICA</Typography>
				<br />
				<Typography variant='title'>FRANCAVILLA</Typography>
			</StyledBox>
			<StyledBox gridColumn='1/5' gridRow='3/4'>
				<StyledSubtitle1 variant='subtitle1'>frontend developer</StyledSubtitle1>
			</StyledBox>
			<StyledBox gridColumn='5/6' gridRow='2/3' display='flex' alignItems='center' justifyContent='center'>
				<StyledAvatar alt='Jessica' src='avatar.jpeg' />
			</StyledBox>
		</StyledContainer>
	);
};

export default Hero;
