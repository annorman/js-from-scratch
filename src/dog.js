class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Bork Bork, I am ${this.name}, bork I say!`;
  }
}

module.exports = Dog;
