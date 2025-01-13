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
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Drink {

    pour(): void;

}

interface Hamburger {

    prepare(): void;

}

interface RestaurantFactory {

    createDrink(): Drink;
    
    createHamburger(): Hamburger;

}

class BeefHamburger implements Hamburger {

    prepare(): void {
        console.log("Preparando hamburguesa de %cRes", COLORS.red);
    }

}

class ChickenHamburger implements Hamburger {

    prepare(): void {
        console.log("Preparando hamburguesa de %cPollo", COLORS.yellow);
    }

}

class Soda implements Drink {

    pour(): void {
        console.log("Sirviendo un vaso de %cgaseosa", COLORS.pink)
    }

}

class Water implements Drink {

    pour(): void {
        console.log("Sirviendo un vaso de %cagua", COLORS.blue)
    }

}

class FastFoodRestaurantFactory implements RestaurantFactory {

    createDrink(): Drink {
        return new Soda();
    }

    createHamburger(): Hamburger {
        return new BeefHamburger();
    }

}

class HealthyRestaurantFactory implements RestaurantFactory {

    createDrink(): Drink {
        return new Water();
    }

    createHamburger(): Hamburger {
        return new ChickenHamburger();
    }

}

function main(factory: RestaurantFactory) {
    const drink: Drink = factory.createDrink();
    const hamburger: Hamburger = factory.createHamburger();

    hamburger.prepare();
    drink.pour();
}

console.log("\n%cPedido del menú regular:", COLORS.green);

main(new FastFoodRestaurantFactory());

console.log("\n%cPedido del menú saludable:", COLORS.green);

main(new HealthyRestaurantFactory());
