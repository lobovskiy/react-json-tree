async function getDataSync(fileName) {
	const res = await fetch(`./mocks/${fileName}`);

	if (!res.ok) {
    throw new Error(`Could not fetch ${fileName}, status: ${res.status}`);
	}

	return await res.json();
}

export default getDataSync;
