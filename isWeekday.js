function isWeekday(dayOfWeek){
	return (dayOfWeek.startsWith("M"))||
      (dayOfWeek.startsWith("T"))||
      (dayOfWeek.startsWith("W"))||
      (dayOfWeek.startsWith("F"))
}