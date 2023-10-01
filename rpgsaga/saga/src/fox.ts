export default class Fox {
  private readonly aName: string;
  private aYear: number;
  color: string;

  constructor(name: string, color: string, year?: number) {
    this.aName = name;
    this.color = color;
    if (year !== undefined) {
      this.year = year;
    }
  }

  getView(): string {
    return `
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
      `;
  }

  get name(): string {
    return this.aName;
  }

  get year(): number {
    return this.aYear;
  }

  set year(year: number) {
    this.aYear = year >= 2000 && year < 2023 ? year : this.aYear >= 2000 && this.aYear < 2023 ? this.aYear : 2000;
  }

  infoAboutFox(): void {
    console.log(`Your fox is named ${this.name} , has ${this.color} coat color and is ${this.year} years old.`);
  }

  changeColor(newColor: string): void {
    this.color = newColor;
  }

  // Лисица издаёт звук
  makeSound(): void {
    console.log('The fox makes a squeaky sound.');
  }

  // Лисица охотится
  hunt(prey: string): void {
    console.log(`${this.name} hunts ${prey}`);
  }

  static createFoxWithoutInfo(): Fox {
    const fox = new Fox('Unknown Fox', 'Unknown Color');
    delete fox.year;
    return fox;
  }
}
