//1

interface IEmployee {
   name: string;
   salary: number;
   isManager: boolean; 
}

const QA: IEmployee = {
    name: "Nail",
    salary: 5000,
    isManager: false,
};

//2

type EmployeeKeys = keyof IEmployee;

//3

type QaKeys = keyof typeof QA;

//4

type UserType = typeof QA;

//5

type OptionalEmployee = Partial<IEmployee>;

//6

type SomeEmployee = Pick<IEmployee, "name" | "salary">;

//7

type ExceptEmployee = Omit<IEmployee, "isManager">;

//8

type ReadonluEmployee = Readonly<IEmployee>;

//9

const qaObj: Record<string, keyof typeof QA> = {
    first: "name",
    second: "salary",
    third: "isManager",
};