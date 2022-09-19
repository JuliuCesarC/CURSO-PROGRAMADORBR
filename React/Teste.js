class Ferramenta {
    constructor(name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
    // Dentro de uma classe podemos adicionar métodos, e caso esta classe seja estendida à outra, esses métodos serão herdados.
    showItem() {
        console.log(
            `A ferramenta: ${
                this.name
            } da marca ${this.brand.toUpperCase()}, está sendo evendida à vista por ${this.price.toLocaleString(
                "pt-BR",
                { style: "currency", currency: "BRL" }
            )}`
        );
    }
}

class Parcelado extends Ferramenta {
    constructor(name, brand, price, instalment) {
        super(name, brand, price);
        this.instalment = instalment;
    }
    // Podemos sobrescrever os métodos herdados da classe pai adicionando um novo método como o mesmo nome.
    showItem() {
        let juros = this.instalment / 100 + 1;
        let newPrice = (this.price * juros) / this.instalment;
        console.log(
            `A ferramenta: ${
                this.name
            } da marca ${this.brand.toUpperCase()}, está sendo vendida por ${(
                this.price * juros
            ).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            })} em ${this.instalment} X ${newPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            })}`
        );
    }
}

let Serra_Circular = new Ferramenta("Serra Circular", "Bosh", 615);
Serra_Circular.showItem();
let Serra_Marmore = new Parcelado("Serra Marmore", "Makita", 390, 2);
Serra_Marmore.showItem();
