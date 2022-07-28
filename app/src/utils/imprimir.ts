import { Imprimivel } from "./imprivel.js";

export function imprimir(...objetos: Imprimivel[]): void {
    for (let objeto of objetos) {
        console.log(objeto);
    }
};