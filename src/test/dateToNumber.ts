export class DateToNumber {

    public getNowDateTimeToNumber() {

        const now = new Date();

        return Math.floor(now.getTime()/1000);
    }

    public get30DayLaterNowDateTime() {

        const now = new Date();

        now.setDate(now.getDate() + 30);

        return Math.floor(now.getTime()/1000)
    }

}

const dateToNumber = new DateToNumber();

console.log(dateToNumber.getNowDateTimeToNumber());
console.log(dateToNumber.get30DayLaterNowDateTime());


1678351261
1678348621