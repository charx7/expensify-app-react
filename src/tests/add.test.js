//import { test, expect } from "jest";

const add  = (a, b) => a + b;
const generateGreeting = (name) => `Hola soy ${name}!`;

test("Deberia sumar 2 numeros", () => {
    const resultado = add(3,4);
    expect(resultado).toBe(7);
}); 

test("Deberia arrojar nombre y despues una exclamacion", () => {
    const resultado = generateGreeting("Gustavo");
    expect(resultado).toBe("Hola soy Gustavo!");
});