describe('Count Registration Numbers Function' , function() {
    
    it("It should 3 when 3 registration numbers are entered" , function(){       
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);

    });

    it("It returns 1 if one registration number is entered" , function(){
        assert.equal(countRegNumber('CJ 812328'), 1);
    });

    it("It returns 5 when five registration numbers are entered" , function(){
        assert.equal(countRegNumber('CYA 812328, CA 182736,CY 523519,CT 812328, 1234 L'), 5);
    });

});


