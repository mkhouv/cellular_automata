function gridGenerator(numOfRows) {

	const arr = [];

	for (let i = 0; i < numOfRows; i++) {

		arr[i] = [];

		for (let j = 0; j < numOfRows; j++) {
			arr[i].push(0)
		}

	}

	return arr;

}

const grid = gridGenerator(10)
