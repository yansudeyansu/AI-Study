const moment = require('moment');

// 現在の日時を表示
console.log("Current date and time:", moment().format('YYYY-MM-DD HH:mm:ss'));

// 1週間後の日付を表示
console.log("One week from now:", moment().add(1, 'weeks').format('YYYY-MM-DD'));

// 現在の月の最終日を表示
console.log("Last day of this month:", moment().endOf('month').format('YYYY-MM-DD'));