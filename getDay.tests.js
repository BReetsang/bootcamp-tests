describe('Get Day Function', function () {

    it("It find out which day of the week a specific date was and return the day of the week", function () {
        assert.equal(getDay('2010-04-01'), "Thursday");
        
    });

    it("It find out which day of the week a specific date was and return the day of the week", function () {
        assert.equal(getDay('2022-07-02'), "Saturday")
    });
    
});