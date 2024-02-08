import React from 'react';
import { Avatar, Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
	gridColumn: '1/7',
	display: 'grid',
	gridTemplateColumns: 'repeat(6, 1fr)',
	gap: 4,
	gridTemplateRows: 'repeat(3, 1fr)',
	height: '90vh',
	flexDirection: 'column',
	justifyContent: 'end',
});

const StyledBox = styled(Box)({
	width: '100%',
	height: 'auto',
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
				<Typography variant='subtitle1'>frontend developer</Typography>
			</StyledBox>
			<StyledBox gridColumn='5/6' gridRow='2/3' display='flex' alignItems='center' justifyContent='center'>
				<StyledAvatar alt='Jessica' src='avatar.jpeg' />
			</StyledBox>
		</StyledContainer>
	);
};

export default Hero;
