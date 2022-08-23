function sameWeekday(day1, day2){
	var day1 = new Date(day1);
  	var day2 = new Date(day2);
   	return day1.getDay() == day2.getDay()

 }
console.log(sameWeekday('2016-11-13', '1983-12-23'));