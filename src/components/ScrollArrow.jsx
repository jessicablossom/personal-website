import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledScrollButton = styled(IconButton)({
	position: 'fixed',
	bottom: 30,
	right: 1158,
	opacity: 0,
	transition: 'opacity 0.3s ease',
	zIndex: 9999,
	'&.show': {
		opacity: 1,
	},
});

const ScrollArrow = () => {
	const [showArrow, setShowArrow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isBelowThreshold = window.scrollY > 10;
			setShowArrow(isBelowThreshold);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<StyledScrollButton
			aria-label='Scroll down'
			color='primary'
			size='large'
			onClick={scrollToTop}
			className={showArrow ? 'show' : ''}
		>
			<KeyboardArrowDown sx={{ fontSize: 60, color: '#D3D3D3' }} />
		</StyledScrollButton>
	);
};

export default ScrollArrow;
