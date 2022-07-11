type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

// union type
function kgToLbs(weight: number | string): number {
  //narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

// intersection type

type Draggable = {
  // takes no args and return nothing
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// literal types (exact or specific value)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// nullable types
function greet(name: string) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

// optional chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
//optional property access operator (the question  mark) - only execute if not null or undefined
console.log(customer?.birthday?.getFullYear());

//optional element access operator (for arrays)

let log: any = null;
log?.("a"); // this will execute only if log is a valid function, otherwise will get 'undefined'
