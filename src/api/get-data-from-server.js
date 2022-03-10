import serverRequest from '../server';

async function getDataFromFile(fileName, dataRepresent) {
	const res = await serverRequest(fileName, dataRepresent);

	return JSON.parse(res);
}

export default getDataFromFile;
