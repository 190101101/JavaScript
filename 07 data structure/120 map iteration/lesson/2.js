const weekdays = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun',
];

const workingHours = {
    [weekdays[2]]: { open: 10, close: 23 },
    [weekdays[4]]: { open: 10, close: 23 },
    [weekdays[5]]: { open: 0, close: 24 },
    [weekdays[6]]: { open: 12, close: 0 },
};

const workingHoursMap = new Map(Object.entries(workingHours));
console.log(workingHoursMap);
