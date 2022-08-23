describe('Limpopo Registration numbers Function' , function() {
    
    it("should return true when registration is from Limpopo and ends with L" , function(){
        assert.equal(isFromLimpopo("KTR 990 L"), true);
        
    });

    it("should return false for any other registration" , function(){
        assert.equal(isFromLimpopo("W 990 N"), false);
    });        

});