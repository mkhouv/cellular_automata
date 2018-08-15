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

const grid = gridGenerator(5)

// console.log(grid)

function updateGrid(grid) { //perform one iteration of grid update

	const mirroredGrid = [];

	for (let i = 0; i < grid.length; i++) {
		mirroredGrid.push(grid[i].slice(0))
	}

	for (let j = 0; j < grid.length - 1; j++) { //iterate through rows

		for (let k = 0; k < grid.length - 1; k++) { //iterate through columns


			// let totalNewBorns = 0;
			let totalAdults = 0;
			// let totalSeniors = 0;

			let totalCells = 0;

			//add up the total values for the surrounding cells

			function checkGeneration(cell) {
				if (cell === 2) totalAdults++
			}

			if (j > 0 && k > 0) {

				checkGeneration(grid[j - 1][k - 1]); //top left
				if (grid[j - 1][k - 1]) totalCells++; //top left

			}

			if (j > 0) {

				checkGeneration(grid[j - 1][k]); //top center
				if (grid[j - 1][k]) totalCells++; //top center

			}

			if (j > 0 && k < grid.length - 2) {

				checkGeneration(grid[j - 1][k + 1]); //top right
				if (grid[j - 1][k + 1]) totalCells++; //top right

			}

			if (k > 0) {

				checkGeneration(grid[j][k - 1]); //middle left
				if (grid[j][k - 1]) totalCells++; //middle left

			}

			if (k < grid.length - 2) {

				checkGeneration(grid[j][k + 1]); //middle right
				if (grid[j][k + 1]) totalCells++; //middle right

			}

			if (j < grid.length - 2 && k > 0) {

				checkGeneration(grid[j + 1][k - 1]); //bottom left
				if (grid[j + 1][k - 1]) totalCells++; //bottom left

			}

			if (j < grid.length - 2) {

				checkGeneration(grid[j + 1][k]); //bottom center
				if (grid[j + 1][k]) totalCells++; //bottom center

			}

			if (j < grid.length - 2 && k < grid.length -2) {

				checkGeneration(grid[j + 1][k + 1]); //bottom right
				if (grid[j + 1][k + 1]) totalCells++; //bottom right

			}

			//apply the rules to each cell

			if (grid[j][k] === 0) {

				if (totalAdults === 2) mirroredGrid[j][k] = 1;

			} else if (grid[j][k] === 1) { //apply rules to living cell

				switch (totalCells) {

					case 0:

					case 1:

						mirroredGrid[j][k] = 0; //die of isolation

						break;

					case 2:

					case 3:

					case 4:

						mirroredGrid[j][k] = 2; //carry on living

						break;

					case 5:

					case 6:

					case 7:

					case 8:

						mirroredGrid[j][k] = 0; //die of overcrowding

						break;

					default:

						mirroredGrid[j][k] = 0; //

				}

			} else if (grid[j][k] === 2) { //apply rules to living cell

				switch (totalCells) {

					case 0:

						mirroredGrid[j][k] = 0; //die of isolation

						break;

					case 1:

					case 2:
						console.lo
						mirroredGrid[j][k] = 3; // aging

						break;

					case 3:


					case 4:

					case 5:

					case 6:

					case 7:

					case 8:

						mirroredGrid[j][k] = 0; //die of overcrowding

						break;

					default:

						mirroredGrid[j][k] = 0; //

				}

			} else if (grid[j][k] === 3) { //apply rules to living cell

				mirroredGrid[j][k] = 0; //die of natural causes

			}

		}

	}

	//copy mirroredGrid to grid

	for (var j = 0; j < grid.length; j++) { //iterate through rows

		for (var k = 0; k < grid.length; k++) { //iterate through columns

			grid[j][k] = mirroredGrid[j][k];

		}

	}

	return grid

}


let testGrid = [[0, 0, 1, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 2, 2, 1, 0],
		[0, 0, 0, 1, 0],
		[0, 0, 0, 0, 0]]

console.log(updateGrid(testGrid))
