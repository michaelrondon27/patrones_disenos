/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";

class Computer {

    public cpu    : string = "cpu - not define";
    public gpu?   : string;
    public ram    : string = "ram - not define";
    public storage: string = "storage - not define";

    displayConfiguration(): void {
        console.log(`Configuración de la computadora
            CPU: ${ this.cpu }
            RAM: ${ this.ram }
            Almacenamiento: ${ this.storage }
            GPU: ${ this.gpu ?? 'no tiene GPU' }
        `);
    }

}

class ComputerBuilder {

    private computer: Computer;
    
    constructor() {
        this.computer = new Computer();
    }

    build(): Computer {
        return this.computer;
    }

    setCpu(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;

        return this;
    }

    setGpu(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;

        return this;
    }

    setRam(ram: string): ComputerBuilder {
        this.computer.ram = ram;

        return this;
    }

    setStorage(storage: string): ComputerBuilder {
        this.computer.storage = storage;

        return this;
    }

}

function main() {

    const basicComputer: Computer = new ComputerBuilder()
        .setCpu("Intel Core 2 Duo")
        .setRam("4GB")
        .setStorage("256GB")
        .build();

    console.log('%cComputadora básica:', COLORS.blue);
    basicComputer.displayConfiguration();

    const gamingComputer: Computer = new ComputerBuilder()
        .setCpu("Intel i7")
        .setRam("16GB")
        .setStorage("1TB SSD")
        .setGpu("Nvidia RTX 4070")
        .build();
    
    console.log('%c\nComputadora gamer:\n', COLORS.cyan);
    gamingComputer.displayConfiguration();

}

main();
