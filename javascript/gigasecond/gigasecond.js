//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
    const GIGASECOND = Math.pow(10, 9);
    const time = date.getTime();
    return new Date(time + GIGASECOND * 1000);
};
