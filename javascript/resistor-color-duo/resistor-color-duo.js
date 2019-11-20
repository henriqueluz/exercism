//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = ([colorOne, colorTwo]) => {
  const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

  const first = COLORS.indexOf(colorOne).toString();
  const second = COLORS.indexOf(colorTwo);

  return Number(first.concat(second));
};
