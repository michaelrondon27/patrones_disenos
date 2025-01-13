/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {

    prepare(): void;

}

class BeanHamburger implements Hamburger {
    
    prepare(): void {
        console.log("Preparando una hamburguesa de %cbean", COLORS.orange);
    }

}

class BeefHamburger implements Hamburger {
    
    prepare(): void {
        console.log("Preparando una hamburguesa de %cres", COLORS.brown);
    }

}

class ChickenHamburger implements Hamburger {
    
    prepare(): void {
        console.log("Preparando una hamburguesa de %cpollo", COLORS.yellow);
    }

}

abstract class Restaurant {

    abstract createHamburger(): Hamburger;

    orderHamburger(): void {
        const hamburger: Hamburger = this.createHamburger();
        
        hamburger.prepare();
    }

}

class BeanRestaurant extends Restaurant {

    override createHamburger(): Hamburger {
        return new BeanHamburger();
    }

}

class BeefRestaurant extends Restaurant {

    override createHamburger(): Hamburger {
        return new BeefHamburger();
    }

}

class ChickenRestaurant extends Restaurant {

    override createHamburger(): Hamburger {
        return new ChickenHamburger();
    }

}

function main() {
    let restaurant: Restaurant;

    const burgerType: string | null = prompt("¿Qué tipo de hamburguesa quieres? ( chicken/beef/bean )");

    switch (burgerType) {
        case "bean":
            restaurant = new BeanRestaurant();
            break;

        case "beef":
            restaurant = new BeefRestaurant();
            break;

        case "chicken":
            restaurant = new ChickenRestaurant();
            break;

        default:
            throw new Error("Opción no válida");
    }

    restaurant.orderHamburger();
}

main();
