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

class Computer {

    public cpu    : string = "cpu - not define";
    public gpu?   : string;
    public ram    : string = "ram - not define";
    public storage: string = "storage - not define";

    displayConfiguration(): void {
        console.log(`Configuración de la computadora
            CPU: ${ this.cpu }
            RAM: ${ this.cpu }
            Almacenamiento: ${ this.storage }
            GPU: ${ this.gpu }
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