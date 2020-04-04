var re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
var match = re.exec('2019-01-10');
console.log(match.groups); // → {year: "2019", month: "01", day: "10"}
console.log(match.groups.year); // → 2019
console.log(match.groups.month); // → 01
console.log(match.groups.day); // → 10
//# sourceMappingURL=tryNamedCaptureGroupRegex.js.map