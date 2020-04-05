import './index.css';
class Demo {
  constructor() {
    this.name = "zhang san";
    this.age = 18;
    document.write(`<h1>${this.name}</h1>`);
    document.write(`<p>${this.age}</p>`);
  }
  changeName() {
    this.name = "li si";
    document.write(`<p>${this.name}</p>`);
  }
  changeAge = () => {
    this.age = 28;
    document.write(`<p>${this.age}</p>`);
  };
}

export default Demo;
