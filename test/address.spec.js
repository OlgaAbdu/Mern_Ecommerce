const chai = require('chai');
const superagent = require('superagent');
const assert = chai.assert;
const casual = require('casual');
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);
const expect = chai.expect;

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
  it('should run test', () => {
    console.log(token);
  })
});

describe('Test subscription to newsletters', () => {
  const baseUri = "https://mern-ecommerce.sdet.school/api/newsletter/subscribe";
  const requestBody = {
    email: "gigihadid@gmail.com"
  };

  it('should subscribe user to newsletters', async () => {
    const response = await superagent.post(baseUri).send(requestBody);
    const responseBody = {
      "success": true,
      "message": "You have successfully subscribed to the newsletter"
    };
    assert.deepEqual(response.body, responseBody);
  });

  it("should add adress to user", async () => {
    const { street, city, state } = casual;
    const zip = casual.zip(5);
    const addressOpt = {
      isDefault: true,
      address: street,
      city: city,
      state: state,
      country: "US",
      zipCode: zip
    }
    let response
    try {
      response = await superagent.post(baseUrl+ "/address/add")
        .set({
          Autorization: token
        })
        .send(addressOpt)
    } catch (err) {
      console.log(err.message)
    }
    expect(response.body).to.containSubset({
      success: true,
      message: 'Adress has been added successfully!',
      address: {
        isDefault: true,
        address: street,
        city: city,
        state: state,
        country: 'US',
        zipCode: zip,
        user: '6434b87a3ea9a80035112c5f',
        _v: 0
      }
    })
  })
});


