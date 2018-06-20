var topic = [
    "快樂大本營",
    "天天向上",
    "高能少年團",
    "真正男子漢",
    "嚮往的生活",
];

var startDate = new Date();

function setMonthAndDay(startMonth, startday)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startday);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(5,1);
