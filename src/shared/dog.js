class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Bork Bork, I am ${this.name}, bork I say!`;
  }

  barkInConsole() {
    console.log(this.bark());
  }
}

export default Dog;
