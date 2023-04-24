const superagent = require('superagent');
const baseUrl = "https://mern-ecommerce.sdet.school/api"

/*Adding address to user 
@param {object} opts  - params passed in
@param {string} opts.token - user's token 
@param {object} opts.address = user's address
@returns {Promise<object>}
*/
const addAddress = (opts) => {

    const authHeader = {
       Autorization: opts.token 
    }

    if(opts.token === null ){
        throw new Error("addAddres : token required parameters")
    }
    return superagent.post(baseUrl+"/address/add").set(authHeader).send(opts.address);


}
module.exports = {addAddress};