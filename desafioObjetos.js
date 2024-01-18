class hero{
    constructor(name, age, typePersonagem, typeAtack){
        this.name = name
        this.age = age
        this.typePersonagem = typePersonagem
        this.typeAtack = typeAtack 
        
    }

    typeAtackPerson(){
        if (this.typePersonagem === "mago"){
            this.typeAtack = "magia"
        }else if (this.typePersonagem === "guerreiro"){
            this.typeAtack = "espada"
        }else if (this.typePersonagem === "monge"){
            this.typeAtack = "artes marciais"
        }else if (this.typePersonagem === "ninja"){
            this.typeAtack = "shuriken"
        }

    }

    atack(){    
        console.log(`O ${this.typePersonagem} atacou usado ${this.typeAtack}`)
    }


}



let mago = new hero("Mayara", 21, "mago")
let guerreiro = new hero("Mayara", 21, "guerreiro" )
let monge = new hero("Mayara", 21, "monge" )
let ninja = new hero("Mayara", 21, "ninja" )

ninja.typeAtackPerson()
ninja.atack()
monge.typeAtackPerson()
monge.atack()
guerreiro.typeAtackPerson()
guerreiro.atack()
mago.typeAtackPerson()
mago.atack()