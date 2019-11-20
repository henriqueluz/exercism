//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (colors) => {
  const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

  const first = COLORS.indexOf(colors[0]).toString();
  const second = COLORS.indexOf(colors[1]);

  return parseInt(first.concat(second));
};
