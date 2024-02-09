import axios from 'axios';

const getSkills = async () => {
	try {
		const response = await axios.get('https://65c4d8b8dae2304e92e37c55.mockapi.io/api/v1/skills');
		return response.data;
	} catch (error) {
		console.error('Error fetching data:', error);
		return null;
	}
};

export default getSkills;
