const chai = require('chai');
const superagent = require('superagent');
const assert = chai.assert;

const baseUrl = "https://mern-ecommerce.sdet.school/api"
describe('Test address endpoints', () => {
    let token;
    beforeEach(async () => {
      // Login as  Olsen  X
      const reqBody = {
        email: 'Olsen.X@gmail.com',
        password: 'Password1'
      };
      try {
        const response = await superagent.post(baseUrl + "/auth/login").send(reqBody);
        token = response.body.token;
      } catch (error) {
        console.error(error.message);
      }
    });
    it('shoul run test' ,() =>{
        console.log(token);
    })
});
describe('Test subscription to newsletters', () => {
    const baseUri = "https://mern-ecommerce.sdet.school/api/newsletter/subscribe";
    const requestBody = {
      email: "gigihadid@gmail.com"
    };
  
    it('should run test', async () => {
      const response = await superagent.post(baseUri).send(requestBody);
      const responseBody = {
        "success": true,
        "message": "You have successfully subscribed to the newsletter"
      };
      assert.deepEqual(response.body, responseBody);
    });
  });
  

