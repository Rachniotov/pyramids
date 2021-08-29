const black = '*';
const white = ' ';
const length = 10;

let fn = (index, len, upperIndex, reversed, upsideDown) => {
	// console.log(index, len, upperIndex)
	let res;
	if (upsideDown) {
		if (reversed) {
			if (index <= (len - upperIndex)) {
				res = black;
			} else {
				res = white;
			}
		} else {
			if (index < (len - upperIndex)) {
				res = black;
			} else {
				res = white;
			}
		}
	} else {
		if (reversed) {
			if (index <= upperIndex + 1) {
				res = black;
			} else {
				res = white;
			}
		} else {
			if (index <= upperIndex) {
				res = black;
			} else {
				res = white;
			}
		}
	}

	return res;
}

for (let i = 0; i < length; i++) {
	let res = [];
	for (let j = 0; j < length; j++) {
		res.push(fn(j, length, i, false, true));
	}
	for (let j = length; j > 0; j--) {
		res.push(fn(j, length, i, true, true));
	}

	console.log(res.join(''));
}
for (let i = 0; i < length; i++) {
	let res = [];
	for (let j = 0; j < length; j++) {
		res.push(fn(j, length, i, false, false));
	}
	for (let j = length; j > 0; j--) {
		res.push(fn(j, length, i, true, false));
	}

	console.log(res.join(''));
}
