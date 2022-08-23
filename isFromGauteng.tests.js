describe('Gauteng Registration numbers Function' , function() {
    
    it("should return true when registration is from Gauteng and ends with GP" , function(){
        assert.equal(isFromGauteng("DR 45 LR GP"), true);
        
    });

    it("should return false for any other registration" , function(){
        assert.equal(isFromGauteng("CJ 123 908"), false);
    });        

});