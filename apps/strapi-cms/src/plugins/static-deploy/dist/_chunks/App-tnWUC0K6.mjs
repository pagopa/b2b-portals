import { jsxs, jsx } from "react/jsx-runtime";
import { useFetchClient, useRBAC, useNotification, Page } from "@strapi/strapi/admin";
import { useLocation, Routes, Route } from "react-router-dom";
import { Main, Flex, Typography, Button, Dialog, TextInput, Table, Thead, Tr, Th, Tbody, Td, Badge, IconButton, Link } from "@strapi/design-system";
import { ArrowClockwise, Expand, Play, ExternalLink, Plus, Trash } from "@strapi/icons";
import { useState, useEffect } from "react";
import { p as pluginPermissions, P as PLUGIN_ID } from "./index-34Nl3y6u.mjs";
const millisecondsInWeek = 6048e5;
const millisecondsInDay = 864e5;
const constructFromSymbol = Symbol.for("constructDateFrom");
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}
let defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function startOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function startOfISOWeek(date, options) {
  return startOfWeek(date, { ...options, weekStartsOn: 1 });
}
function getISOWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}
function differenceInMilliseconds(laterDate, earlierDate) {
  return +toDate(laterDate) - +toDate(earlierDate);
}
function startOfYear(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
const formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
const formatRelative$1 = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}
const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
const localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
const enUS = {
  code: "en-US",
  formatDistance,
  formatLong,
  formatRelative: formatRelative$1,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function getDayOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}
function getISOWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}
function getWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfWeekYear(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}
function getWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}
const lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
const formatters = {
  // Era
  G: function(date, token, localize2) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, { width: "abbreviated" });
      case "GGGGG":
        return localize2.era(era, { width: "narrow" });
      case "GGGG":
      default:
        return localize2.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize2) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize2, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      case "Mo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize2.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize2.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize2, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize2) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize2) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, { unit: "day" });
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize2) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize2) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize2) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize2) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros(+date, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
const dateLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "P":
      return formatLong2.date({ width: "short" });
    case "PP":
      return formatLong2.date({ width: "medium" });
    case "PPP":
      return formatLong2.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong2.date({ width: "full" });
  }
};
const timeLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "p":
      return formatLong2.time({ width: "short" });
    case "pp":
      return formatLong2.time({ width: "medium" });
    case "ppp":
      return formatLong2.time({ width: "long" });
    case "pppp":
    default:
      return formatLong2.time({ width: "full" });
  }
};
const dateTimeLongFormatter = (pattern, formatLong2) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format2, input) {
  const _message = message(token, format2, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format2, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format2}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
  const defaultOptions2 = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions2.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const originalDate = toDate(date, options?.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}
function formatRelative(date, baseDate, options) {
  const [date_, baseDate_] = normalizeDates(options?.in, date, baseDate);
  const defaultOptions2 = getDefaultOptions();
  const locale = defaultOptions2.locale ?? enUS;
  const weekStartsOn = defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const diff = differenceInCalendarDays(date_, baseDate_);
  if (isNaN(diff)) {
    throw new RangeError("Invalid time value");
  }
  let token;
  if (diff < -6) {
    token = "other";
  } else if (diff < -1) {
    token = "lastWeek";
  } else if (diff < 0) {
    token = "yesterday";
  } else if (diff < 1) {
    token = "today";
  } else if (diff < 2) {
    token = "tomorrow";
  } else if (diff < 7) {
    token = "nextWeek";
  } else {
    token = "other";
  }
  const formatStr = locale.formatRelative(token, date_, baseDate_, {
    locale,
    weekStartsOn
  });
  return format(date_, formatStr, { locale, weekStartsOn });
}
const HomePage = () => {
  const { get, post } = useFetchClient();
  const [loadingTriggerButton, setLoadingTriggerButton] = useState(false);
  const [config, setConfig] = useState(null);
  const [unstagedUpdates, setUnstagedUpdates] = useState(true);
  const [history, setHistory] = useState([]);
  const [prodDeploymentDescription, setProdDeploymentDescription] = useState("");
  const [loadingHistory, setLoadingHistory] = useState("none");
  const [showTriggerConfirmationPopup, setShowTriggerConfirmationPopup] = useState(false);
  const {
    allowedActions: { canTrigger }
  } = useRBAC(pluginPermissions.trigger);
  const { toggleNotification } = useNotification();
  async function getConfig() {
    try {
      const { data } = await get(`/${PLUGIN_ID}/config`);
      setConfig(data);
    } catch (error) {
      console.error(error);
      setConfig(null);
    }
  }
  async function sendEmailNotification(event) {
    try {
      await post(`/${PLUGIN_ID}/notify`, { event });
    } catch (error) {
      console.error(error);
    }
  }
  async function getStagingStatus() {
    try {
      const { data } = await get(`/${PLUGIN_ID}/staging-status`);
      return data;
    } catch (error) {
      console.error(error);
      setUnstagedUpdates(true);
      return null;
    }
  }
  async function setStagingStatus(newDocumentData) {
    try {
      await post(`/${PLUGIN_ID}/staging-status`, newDocumentData);
    } catch (error) {
      console.error(error);
      setUnstagedUpdates(true);
    }
  }
  async function verifyStagingStatus(data) {
    if (config?.staging) {
      const lastWorkflow = data.workflow_runs[0];
      const currentStagingStatus = await getStagingStatus();
      if (currentStagingStatus && lastWorkflow) {
        const lastWorkflowPathArray = lastWorkflow.path.split("/");
        const lastWorkflowFileName = lastWorkflowPathArray[lastWorkflowPathArray.length - 1];
        const lastWorkflowCreationDate = new Date(lastWorkflow.created_at);
        const lastUpdateDate = new Date(currentStagingStatus.createdAt);
        if (lastWorkflowFileName === config.staging.workflowID) {
          if (!lastWorkflow.conclusion) {
            setUnstagedUpdates(true);
            return;
          }
          if (lastWorkflow.conclusion !== "success") {
            setUnstagedUpdates(true);
            setStagingStatus({ unstagedUpdates: true });
            return;
          } else {
            if (!currentStagingStatus.unstagedUpdates) {
              setUnstagedUpdates(false);
              return;
            }
            if (lastUpdateDate > lastWorkflowCreationDate) {
              setUnstagedUpdates(true);
            } else {
              setUnstagedUpdates(false);
              setStagingStatus({ unstagedUpdates: false });
            }
          }
        } else {
          if (!lastWorkflow.conclusion) {
            setUnstagedUpdates(currentStagingStatus.unstagedUpdates);
            return;
          }
          if (lastWorkflow.conclusion !== "success") {
            if (currentStagingStatus.unstagedUpdates) {
              setUnstagedUpdates(true);
              return;
            }
            const lastStagingWorkflow = data.workflow_runs.find((workflow) => {
              const workflowPathArray = workflow.path.split("/");
              const workflowFileName = workflowPathArray[workflowPathArray.length - 1];
              return workflowFileName === config.staging.workflowID;
            });
            if (!lastStagingWorkflow) {
              setUnstagedUpdates(true);
              setStagingStatus({ unstagedUpdates: true });
              return;
            }
            if (!lastStagingWorkflow.conclusion) {
              setUnstagedUpdates(true);
              setStagingStatus({ unstagedUpdates: true });
              return;
            }
            if (lastStagingWorkflow.conclusion !== "success") {
              setUnstagedUpdates(true);
              setStagingStatus({ unstagedUpdates: true });
            } else {
              setUnstagedUpdates(false);
            }
          } else {
            setUnstagedUpdates(currentStagingStatus.unstagedUpdates);
          }
        }
      }
    }
  }
  async function fetchHistory() {
    setLoadingHistory("loading");
    try {
      const { data } = await get(`/${PLUGIN_ID}/history`);
      await verifyStagingStatus(data);
      setHistory(data.workflow_runs.slice(0, 10));
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      } else {
        console.error(error);
        toggleNotification({
          type: "danger",
          title: "Impossibile recuperare storico dei deploy!"
        });
      }
    } finally {
      setLoadingHistory("none");
    }
  }
  async function triggerGithubActions() {
    setLoadingTriggerButton(true);
    try {
      if (config?.staging && unstagedUpdates) {
        await post(`/${PLUGIN_ID}/trigger-staging`);
        await sendEmailNotification("staging-trigger");
      } else {
        const currentStagingStatus = await getStagingStatus();
        if (currentStagingStatus === null) {
          setUnstagedUpdates(true);
          toggleNotification({
            type: "danger",
            title: "Lancio del workflow annullato!",
            message: "Impossibile recuperare lo staging status corrente",
            timeout: 5e3
          });
          return;
        }
        if (currentStagingStatus.unstagedUpdates === true) {
          setUnstagedUpdates(true);
          toggleNotification({
            type: "danger",
            title: "Lancio del workflow annullato!",
            message: "Sono state trovate nuove modifiche non deployate in staging!",
            timeout: 5e3
          });
          return;
        }
        await post(`/${PLUGIN_ID}/trigger`, {
          description: prodDeploymentDescription
        });
        await sendEmailNotification(
          config?.staging ? "prod-trigger" : "trigger"
        );
      }
      toggleNotification({
        type: "success",
        title: "Workflow lanciato con successo!",
        message: "Lo storico dei deploy sarà ricaricato tra 5 secondi",
        timeout: 5e3
      });
      setLoadingHistory("planned");
      setTimeout(fetchHistory, 5e3);
    } catch (error) {
      console.error(error);
      const { status, name } = error.response.data.error;
      if (status === 422 && name === "UnprocessableEntityError") {
        toggleNotification({
          type: "danger",
          title: "Error 422: Unprocessable Entity"
        });
        return;
      }
      if (status === 403 && name === "PolicyError") {
        toggleNotification({
          type: "danger",
          title: "Error 403: Permission Denied"
        });
        return;
      }
      toggleNotification({
        type: "danger",
        title: "Impossibile lanciare il workflow!",
        message: "Errore sconosciuto. Controllare la console per maggiori dettagli."
      });
    } finally {
      setLoadingTriggerButton(false);
    }
  }
  function getWorkflowName() {
    if (config?.staging && unstagedUpdates) {
      const stagingHistory = history.filter((workflow) => {
        const workflowPathArray = workflow.path.split("/");
        const workflowFileName = workflowPathArray[workflowPathArray.length - 1];
        return workflowFileName === config.staging.workflowID;
      });
      return `"${stagingHistory[0]?.name ?? config.staging.workflowID}"`;
    } else {
      const prodHistory = history.filter((workflow) => {
        const workflowPathArray = workflow.path.split("/");
        const workflowFileName = workflowPathArray[workflowPathArray.length - 1];
        return workflowFileName === config?.workflowID;
      });
      return `"${prodHistory[0]?.name ?? config?.workflowID ?? ""}"`;
    }
  }
  useEffect(() => {
    getConfig();
  }, []);
  useEffect(() => {
    if (config) {
      fetchHistory();
    }
  }, [config]);
  useEffect(() => {
    if (!showTriggerConfirmationPopup) {
      setProdDeploymentDescription("");
    }
  }, [showTriggerConfirmationPopup]);
  const handleOnChangeDescription = (e) => {
    setProdDeploymentDescription((prev) => {
      const validation = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ._-]*$/;
      const description = e.target.value;
      if (!validation.test(description)) {
        e.preventDefault();
        e.target.value = prev;
        return prev;
      }
      return description;
    });
  };
  return /* @__PURE__ */ jsxs(
    Main,
    {
      style: {
        padding: "0 5.4rem 3.2rem 5.4rem"
      },
      children: [
        /* @__PURE__ */ jsxs(
          Flex,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "4rem",
            children: [
              /* @__PURE__ */ jsx(Typography, { variant: "beta", children: "Deployments" }),
              /* @__PURE__ */ jsxs(Flex, { direction: "row", alignItems: "center", gap: "1rem", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    onClick: fetchHistory,
                    loading: loadingHistory !== "none",
                    disabled: loadingTriggerButton,
                    style: { height: "4.2rem" },
                    variant: "secondary",
                    startIcon: /* @__PURE__ */ jsx(ArrowClockwise, {}),
                    children: /* @__PURE__ */ jsx(Typography, { fontSize: "1.6rem", children: "Ricarica Cronologia" })
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Dialog.Root,
                  {
                    open: showTriggerConfirmationPopup,
                    onOpenChange: setShowTriggerConfirmationPopup,
                    children: [
                      /* @__PURE__ */ jsx(Dialog.Trigger, { children: /* @__PURE__ */ jsxs(Flex, { children: [
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            loading: loadingTriggerButton,
                            disabled: loadingHistory !== "none" || !canTrigger || !unstagedUpdates,
                            style: {
                              height: "4.2rem",
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0
                            },
                            variant: "default",
                            startIcon: /* @__PURE__ */ jsx(Expand, {}),
                            children: /* @__PURE__ */ jsx(Typography, { fontSize: "1.6rem", children: "Staging" })
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            loading: loadingTriggerButton,
                            disabled: loadingHistory !== "none" || !canTrigger || unstagedUpdates,
                            style: {
                              height: "4.2rem",
                              borderTopLeftRadius: 0,
                              borderBottomLeftRadius: 0
                            },
                            variant: "default",
                            startIcon: /* @__PURE__ */ jsx(Play, {}),
                            title: loadingHistory !== "none" || !canTrigger || unstagedUpdates ? "Il deploy in produzione sarà disponibile a seguito di un deploy in staging terminato con successo" : "",
                            children: /* @__PURE__ */ jsx(Typography, { fontSize: "1.6rem", children: "Produzione" })
                          }
                        )
                      ] }) }),
                      /* @__PURE__ */ jsxs(Dialog.Content, { children: [
                        /* @__PURE__ */ jsx(Dialog.Header, { children: "Conferma Lancio del Workflow" }),
                        /* @__PURE__ */ jsxs(Dialog.Body, { children: [
                          /* @__PURE__ */ jsxs(Typography, { fontSize: "1.4rem", children: [
                            "Lancio del workflow ",
                            getWorkflowName()
                          ] }),
                          config && /* @__PURE__ */ jsxs(Typography, { fontSize: "1.2rem", children: [
                            "(Workflow ID:",
                            " ",
                            config.staging && unstagedUpdates ? config.staging.workflowID : config.workflowID,
                            ")"
                          ] }),
                          (loadingHistory !== "none" || !canTrigger || !unstagedUpdates) && /* @__PURE__ */ jsxs(
                            Flex,
                            {
                              direction: "column",
                              style: {
                                borderTop: "1px solid white",
                                marginTop: "16px",
                                paddingTop: "24px",
                                alignItems: "stretch",
                                gap: "12px"
                              },
                              children: [
                                /* @__PURE__ */ jsx(Typography, { children: "Aggiungi una descrizione al deployment (opzionale)" }),
                                /* @__PURE__ */ jsx(
                                  TextInput,
                                  {
                                    type: "text",
                                    placeholder: "Breve descrizione",
                                    onChange: handleOnChangeDescription
                                  }
                                ),
                                /* @__PURE__ */ jsx(Typography, { fontSize: "1.2rem", children: "Il campo accetta solo numeri, lettere e i caratteri . - _" })
                              ]
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxs(Dialog.Footer, { children: [
                          /* @__PURE__ */ jsx(Dialog.Cancel, { children: /* @__PURE__ */ jsx(Button, { fullWidth: true, variant: "tertiary", children: "Annulla" }) }),
                          /* @__PURE__ */ jsx(Dialog.Action, { children: /* @__PURE__ */ jsx(Button, { fullWidth: true, onClick: triggerGithubActions, children: "Conferma" }) })
                        ] })
                      ] })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(Table, { colCount: 5, rowCount: 11, children: [
          /* @__PURE__ */ jsx(Thead, { children: /* @__PURE__ */ jsxs(Tr, { children: [
            /* @__PURE__ */ jsx(Th, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: "NUMERO RUN" }) }, "run-number"),
            /* @__PURE__ */ jsx(Th, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: "NOME WORKFLOW" }) }, "workflow-name"),
            /* @__PURE__ */ jsx(Th, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: "STATO" }) }, "status"),
            /* @__PURE__ */ jsx(Th, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: "DATA CREAZIONE" }) }, "creation-date"),
            /* @__PURE__ */ jsx(Th, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: "DURATA" }) }, "duration"),
            !config?.hideGithubLink && /* @__PURE__ */ jsx(Th, {}, "actions")
          ] }) }),
          /* @__PURE__ */ jsxs(Tbody, { children: [
            loadingHistory === "loading" && /* @__PURE__ */ jsxs(Tr, { children: [
              /* @__PURE__ */ jsx(Td, {}),
              /* @__PURE__ */ jsx(Td, {}),
              /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: "Loading history..." }) }),
              /* @__PURE__ */ jsx(Td, {}),
              /* @__PURE__ */ jsx(Td, {}),
              !config?.hideGithubLink && /* @__PURE__ */ jsx(Td, {})
            ] }),
            loadingHistory === "planned" && /* @__PURE__ */ jsxs(Tr, { children: [
              /* @__PURE__ */ jsx(Td, {}),
              /* @__PURE__ */ jsx(Td, {}),
              /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: "Loading history in 5 seconds..." }) }),
              /* @__PURE__ */ jsx(Td, {}),
              /* @__PURE__ */ jsx(Td, {}),
              !config?.hideGithubLink && /* @__PURE__ */ jsx(Td, {})
            ] }),
            loadingHistory === "none" && history.map((workflow) => {
              const msDuration = differenceInMilliseconds(
                new Date(workflow.updated_at),
                new Date(workflow.run_started_at)
              );
              const secs = msDuration / 1e3 % 60;
              const mins = Math.floor(msDuration / 1e3 / 60);
              const relativeDate = formatRelative(
                new Date(workflow.created_at),
                /* @__PURE__ */ new Date()
              );
              const year = relativeDate.includes("/") ? relativeDate.split("/")[2] : null;
              const month = relativeDate.includes("/") ? relativeDate.split("/")[0] : null;
              const day = relativeDate.includes("/") ? relativeDate.split("/")[1] : null;
              const ymdRelativeDate = relativeDate.includes("/") ? `${year}-${month}-${day}` : relativeDate;
              return /* @__PURE__ */ jsxs(Tr, { children: [
                /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: workflow.run_number }) }),
                /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: workflow.name }) }),
                /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Badge, { children: workflow.conclusion ?? workflow.status }) }),
                /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: ymdRelativeDate }) }),
                /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: workflow.conclusion ? `${mins}m ${secs}s` : "in progress" }) }),
                !config?.hideGithubLink && /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: workflow.html_url,
                    target: "_blank",
                    rel: "noreferrer",
                    title: "Mostra in Github",
                    children: /* @__PURE__ */ jsx(IconButton, { "aria-label": "Mostra in Github", children: /* @__PURE__ */ jsx(ExternalLink, {}) })
                  }
                ) })
              ] }, workflow.id);
            })
          ] })
        ] })
      ]
    }
  );
};
const NotificationsPage = () => {
  const { get, post, del } = useFetchClient();
  const [showAddEmailPopup, setShowAddEmailPopup] = useState(false);
  const [showConfirmEmailDeletionPopup, setShowConfirmEmailDeletionPopup] = useState(false);
  const [emailsForNotifications, setEmailsForNotifications] = useState([]);
  const [newEmail, setNewEmail] = useState();
  const [emailToDelete, setEmailToDelete] = useState();
  const { toggleNotification } = useNotification();
  function validateNewEmail(email) {
    if (email === "") {
      setNewEmail(void 0);
      return;
    }
    if (email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
      setNewEmail(email);
      return;
    }
    setNewEmail(void 0);
  }
  async function getEmailsForNotifications() {
    try {
      const { data } = await get(`/${PLUGIN_ID}/emails-for-notifications`);
      if (data.success) {
        setEmailsForNotifications(data.emails);
      } else {
        console.error(data.err);
        setEmailsForNotifications([]);
      }
    } catch (error) {
      console.error(error);
      setEmailsForNotifications([]);
    }
  }
  async function addNewEmail() {
    try {
      const { data } = await post(`/${PLUGIN_ID}/emails-for-notifications`, {
        newEmail
      });
      if (data.success) {
        setNewEmail(void 0);
        getEmailsForNotifications();
        toggleNotification({
          type: "success",
          title: "Indirizzo email aggiunto con successo!",
          timeout: 5e3
        });
      } else {
        console.error(data.err);
        toggleNotification({
          type: "danger",
          title: "Impossibile aggiungere indirizzo email",
          message: "Si prega di riprovare",
          timeout: 5e3
        });
      }
    } catch (error) {
      console.error(error);
      toggleNotification({
        type: "danger",
        title: "Impossibile aggiungere indirizzo email",
        message: "Si prega di riprovare",
        timeout: 5e3
      });
    }
  }
  async function deleteEmail() {
    try {
      const { data } = await del(`/${PLUGIN_ID}/emails-for-notifications`, {
        params: { email: emailToDelete }
      });
      if (data.success) {
        getEmailsForNotifications();
        toggleNotification({
          type: "success",
          title: "Indirizzo email rimosso con successo!",
          timeout: 5e3
        });
      } else {
        console.error(data.err);
        toggleNotification({
          type: "danger",
          title: "Impossibile rimuovere indirizzo email",
          message: "Si prega di riprovare",
          timeout: 5e3
        });
      }
    } catch (error) {
      console.error(error);
      toggleNotification({
        type: "danger",
        title: "Impossibile rimuovere indirizzo email",
        message: "Si prega di riprovare",
        timeout: 5e3
      });
    } finally {
      setEmailToDelete(void 0);
    }
  }
  useEffect(() => {
    getEmailsForNotifications();
  }, []);
  useEffect(() => {
    if (emailToDelete && !showConfirmEmailDeletionPopup) {
      setShowConfirmEmailDeletionPopup(true);
    }
  }, [emailToDelete]);
  return /* @__PURE__ */ jsx(Page.Protect, { permissions: pluginPermissions.notifications, children: /* @__PURE__ */ jsxs(
    Main,
    {
      style: {
        padding: "0 5.4rem 3.2rem 5.4rem"
      },
      children: [
        /* @__PURE__ */ jsxs(
          Flex,
          {
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "4rem",
            children: [
              /* @__PURE__ */ jsx(Typography, { variant: "beta", children: "Notifiche Email" }),
              /* @__PURE__ */ jsx(Flex, { direction: "row", alignItems: "center", gap: "1rem", children: /* @__PURE__ */ jsxs(
                Dialog.Root,
                {
                  open: showAddEmailPopup,
                  onOpenChange: setShowAddEmailPopup,
                  children: [
                    /* @__PURE__ */ jsx(Dialog.Trigger, { children: /* @__PURE__ */ jsx(
                      Button,
                      {
                        style: { height: "4.2rem" },
                        variant: "default",
                        startIcon: /* @__PURE__ */ jsx(Plus, {}),
                        children: /* @__PURE__ */ jsx(Typography, { fontSize: "1.6rem", children: "Aggiungi Email" })
                      }
                    ) }),
                    /* @__PURE__ */ jsxs(Dialog.Content, { children: [
                      /* @__PURE__ */ jsx(Dialog.Header, { children: "Aggiungi Indirizzo Email" }),
                      /* @__PURE__ */ jsx(Dialog.Body, { children: /* @__PURE__ */ jsxs(
                        Flex,
                        {
                          direction: "column",
                          alignItems: "stretch",
                          gap: "1rem",
                          width: "100%",
                          children: [
                            /* @__PURE__ */ jsx(Typography, { children: "Questo indirizzo riceverà le email di notifica" }),
                            /* @__PURE__ */ jsx(
                              TextInput,
                              {
                                type: "email",
                                placeholder: "Indirizzo Email",
                                onChange: (e) => validateNewEmail(e.target.value)
                              }
                            )
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ jsxs(Dialog.Footer, { children: [
                        /* @__PURE__ */ jsx(Dialog.Cancel, { children: /* @__PURE__ */ jsx(Button, { fullWidth: true, variant: "tertiary", children: "Annulla" }) }),
                        /* @__PURE__ */ jsx(Dialog.Action, { children: /* @__PURE__ */ jsx(
                          Button,
                          {
                            fullWidth: true,
                            variant: "success-light",
                            disabled: !newEmail,
                            onClick: addNewEmail,
                            children: "Conferma"
                          }
                        ) })
                      ] })
                    ] })
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(Table, { colCount: 2, children: [
          /* @__PURE__ */ jsx(Thead, { children: /* @__PURE__ */ jsxs(Tr, { children: [
            /* @__PURE__ */ jsx(Th, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: "Indirizzo Email" }) }, "email"),
            /* @__PURE__ */ jsx(Th, {}, "actions")
          ] }) }),
          /* @__PURE__ */ jsxs(Tbody, { children: [
            emailsForNotifications.length <= 0 && /* @__PURE__ */ jsxs(Tr, { children: [
              /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: "Nessun Indirizzo Email" }) }),
              /* @__PURE__ */ jsx(Td, {})
            ] }, "empty"),
            emailsForNotifications.map((email) => /* @__PURE__ */ jsxs(Tr, { children: [
              /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: email }) }),
              /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(
                IconButton,
                {
                  title: "Rimuovi Email",
                  marginLeft: "auto",
                  onClick: () => setEmailToDelete(email),
                  children: /* @__PURE__ */ jsx(Trash, {})
                }
              ) })
            ] }, email))
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Dialog.Root,
          {
            open: showConfirmEmailDeletionPopup,
            onOpenChange: setShowConfirmEmailDeletionPopup,
            children: /* @__PURE__ */ jsxs(Dialog.Content, { children: [
              /* @__PURE__ */ jsx(Dialog.Header, { children: "Conferma Rimozione Email" }),
              /* @__PURE__ */ jsx(Dialog.Body, { children: /* @__PURE__ */ jsxs(Typography, { fontSize: "1.4rem", children: [
                "L'indirizzo email [",
                emailToDelete,
                "] smetterà di ricevere qualunque notifica"
              ] }) }),
              /* @__PURE__ */ jsxs(Dialog.Footer, { children: [
                /* @__PURE__ */ jsx(Dialog.Cancel, { children: /* @__PURE__ */ jsx(
                  Button,
                  {
                    fullWidth: true,
                    variant: "tertiary",
                    onClick: () => setEmailToDelete(void 0),
                    children: "Annulla"
                  }
                ) }),
                /* @__PURE__ */ jsx(Dialog.Action, { children: /* @__PURE__ */ jsx(Button, { fullWidth: true, variant: "danger-light", onClick: deleteEmail, children: "Conferma" }) })
              ] })
            ] })
          }
        )
      ]
    }
  ) });
};
const App = () => {
  const location = useLocation();
  const {
    allowedActions: { canNotifications }
  } = useRBAC(pluginPermissions.notifications);
  return /* @__PURE__ */ jsxs(Page.Protect, { permissions: pluginPermissions.access, children: [
    /* @__PURE__ */ jsxs(
      Flex,
      {
        direction: "row",
        alignItems: "center",
        justifyContent: "space-between",
        style: {
          borderBottom: "1px solid rgba(255, 255, 255, .2)",
          padding: "2rem 5.4rem",
          marginBottom: "3.2rem"
        },
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "beta", children: "Deploy Static Site" }),
          /* @__PURE__ */ jsxs(Flex, { direction: "row", alignItems: "center", gap: "2rem", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/admin/plugins/static-deploy",
                style: {
                  textDecoration: location.pathname === "/plugins/static-deploy" ? "underline" : "none"
                },
                children: /* @__PURE__ */ jsx(Typography, { variant: "gamma", color: "white !important", children: "Deployments" })
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/admin/plugins/static-deploy/notifications",
                disabled: !canNotifications,
                style: {
                  textDecoration: location.pathname === "/plugins/static-deploy/notifications" ? "underline" : "none"
                },
                children: /* @__PURE__ */ jsx(Typography, { variant: "gamma", ...canNotifications && { color: "white !important" }, children: "Notifiche" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(HomePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "notifications", element: /* @__PURE__ */ jsx(NotificationsPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Page.Error, {}) })
    ] })
  ] });
};
export {
  App
};
