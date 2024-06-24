/* Pila: lista ordenada o estructurada de datos que permite almacenar y recuperar datos, el modo de acceso a sus elementos es de tipo LIFO Last In First Out*/

/* constructor: método de constructor
push: método para ingresar elementos dentro de la pila
pop: método para retirar elementos de la pila
*Funciones Auxiliares
getSize: método para obtener el tamaño de la pila
isEmpty: método para revisar si la pila está llena o vacía
peek: método para obtener el valor siguente que va a salir de la pila sin sacarlo
print: funcion para imprimir todos los elementos que están dentro de la pila*/

class Stack {
    constructor() {
        this.items = {}; //se alamacena toda la informacion de los elemntos que ingresan a la pila
        this.top = 0; //se toma registro del ultimo elemento que se introdujo a la pila
    };
    push(data) { //recibe el argumento de la info que se va a ingresar dentro de la pila
        this.top++; //se aumenta el tope de la pila
        this.items[this.top] = data;
    };
    pop() {
        let deletedData;

        if (this.top !== 0) { //se revisa una condición si es diferente de cero quiere decir que hay elementos dentro de la pila
            deletedData = this.items[this.top]; //se inicia la variable deletedData con el valor del ultimo elemento que ingresó a la pila
            delete this.items[this.top]; //se elimina el valor de this.items
            this.top--; //se disminuye un valor
            return deletedData; //devolver el valor que se eliminó de la pila
        }
    }
    getSize() {
        return this.top;
    }
    isEmpty() {
        if(!this.getSize()) {
            return true;//pila vacía
        }else {
            return false; //pila no está vacía
        }
    }
    peek() {
        if(this.isEmpty()) {
            return null;//si esta vacía devuelve null ya que la pila no tiene elementos
        }
        return this.items[this.top]; //devuelve el valor del elemento en salir
    }
    print() {
        let result = '';
        for(let i = this.top; i > 0; i--) {
            result += this.items[i] + ' ';
        }
        return result;
    }
};

const stack = new Stack(); //nueva variable de stack

stack.push('Plato #1');
stack.push('Plato #2');
stack.push('Plato #3');

/* console.log(stack.peek()); */ //devuelve plato #3
console.log(stack.print()); //devuelve lol elementos que se encuentran en la pila
console.log(stack.pop()); //sale plato #3
/* console.log(stack.peek()); */ //devuelve plato #2
console.log(stack.pop()); //sale plato #2
/* console.log(stack.peek());  *///devuelve plato #1
console.log(stack.pop()); //sale plato #1
/* console.log(stack.peek()); */ //devuelve null

console.log(stack.getSize());
console.log(stack.isEmpty());

console.log(stack);