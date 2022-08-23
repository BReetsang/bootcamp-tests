describe('Is From Location Function ' , function() {
    
    it("take 2 parameter, vehReg and location, returns true if vehReg starts with location entered" , function(){
        assert.equal(isFrom('CJ 98912', 'CJ'), true);
    });

    it("should return false when vehReg does not correspond with location entered " , function(){
        assert.equal(isFrom('CJ 98912', 'CY'), false);
    });        

});

