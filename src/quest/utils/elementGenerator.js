import getRandom from "./getRandom";

const elementGenerator = ({ fire, air, earth, water }) => {
  const fireScore = ["Fire", getRandom(fire * 10) + 1];
  const airScore = ["Air", getRandom(air * 10) + 1];
  const earthScore = ["Earth", getRandom(earth * 10) + 1];
  const waterScore = ["Water", getRandom(water * 10) + 1];
  const allScore = [fireScore, airScore, earthScore, waterScore].sort(
    (a, b) => b[1] - a[1]
  );
  const random1 = getRandom(4);
  let random2 = getRandom(4);
  while (random2 === random1) {
    random2 = getRandom(4);
  }
  return { danger: allScore[random1], reward: allScore[random2] };
};

export default elementGenerator;
