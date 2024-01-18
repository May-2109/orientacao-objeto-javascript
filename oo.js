// json => JavaScript Object Notation
//chave e valor com o objetivo de transferir dados

let invoice = {
    name: "Mayara", 
    age: 31, 
    products: {
        0: ["mouse",  29.90],
        1: ["teclado mecanico", 129.99],
        2: ["monitor", 899,99],
        3: ["TV de 100''",  1000.00]
    } ,
    taxes: "98.90"   
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}` )
    console.log(`A idade é ${invoice.age} ` )
    console.log("--------------------")

    for (let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${index} - ${productName}: R$ ${productPrice}`)
    }
    
    
}