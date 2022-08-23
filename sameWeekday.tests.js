describe('Same Week Day Function', function () {

    it("It takes in two dates and check if both dates have the same weekday and returns true", function () {
        assert.equal(sameWeekday('2016-11-19', '2016-11-26'), true)

    });
    it("It takes in two dates and check if both dates have the same weekday and returns false if not same weekday", function () {
        assert.equal(sameWeekday('2016-11-19', '2016-11-28'), false);

    });

});