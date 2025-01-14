/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

import { COLORS } from "../helpers/colors.ts";

class Pokemon {
    
    attacks: string[];
    level  : number;
    name   : string;
    type   : string;
  
    constructor(name: string, type: string, level: number, attacks: string[]) {
        this.attacks = attacks;
        this.level = level;
        this.name = name;
        this.type = type;
    }
  
    // Método para clonar el Pokémon
    clone(): Pokemon {
        return new Pokemon(this.name, this.type, this.level, [...this.attacks]);
    }
  
    displayInfo(): void {
        console.log(
            `Nombre: ${this.name}\nTipo: ${this.type}\nNivel: ${
            this.level
            }\nAtaques: ${this.attacks.join(', ')} \n`
        );
    }
}
  
// Tarea:
// 1. Crear un Pokémon base.
// 2. Clonar el Pokémon base y modificar algunos atributos en los clones.
// 3. Llamar a displayInfo en cada Pokémon para mostrar sus detalles.

function main() {
    const basePokemon: Pokemon = new Pokemon("Charmander", "Fuego", 1, ["Llamarada", "Arañazo"]);
    const clone1: Pokemon = basePokemon.clone();

    clone1.name = "Charmeleon";
    clone1.level = 16;
    clone1.attacks.push("Lanzallamas");

    console.log("%cCharmander", COLORS.red);
    basePokemon.displayInfo();

    console.log("%cCharmeleon", COLORS.pink);
    clone1.displayInfo();
}

main();