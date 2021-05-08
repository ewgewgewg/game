import getRandom from "./getRandom";

const generatePositions = (pairs) => {
  let positions = [];
  for (let i = 0; i < pairs * 2 + 1; i++) {
    let temp = `${getRandom(8)}/${getRandom(8)}`;
    while (positions.includes(temp)) {
      temp = `${getRandom(8)}/${getRandom(8)}`;
    }
    positions.push(temp);
  }
  positions = positions.map((a) => [Number(a[0]), Number(a[2])]);

  const player = positions[0];
  const blue = [];
  const green = [];

  for (let i = 1; i < positions.length; i += 2) {
    blue.push(positions[i]);
    green.push(positions[i + 1]);
  }
  return [player, blue, green];
};

export default generatePositions;
