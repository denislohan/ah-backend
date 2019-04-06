var chai = require('chai');    
var assert = chai.assert;    
var server;    
var Browser = require('zombie');   
describe("login using social sites",function () {

    this.timeout(40000);


    beforeEach(function () {
        server = require('../../index');

        // browser = new Browser({ site: 'http://localhost:3000' });



    });


    it("should login with facebook",function (done) {

        Browser.visit('http://localhost/api/user/auth/facebook',function (err,brw) {

            if(err){
                throw err;
            }

            brw.fill('phone','25078271420').fill('pass', 'Vipviplohan1')
                .pressButton('login', function (err,brow) {
                    brw.assert.success();
                    done();
                });

        });



    });


    afterEach(function () {
        server.close();
    });

});