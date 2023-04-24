const helper = require("../helper/userGenerator");
const auth = require("../client/auth")
class User{
    constructor(opts){
        const randomUser = helper.randomUser();
      this.email = opts.email || randomUser.email ;  
      this.firstName  = optsfirstName || randomUser.firstName ;  
      this.lastName = opts.lastName || randomUser.lastName ;  
      this.password = opts.password || randomUser.password ;  
    }

     async register (){
      const resp = await auth.register({
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password
      });
      console.log(resp.body);

    }

}
module.exports = {User}