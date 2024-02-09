import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
	gridColumn: '1/7',
	display: 'grid',
	gridTemplateColumns: 'repeat(6, 1fr)',
	gap: 4,
	flexDirection: 'column',
	justifyContent: 'end',
	marginBottom: 150,
});

const GradientLine = styled(Box)({
	gridColumn: '1/7',
	height: '10px',
	borderRadius: '10px',
	backgroundImage: 'linear-gradient(to right, rgba(35, 176, 255, 1), rgba(255, 0, 153, 0.1))',
	backgroundClip: 'padding-box',
	margin: 20,
});

const StyledBox = styled(Box)({
	width: '100%',
	height: 'auto',
});

const Skills = () => {
	return (
		<>
			<GradientLine />
			<StyledContainer maxWidth='xl' disableGutters>
				<StyledBox gridColumn='1/7' gridRow='2/3'>
					<Typography variant='body1'>
						As a React Frontend Developer with over five years of experience, I am passionate about creating
						web interfaces that are user-friendly, responsive, and visually appealing. I have a strong
						background in React, Typescript, SASS, Nextjs, and Wordpress, as well as experience with
						Cypress.io and Material-UI frameworks.
					</Typography>
				</StyledBox>
			</StyledContainer>
		</>
	);
};

export default Skills;
