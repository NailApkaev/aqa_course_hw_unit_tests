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
    return this._firstName
  };

  set firstName(value){
    if (typeof value !== 'string' || 2 > value.length || value.length > 50 || !/^[A-Za-z]+$/.test(value)){
      throw new TypeError("Неверный ввод");
    };
    this._firstName = value;
  };

  get lastName(){
      return this._lastName;
    };

  set lastName(value){
     if (typeof value !== 'string' || 2 > value.length || value.length > 50 || !/^[A-Za-z]+$/.test(value)){
      throw new TypeError("Неверный ввод");
    };
      this._lastName = value;
    };

  get profession(){
      return this._profession;
    };

    set profession(value){
      if (typeof value !== "string" || value.trim() === '' || !/^[A-Za-z\s]+$/.test(value)) {
        throw new TypeError('Неверный ввод');
      };
      this._profession = value;
    };

    get salary(){
      return this.#salary;
    };

    set salary(value){
      if (typeof value !== "number" || 10000 <= value || value <= 0 || isNaN(value)) {
        throw new TypeError("Invalid input: Зарплата должна быть больше, либо равна 0!");;
      } 
      this.#salary = value;
    };

getFullName(){
      return `${this._firstName} ${this._lastName}`;
    };

}

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

  findEmployeeByName(firstName){
    const found = this.#employees.find(empl => empl.firstName === firstName);
    if (!found) {
      throw new Error(`Сотрудник ${firstName} не найден`);
    };
    return found;
  };

  #getEmployeeIndex(firstName){
    return this.#employees.findIndex(empl => empl.firstName === firstName);
  };

  removeEmployee(firstName){
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error(`Сотрудник ${firstName} не найден`);
    }
    return this.#employees.splice(index,1)[0];
  };

  getTotalSalary(){
    return this.#employees.reduce((sum,empl) => sum + empl.salary, 0);
  };

};

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
