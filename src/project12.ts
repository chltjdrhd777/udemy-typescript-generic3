interface Lengthy {
  length: number;
}

function tuple<T extends Lengthy>(element: T) {
  // In this case, it is assured if there is length in element. So I made interface Lengthy and order T to inherit this interface.
  let description = ""; //set the empty string
  if (element.length === 1) {
    description = "got 1 element"; // If the parameter's word have one word, description's value could be "got 1 element"
  } else if (element.length > 1) {
    description = `got ${element.length} elements.`;
  }
  return [element, description]; //return the parameter and result description.
}
console.log(tuple("a"), tuple("three"));

//the convenience of generic : I can reuse specific generic in other condition. For example,

class Stack<T> {
  // Then, it means I can set the specific type by reusing "T"
  public data: T[] = [];
  constructor() {}

  push(item: T): void {
    this.data.push(item);
  }

  pop() {
    return this.data.pop() as T;
  }
}

//usage
const numberStack = new Stack<number>(); // It means I would set the type of T as number
const stringStack = new Stack<string>(); // It means I would set the type of T as string
const objectStack = new Stack<{}>();
numberStack.push(1);
stringStack.push("a");
objectStack.push({ name: "Anderson" });
console.log(objectStack.data); // {name:'Anderson'}
//Like this, I can utilize type in accordance with my taste. I can also put other generic "points" then immediately can set the type when I make instances.
//////////////////////////////////////////////////////////////////////////////

//keyof = in typescript, they cannot understand that whether the key I want to set really exist in object. To avoid this error, I can add keyof like that
function keyOf<T extends object, U extends keyof T>(object: T, key: U) {
  // U extends keyof T = it means T must be a key of U(object)
  return `value : ${object[key]}`;
}

keyOf({ name: "Jorden" }, "name"); // I have to bear in mind that if I set the key's name as "name", then it should be matched with the next key condition. For example, If I set the key name as "grim", then it should be like "{grim : 'blue'}
//////////////////////////////////////////////////////////////////////////////////
//generic class

/* class Storage {
  private data = [];

  addItem(item) {
    this.data.push(item);
  }

  removeItem(item) {
    this.data.splice(this.data.indexOf(item), 1);
  } // splice(from,how many things I would pick, what I want to put in the array), indexOf(thing)= the number from which this thing is placed.
} */
