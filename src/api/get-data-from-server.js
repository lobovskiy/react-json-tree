import serverRequest from '../server';

export async function getDataFromFile(fileName, dataRepresent) {
	const res = await serverRequest(fileName, dataRepresent);

	return JSON.parse(res);
}
