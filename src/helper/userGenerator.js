const { faker } = require("@faker-js/faker");

const randomUser = () =>{
    return {
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        email : faker.internet.email(),
        password : "Password1"
    }
}

module.exports = {randomUser};