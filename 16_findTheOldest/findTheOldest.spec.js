const findTheOldest = require('./findTheOldest')

describe('findTheOldest', () => {
  test('finds the person with the greatest age!', () => {
    const people = [
      {
        name: "Carly", // 28
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray", // 49
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane", // 29
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    expect(findTheOldest(people).name).toBe('Ray');
  });
  test('finds the oldest person if yearOfDeath field is undefined on a non-oldest person', () => {
    const people = [
      {
        name: "Carly", // 7
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    expect(findTheOldest(people).name).toBe('Ray');
  });
  test('finds the oldest person if yearOfDeath field is undefined for the oldest person', () => {
    const people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    expect(findTheOldest(people).name).toBe('Carly');
  });
});
