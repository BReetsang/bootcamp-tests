describe('The multilingual greet function' , function() {
    
    it("should be able to greet Tumi in Setswana" , function(){
        assert.equal("Dumela, Tumi", greet("Tumi", "Setswana"));
    });

    it("should be able to greet Diana in English" , function(){
        assert.equal("Hello, Diana", greet("Diana", "English"));
    });

    it("should be able to greet Ronewa in Venda" , function(){
        assert.equal("Ndaa, Ronewa", greet("Ronewa", "Venda"));
    });



        

});