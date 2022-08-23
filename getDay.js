function getDay(dateParam) {
    var date = new Date(dateParam);
    var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekDays[date.getDay()]
}

console.log(getDay('2022-03-11'))