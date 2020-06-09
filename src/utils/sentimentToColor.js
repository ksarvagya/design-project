const HUES = {
  anger: 359,
  joy: 60,
  sadness: 200,
  love: 300
};

const calculateHue = emotions => {
  let first = null;
  let second = null;
  for (const emotion in emotions) {
    if (first === null || emotions[emotion] > emotions[first]) {
      second = first;
      first = emotion;
    } else if (second === null || emotions[emotions] > emotions[second]) {
      second = emotion;
    }
  }
  const hues = Object.assign({}, HUES);
  if (
    (first === "anger" && second === "joy") ||
    (first === "joy" && second === "anger")
  ) {
    hues.anger = 0;
  }
  const firstPercentage =
    emotions[first] / (emotions[first] + emotions[second]);
  const secondPercentage = 1 - firstPercentage;
  return Math.ceil(
    firstPercentage * HUES[first] + secondPercentage * HUES[second]
  );
};

const caculateSaturation = emotions => {
  let first = null;
  for (const emotion in emotions) {
    if (first === null || emotions[emotion] > emotions[first]) {
      first = emotion;
    }
  }
  return Math.ceil(emotions[first] * 100);
};

export default results => {
  const { anger, joy, sadness, fear } = results.emotion;
  const { relationships, romance } = results.topics;
  const love = Math.min(100, relationships + romance);
  const hue = calculateHue({ anger, joy, sadness, love });
  const saturation = caculateSaturation({ anger, joy, sadness, love });
  const lightness = 20 + Math.ceil(results.sentiment * 40);
  const alpha = 1 - 0.25 * fear;
  return { hue, saturation, lightness, alpha };
};

// export default results => {
//   const { emotion, sentiment } = results;
//   const r = Math.ceil(emotion.anger * 255);
//   const g = Math.ceil(emotion.joy * 255);
//   const b = Math.ceil(emotion.sadness * 255);
//   const a = 1 - emotion.fear;
//   return `rgba(${r},${g},${b},${a})`;
// };
