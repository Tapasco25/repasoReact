import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test('getSaludo dede de retornar "Hola Nicol"', () => {

    const name = "Nicol";
    const message = getSaludo(name);
    
    expect(message).toBe(`Hola ${name}`)
  });
});
