class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome.toLowerCase()
        this.idade = parseInt(idade)
        this.tipo = tipo.toLowerCase()
    }
    
    verificarHeroi(){
        if (this.idade <= 10){
            console.log(`O Heroi ${this.nome} é muito novo para ser um Heroi, por isso ele não pode atacar`)
        }
        else if (this.idade < 18){
            console.log(`O Heroi ${this.nome} é mais fraco que os outro por causa da falta de experiencia`)
        }
        else if(this.idade > 75){
            console.log(`O Heroi ${this.nome} é um Ancião, por isso é mais forte do que os outros`)
        }
        else{
            console.log(`O Heroi ${this.nome} é um Heroi pleno, não tem mais o que dizer`)
        }

        if (this.tipo != 'guerreiro' && this.tipo != 'mago' && this.tipo != 'monge' && this.tipo != 'ninja'){
            console.log('A classe selecionada pelo seu heroi não existe')
        }
        else{
            console.log('A classe do seu heroi é ' + this.tipo)
        }
    }

    atacar(){
        let ataque = ''

        if (this.tipo != 'guerreiro' && this.tipo != 'mago' && this.tipo != 'monge' && this.tipo != 'ninja'){
            console.log('A classe selecionada pelo heroi ' + this.nome + ' não existe')
        }
        else{
            switch(this.tipo){
                case 'guerreiro':
                    ataque = 'sua Espada'
                    break
                case 'mago':
                    ataque = 'Magia'
                    break
                case 'monge':
                    ataque = 'Artes Marciais'
                    break
                case 'ninja':
                    ataque = 'uma Shuriken'
                    break
            }

            if (this.idade <= 10){
                console.log(`O ${this.tipo} ${this.nome} não atacou pois tem apenas ${this.idade} anos`)
            }
            else if (this.idade < 18){
                console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}, porém com um debuff de 50%`)
            }
            else if(this.idade > 75){
                console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}, porém com um bonus de 50%`)
            }
            else{
                console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
            }
        }
    }
}

let oHeroi = new heroi('David', 19, 'mago')
let novoHeroi = new heroi('Gabriel', 14, 'guerreiro')
let novissimoHeroi = new heroi('Enzo', 8, 'ninja')
let heroiAnciao = new heroi('Merlim', 80, 'mago')
let falsoHeroi = new heroi('Zeca Urubu', 30, 'barbaro')

oHeroi.verificarHeroi()
console.log('--------')
novoHeroi.verificarHeroi()
console.log('--------')
novissimoHeroi.verificarHeroi()
console.log('--------')
heroiAnciao.verificarHeroi()
console.log('--------')
falsoHeroi.verificarHeroi()

console.log('\n\n')

oHeroi.atacar()
console.log('--------')
novoHeroi.atacar()
console.log('--------')
novissimoHeroi.atacar()
console.log('--------')
heroiAnciao.atacar()
console.log('--------')
falsoHeroi.atacar()