
/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

import { COLORS } from "../helpers/colors.ts";

/**
 * !Instrucciones:
 	1.Completen las Clases de Productos:
        • ElectricCar debe implementar Vehicle y mostrar el mensaje "Ensamblando un auto eléctrico".
        • debe implementar Vehicle y mostrar el mensaje "Ensamblando un auto de combustión".
        • debe implementar Engine y mostrar el mensaje "Arrancando motor eléctrico".
        • debe implementar Engine y mostrar el mensaje "Arrancando motor de combustión".

	2.	Completen las Clases de Fábricas:
        • debe crear un ElectricCar y un ElectricEngine.
        • debe crear un GasCar y un GasEngine.

	3. Prueben el Código:
	    •	Ejecuten el código para asegurarse de que cada fábrica produce el tipo correcto de vehículo y motor.
 */

// 1. Interfaces de Vehicle y Engine
interface Vehicle {
    assemble(): void;
}
  
interface Engine {
    start(): void;
}
  
// 2. Clases Concretas de Productos  
class ElectricCar implements Vehicle {
    
    assemble(): void {
        console.log("Ensamblando un auto %celéctrico", COLORS.blue);
    }

}
  
class GasCar implements Vehicle {
    
    assemble(): void {
        console.log("Ensamblando un auto de %ccombustión", COLORS.brown);
    }

}
  
class ElectricEngine implements Engine {
    
    start(): void {
      console.log("Arrancando motor %celéctrico", COLORS.blue);
    }

}
  
class GasEngine implements Engine {
    
    start(): void {
        console.log("Arrancando motor de %ccombustión", COLORS.brown)
    }

}
  
// 3. Interfaz de la Fábrica Abstracta  
interface VehicleFactory {

    createVehicle(): Vehicle;
    createEngine(): Engine;

}
  
// 4. Clases Concretas de Fábricas  
class ElectricVehicleFactory implements VehicleFactory {

    createEngine(): Engine {
        return new ElectricEngine()
    }

    createVehicle(): Vehicle {
        return new ElectricCar();
    }

}
  
class GasVehicleFactory implements VehicleFactory {
    
    createEngine(): Engine {
        return new GasEngine()
    }

    createVehicle(): Vehicle {
        return new GasCar();
    }

}
  
// 5. Código Cliente  
function main(factory: VehicleFactory) {
    const vehicle = factory.createVehicle();
    const engine = factory.createEngine();
  
    vehicle.assemble();
    engine.start();
}
  
// Pruebas
console.log('Creando vehículo eléctrico:');
main(new ElectricVehicleFactory());
  
console.log('\nCreando vehículo de combustión:');
main(new GasVehicleFactory());
