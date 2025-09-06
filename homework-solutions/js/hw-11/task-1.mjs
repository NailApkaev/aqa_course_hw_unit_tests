class Employee {
  // Ваш код
    #salary;
    constructor (firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
    };

    get firstName(){
    return this._firstName;
    };

    set firstName(value){
    if (typeof value !== "string") {
      return;
    };
    this._firstName = value;
    };

    get lastName(){
      return this._lastName;
    };

    set lastName(value){
      if (typeof value !== "string") {
        return;
      };
      this._lastName = value;
    };

    get profession(){
      return this._profession;
    };

    set profession(value){
      if (typeof value !== "string") {
        return;
      };
      this._profession = value;
    };

    get salary(){
      return this.#salary;
    };

    set salary(value){
      if (typeof value === "number" && value >= 0) {
        this.#salary = value;
      } else throw new TypeError("Invalid input: Зарплата должна быть больше, либо равна 0!");
    };

    getFullName(){
      return `${this._firstName} ${this._lastName}`;
    };

};

// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// console.log(emp1.firstName); // "John"
// emp1.salary = 3100;
// console.log(emp1.salary); // 3100

const myFirstClass = new Employee ('Nail', 'Apkaev', 'QA', 100000);
console.log(myFirstClass.firstName);
console.log(myFirstClass.salary);
myFirstClass.salary = 777;
console.log(myFirstClass.salary);
console.log(myFirstClass);

class Company {
  // Ваш код
  #employees = [];
  constructor (title, phone, address, employees = []) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [];
    if (Array.isArray(employees)) {
      for (const e of employees) this.addEmployee(e);
    };
  };

  get title () {
    return this._title;
  };
  set title (value) {
    if (typeof value === "string") this._title = value;
  };

  get phone () {
    return this._phone;
  };
  set phone (value) {
    if (typeof value === "number") this._phone = value;
  };

  get address () {
    return this._address;
  };
  set address (value) {
    if (typeof value === "string") this._address = value;
  };

  addEmployee (empl) {
    if (!(empl instanceof Employee)) {
            throw new TypeError("Invalid input: Сотрудник должен быть экземпляром класса Emploee!");
    } 
    return this.#employees.push(empl);
  };

  getEmployees() {
    return [...this.#employees];
  };

  getInfo (){
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  };

}

const company = new Company('Tech Corp', 123456, 'Main Street');
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
