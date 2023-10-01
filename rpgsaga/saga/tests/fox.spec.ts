import Fox from '../src/fox';

describe('Testing fox constructor', () => {
  it('A fox is born', () => {
    const test = new Fox('Lisa', 'Black', 2015);
    expect(test.name).toEqual('Lisa');
    expect(test.color).toEqual('Black');
    expect(test.year).toEqual(2015);
  });

  it('Fox year lower than bound', () => {
    const test = new Fox('Lisa', 'Black', 1999);
    expect(test.year).toEqual(2000);
    expect(test.name).toEqual('Lisa');
    expect(test.color).toEqual('Black');
  });

  it('Fox year higher than bound', () => {
    const test = new Fox('Lisa', 'Black', 2023);
    expect(test.year).toEqual(2000);
    expect(test.name).toEqual('Lisa');
    expect(test.color).toEqual('Black');
  });

  it('should create a Fox with default info', () => {
    const fox = Fox.createFoxWithoutInfo();
    expect(fox.name).toBe('Unknown Fox');
    expect(fox.color).toBe('Unknown Color');
    expect(fox.year).toBeUndefined();
  });
});

describe('Testing fox methods', () => {
  it('A fox like yourself', () => {
    const test = new Fox('Lisa', 'Black', 2015);
    expect(test.getView()).toEqual(`
        /\\     /\\
       /  \\___/  \\
      /  ( o o )   \\
     /   |  Y  |    \\
    /   )|  -  |(    \\
   /   / |-----| \\   \\
  /    ) |-----|  (   \\
  \\______|-----|______/
        /       \\
       /  /|   |\\ \\
      /  / |___| \\ \\
     |  /        \\  |
     |__|        |__|
      `);
  });

  it('should log the correct information about the fox', () => {
    const test = new Fox('Foxy', 'Red', 2015);
    const consoleSpy = jest.spyOn(console, 'log');
    test.infoAboutFox();
    expect(consoleSpy).toHaveBeenCalledWith('Your fox is named Foxy , has Red coat color and is 2015 years old.');
    consoleSpy.mockRestore();
  });

  it('should change the fox color', () => {
    const fox = new Fox('Foxy', 'Red');
    fox.changeColor('Gray');
    expect(fox.color).toBe('Gray');
  });

  it('should log the correct sound', () => {
    const fox = new Fox('Foxy', 'Red');
    const consoleSpy = jest.spyOn(console, 'log');
    fox.makeSound();
    expect(consoleSpy).toHaveBeenCalledWith('The fox makes a squeaky sound.');
    consoleSpy.mockRestore();
  });

  it('should log the correct hunting message', () => {
    const fox = new Fox('Foxy', 'Red');
    const consoleSpy = jest.spyOn(console, 'log');
    fox.hunt('rabbit');
    expect(consoleSpy).toHaveBeenCalledWith('Foxy hunts rabbit');
    consoleSpy.mockRestore();
  });
});
