describe('Capetown Registration numbers Function' , function() {
    
    it("should return true when registration is from Cape Town and starts with CA" , function(){
        assert.equal(isFromCapeTown("CA 123 908"), true);
        
    });

    it("should return false for any other registration" , function(){
        assert.equal(isFromBellville("CJ 123 908"), false);
    });        

});