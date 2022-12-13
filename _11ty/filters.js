const colophon = (value) => {
  const now = new Date();
  return `${now.getFullYear() > value ? `${value} - ${now.getFullYear()}` : value}`;
}

const humanReadableNumber = (value) => parseInt(value, 10).toLocaleString('en');

const humanReadableDate = (value) => {
  const event = value ? new Date(value) : new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return event.toLocaleDateString('en-GB', options);
  // expected output: Thursday, December 20, 2012 (varies according to default locale)
};

const relPath = (value) => value.replace(/^.*\/\/[^\/]+/, '');
const path = (value) => {
  if (!value) return;
  const arr = Array.from(value.replace(/\/\s*$/, '').split('/'));
  let str = '';
  for (let i = 0; i < arr.length; i += 1) {
    const prefix = (i === 0) ? '' : '../';
    str += prefix;
  }
  return str;
};

const dateIsOlderThanOneYear = (d) => {
  const postDate = new Date(d);
  const now = new Date();
  const diff = now - postDate;
  const secondsInYear = (1000 * 60 * 60 * 24 * 365);
  return diff / secondsInYear >= 1;
};

const wordCount = (x) => x.toString().replace( /(<([^>]+)>)/ig, '').match(/\w+/gm).length;

const readingTime = (words = 1) => {
  const wpm = 225;
  const minutes = words / wpm;
  var SECOND_MS = 1000;
  var MINUTE_MS = 60 * SECOND_MS;
  var HOUR_MS = 60 * MINUTE_MS;
  var DAY_MS = 24 * HOUR_MS;
  var WEEK_MS = 7 * DAY_MS;
  var MONTH_MS = 30 * DAY_MS;
  let ms = minutes * MINUTE_MS;

  const lookup = ["month", "week", "day", "hour", "minute", "second"];
  const values = [];
  values.push(ms / MONTH_MS);
  ms %= MONTH_MS;
  values.push(ms / WEEK_MS);
  ms %= WEEK_MS;
  values.push(ms / DAY_MS);
  ms %= DAY_MS;
  values.push(ms / HOUR_MS);
  ms %= HOUR_MS;
  values.push(ms / MINUTE_MS);
  ms %= MINUTE_MS;
  values.push(ms / SECOND_MS);
  ms %= SECOND_MS;

  const pretty = [];
  for (let i = 0; i < values.length; i++) {
    const val = Math.round(values[i]);
    if (val <= 0) continue;

    pretty.push(`${val} ${lookup[i]}${val !== 1 ? 's' : ''}`);
    break;
  }
  return pretty.join(', ');
};

module.exports = {
  colophon,
  dateIsOlderThanOneYear,
  humanReadableDate,
  humanReadableNumber,
  path,
  readingTime,
  relPath,
  wordCount,
};
