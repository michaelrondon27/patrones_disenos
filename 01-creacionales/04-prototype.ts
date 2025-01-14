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

class Document {

    public author: string;
    public title : string;
    
    private content: string;
    
    constructor(title: string, content: string, author: string) {
        this.author = author;
        this.content = content;
        this.title = title;
    }

    clone(): Document {
        return new Document(this.title, this.content, this.author);
    }

    displayInfo(): void {
        console.log(`
            Title: ${ this.title }
            Content: ${ this.content }
            Author: ${ this.author }
        `);
    }

}

function main() {
    const document1: Document = new Document('Cotización', '500 dólares', 'Michael');
    
    console.log({ document1 });
    document1.displayInfo();

    const document2: Document = document1.clone();
    document2.title = "Nueva Cotización";

    console.log({ document2 });
    document2.displayInfo();
}

main();
