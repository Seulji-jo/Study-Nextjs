import axios from 'axios';

const getAccessToken = async ({ setAccessToken }) => {
	const response = await axios.post(
		'https://backend04.codebootcamp.co.kr/graphql',
		{
			query: `
							mutation restoreAccessToken {
								restoreAccessToken {
									accessToken
								}
							}
						`,
		},
		//* 설정들
		{
			headers: { 'Content-Type': 'application/json' },
			withCredentials: true,
		},
	);
	if (response.data.data === null) return null;

	//* 재발급토큰
	const newAccessToken = response.data.data.restoreAccessToken.accessToken;
	setAccessToken(newAccessToken);
};

export default getAccessToken;