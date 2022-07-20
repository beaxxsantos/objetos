let eu = {
    Nome: "Beatriz",
    Idade:'23',
    Signo:'Peixes'
}
eu.Apelido= 'Bea'

delete eu.Signo
console.log(eu)

let cadastro =[
    {
        nome: 'luana',
        idade: 23,
        telefone:21923456789,
        amigos: ['Lucas', 'Bia', 'Sarah', 'Aline', 'Gabi']
    },

    {
        nome: 'Joana',
        idade:26,
        telefone:21965247863,
        amigos: ['Sophia', 'Mari', 'Vini', 'Vanessa', 'Allan']
    },

    {
        nome:'Bernardo',
        idade:17,
        telefone:21976854236,
        amigos: ['Marcelo', 'João', 'Pedro', 'Marcos', 'Mateus']
    },
    {
        nome: 'João',
        idade: 16,
        telefone:21902165874,
        amigos: ['João', 'Erik', 'Ana', 'Saulo', 'Guilherme']
    },
    {
        nome:'Hugo',
        idade:30,
        telefone:21985631475,
        amigos: ['Bernardo', 'Sergio', 'Reinaldo','Lucas',  'Fernanda']
    }
]

console.log(cadastro[0].amigos[2])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[1])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[4])