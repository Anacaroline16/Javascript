const apartamento={
    quartos:2,
    tipo: "Apartamento",
    endereco: 'Avenida Principal, 456 - Centro',
    andar:7,
}
console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}º andar da ${apartamento.endereco}`);

const produtoEmbalado={
    nome:'Laptop HP',
    categoria:'Eletrônicos',
    peso:1.5,
    preco:'3500.00'
}
console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria},pesando ${produtoEmbalado.peso},está à venda por R$${produtoEmbalado.preco}`);

class Imovel  {
    quartos;
    tipo;
    endereco;
    exibirInformacoes(){
        return `${this.tipo} com ${this.quartos} quartos, no endereço:${this.endereco}`
    }

}
const imovel =new Imovel();
imovel.quartos=3;
imovel.tipo= 'casa';
imovel.endereco='Rua da Amizade, 789 - Bairro Alegre'
console.log(imovel.exibirInformacoes());