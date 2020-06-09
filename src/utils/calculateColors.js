const toHSLA = color => {
  return `hsla(${color.hue}, ${color.saturation}%, ${color.lightness}%, ${
    color.alpha
  })`;
};

const modifyColor = (
  color,
  saturationChange,
  lightnessChange,
  alphaChange = 1
) => {
  return toHSLA({
    ...color,
    saturation: constrain(color.saturation * saturationChange),
    lightness: constrain(color.lightness * lightnessChange),
    alpha: constrain(color.alpha * alphaChange)
  });
};

const constrain = color => {
  return Math.max(0, Math.min(Math.ceil(color), 100));
};

const walls = baseColor => {
  const wallSide = toHSLA(baseColor);
  const floor = modifyColor(baseColor, 0.75, 0.7);
  const wallBack = modifyColor(baseColor, 1.2, 1.15);
  return { wallSide, wallBack, floor };
};

const rug = baseColor => {
  const rug = toHSLA(baseColor);
  const shadow = modifyColor(baseColor, 1.1, 0.85);
  return { rug, shadow };
};

const windowAndLight = baseColor => {
  const windowPane = toHSLA(baseColor);
  const windowGlareShadowLight = modifyColor(baseColor, 0.9, 1.1, 0.85);
  const shadowDark = modifyColor(baseColor, 1, 1, 0.85);
  const windowFrame = modifyColor(baseColor, 0.3, 0.65);
  return { windowPane, windowGlareShadowLight, shadowDark, windowFrame };
};

const dresser = baseColor => {
  const front = toHSLA(baseColor);
  const drawer = modifyColor(baseColor, 1.1, 0.8);
  const topBorder = modifyColor(baseColor, 1.2, 1, 2);
  const knob = modifyColor(baseColor, 1.45, 1.4);
  return { front, drawer, topBorder, knob };
};

const table = baseColor => {
  const tableFront = modifyColor(baseColor, 1.2, 1.2);
  const tableBack = modifyColor(baseColor, 0.75, 0.95);
  const tableTop = modifyColor(baseColor, 1.15, 1.2);
  const tableLeft = modifyColor(baseColor, 1.07, 1.25);
  const lampBase = modifyColor(baseColor, 0.57, 1.01);
  const lampString = modifyColor(baseColor, 0.33, 0.8);
  const lampShade = toHSLA(baseColor);
  const lampShadow = modifyColor(baseColor, 0.37, 0.66);
  return {
    tableFront,
    tableBack,
    tableTop,
    tableLeft,
    lampBase,
    lampString,
    lampShade,
    lampShadow
  };
};

const decorations = baseColor => {
  const pictureBg = toHSLA(baseColor);
  const colorLight = modifyColor(baseColor, 1.2, 1.1);
  const colorMed = modifyColor(baseColor, 1.14, 0.95);
  const colorDark = modifyColor(baseColor, 0.66, 0.85);
  const frames = modifyColor(baseColor, 0.62, 0.63);
  return { pictureBg, colorLight, colorMed, colorDark, frames };
};

const bed = baseColor => {
  const bedWrinkles = modifyColor(baseColor, 0.98, 1.1);
  const blanketFront = toHSLA(baseColor);
  const blanketTop = modifyColor(baseColor, 1.23, 1.15);
  const pillowFront = modifyColor(baseColor, 1.1, 1.48);
  const pillowBack = modifyColor(baseColor, 1.03, 1.52);
  const mattressFront = modifyColor(baseColor, 0.5, 0.72);
  const mattressTop = modifyColor(baseColor, 0.45, 0.85);
  const bedLegs = modifyColor(baseColor, 0.33, 0.93);
  const backboardFront = modifyColor(baseColor, 1.03, 1.28);
  const backboardShadow = modifyColor(baseColor, 0.66, 1);
  const bedShadowDark = modifyColor(baseColor, 0.5, 0.6);
  const bedShadowLight = modifyColor(baseColor, 0.6, 0.65);
  return {
    bedWrinkles,
    blanketFront,
    blanketTop,
    pillowFront,
    pillowBack,
    mattressFront,
    mattressTop,
    bedLegs,
    backboardFront,
    backboardShadow,
    bedShadowLight,
    bedShadowDark
  };
};

export default {
  walls,
  rug,
  windowAndLight,
  dresser,
  table,
  decorations,
  bed
};
