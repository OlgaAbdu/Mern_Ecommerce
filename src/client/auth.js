const superagent = require('superagent');
const baseUrl = "https://mern-ecommerce.sdet.school/api"

/*Adding address to user 
@param {object} opts  - params passed in
@param {string} opts.email = user's email
@param {string} opts.password = user's password

@returns {Promise<object>}
*/
const login = (opts) => {

    if(opts.email === null || opts.password === null){
        throw new Error("login : required param not passed")
    }
    const body = {
        email: opts.email,
        password: opts.password
    }
    return superagent.post(baseUrl+"/auth/login").send(body);


}

/*Registered user 
@param {object} user info - params passed in
@param {boolean} [userInfo.isSubscribed] -false by default
@param {string} userInfo.email = user'semail
@param {string} userInfo.firstName = user'name
@param {string} userInfo.lastName = user's lastName
@param {string} userInfo.password = user's password


@returns {Promise<object>}
*/
const register = (userInfo) => {
    return superagent.post(baseUrl+"/auth/register").send(userInfo);
}
module.exports = {login ,register};