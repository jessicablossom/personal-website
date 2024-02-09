import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, List, ListItem } from '@mui/material';
import { styled } from '@mui/system';
import getSkills from '../utils/axiosRequest';

const Category = React.memo(({ category }) => (
	<Typography variant='h5' gutterBottom>
		{category.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}:
	</Typography>
));

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

const Skills = () => {
	const [skillsData, setSkillsData] = useState([]);

	useEffect(() => {
		// Check if skills data exists in localStorage
		const cachedSkillsData = localStorage.getItem('skillsData');

		if (cachedSkillsData) {
			setSkillsData(JSON.parse(cachedSkillsData));
		} else {
			const fetchData = async () => {
				try {
					const data = await getSkills();
					if (data) {
						setSkillsData(data);
						localStorage.setItem('skillsData', JSON.stringify(data));
					}
				} catch (error) {
					console.error('Error fetching data:', error);
				}
			};
			fetchData();
		}
	}, []);

	return (
		skillsData.length > 0 && (
			<StyledContainer maxWidth='xl' disableGutters>
				<Box sx={{ gridRow: '1/2', gridColumn: '1/7' }}>
					<Typography variant='title'>SKILLS</Typography>
				</Box>
				<Box
					sx={{
						gridRow: '2/4',
						gridColumn: '1/7',
						display: 'grid',
						gridTemplateColumns: 'repeat(2,1fr)',
						gap: 4,
					}}
				>
					{skillsData.map(({ category, skills, id }) => (
						<Box key={id} sx={{ border: '1px solid grey', padding: 2, borderRadius: 4 }}>
							<Category category={category} />
							<List dense>
								{skills.map((skill, index) => (
									<ListItem key={index} disableGutters>
										<Typography variant='body'>{skill}</Typography>
									</ListItem>
								))}
							</List>
						</Box>
					))}
				</Box>
			</StyledContainer>
		)
	);
};

export default Skills;
