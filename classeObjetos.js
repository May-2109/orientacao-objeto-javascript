// classe => padroniza o formato de uma estrutura de dados
// objeto => mantem a padronização da classe e implementa seus valores das propriedades, 
// além de termos métodos inteligentes e funções próprias 

class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    assar(){
        console.log("Bolo assando de " + this.saborDaMassa)
    }
}

let boloFesta = new formaDeBolo("chocolate", "nutella")
let boloPremiun = new formaDeBolo("baunilha", "coco")

boloFesta.saborDaMassa = "floresta negra"

boloFesta.escrever()


boloPremiun.escrever()
boloPremiun.assar()