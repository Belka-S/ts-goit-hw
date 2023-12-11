/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

// 1
const isWeekend = (day: keyof typeof Day): boolean =>
  day === 'Sun' || day === 'Sat' ? true : false;

isWeekend('Sun');

// 2
const isWorkday = (day: Day): boolean =>
  day !== Day.Sun && day !== Day.Sat ? true : false;

isWorkday(Day.Mon);
