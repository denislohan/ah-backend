var Browser = require('zombie');   
describe("login using social sites",function () {
    this.timeout(100000);
    beforeEach(function () {
        server = require('../../../server/src/index');
    });

    it("should login with facebook",function (done) {

        Browser.visit('http://localhost:3001/api/user/auth/facebook',function (err,brw) {
            if(err){
                throw err;
            }

            brw.fill('email','niwederob10@yahoo.fr');
            brw.fill('pass', '5656565');
            brw.pressButton('login', function (err,brow) {
                    brw.assert.success();
                    done();
                });
        });
    });
    // afterEach(function () {
    //     server.close();
    // });

});