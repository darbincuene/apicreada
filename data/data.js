const { faker } = require('@faker-js/faker');
const crearproductos =()=>{
    return{
        id:faker.string.uuid(),
        nombre:faker.commerce.productName(),
        descripcion:faker.commerce.productDescription(),
        precio:faker.commerce.price(),
        categoria: faker.commerce.department,

    }
}

const crearvehiculos=()=>{
    return{
        id:faker.string.uuid(),
        nombre:faker.vehicle.vehicle(),
        modelo:faker.vehicle.model(),
        color:faker.vehicle.color(),
        tipo:faker.vehicle.type(),

    }
}

const crearpersonas =()=>{
    return{
        nombrecompleto:faker.person.fullName(),
        genero:faker.person.sex(),
        areatrabajo:faker.person.jobTitle(),
        descripciontrabajo:faker.person.jobDescriptor(),
        signozodiacal:faker.person.zodiacSign(),


    }
}
const productos = faker.helpers.multiple(crearproductos,{
    count: 5,
})

const vehiculos = faker.helpers.multiple(crearvehiculos,{
    count: 5,
})

const personas = faker.helpers.multiple(crearpersonas,{
    count: 5,
})
module.exports = {
    productos,
    vehiculos,
    personas,
}