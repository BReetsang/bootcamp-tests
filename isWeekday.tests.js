describe('Is Week Day Function', function () {

    it("It returns true if a week day is entered", function () {
        assert.equal(isWeekday('Monday'), true);
    });

    it("It returns true if a week day is entered", function () {
        assert.equal(isWeekday('Wednesday'), true);
    });

    it("It returns true if a week day is entered", function () {
        assert.equal(isWeekday('Friday'), true);
    });

    it("It returns false if a day if weekend day is entered, esp. if it starts with S", function () {
        assert.equal(isWeekday('Saturday'), false);
    });

    it("It returns false if a day if weekend day is entered, esp. if it starts with S", function () {
        assert.equal(isWeekday('Sunday'), false);
    });

});