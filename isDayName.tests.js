describe('Is Day of a Week Function' , function() {
    
    it("It returns true if a day of week is entered, it should end with day" , function(){
        assert.equal(isDayName('Saturday'), true);
    });

    it("It returns false if a day of the week is not entered" , function(){
        assert.equal(isDayName('January'), false); 
    });

    it("It returns true if a day of week is entered, it should end with day" , function(){
        assert.equal(isDayName('Wednesday'), true);
    });

   
});