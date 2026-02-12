import { jsxs, jsx } from "react/jsx-runtime";
import { useFetchClient, useRBAC, useNotification, Page } from "@strapi/strapi/admin";
import { useLocation, Routes, Route } from "react-router-dom";
import { Main, Flex, Typography, Button, Dialog, Table, Thead, Tr, Th, Tbody, Td, Badge, IconButton, TextInput, Link } from "@strapi/design-system";
import { ArrowClockwise, Expand, Play, ExternalLink, Plus, Trash } from "@strapi/icons";
import { useState, useEffect } from "react";
import { p as pluginPermissions, P as PLUGIN_ID } from "./index-0clf45WF.mjs";
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return /* @__PURE__ */ new Date(NaN);
  }
}
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}
var MILLISECONDS_IN_DAY$1 = 864e5;
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var startOfDayLeft = startOfDay(dirtyDateLeft);
  var startOfDayRight = startOfDay(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight);
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY$1);
}
function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}
function differenceInMilliseconds(dateLeft, dateRight) {
  requiredArgs(2, arguments);
  return toDate(dateLeft).getTime() - toDate(dateRight).getTime();
}
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}
var MILLISECONDS_IN_DAY = 864e5;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = /* @__PURE__ */ new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}
var MILLISECONDS_IN_WEEK$1 = 6048e5;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}
function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = /* @__PURE__ */ new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}
var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}
var formatters$1 = {
  // Year
  y: function y(date, token) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
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
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var dayPeriodEnum = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters = {
  // Era
  G: function G(date, token, localize2) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, {
          width: "abbreviated"
        });
      case "GGGGG":
        return localize2.era(era, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return localize2.era(era, {
          width: "wide"
        });
    }
  },
  // Year
  y: function y2(date, token, localize2) {
    if (token === "yo") {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, {
        unit: "year"
      });
    }
    return formatters$1.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize2, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);
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
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
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
  q: function q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
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
  M: function M2(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return formatters$1.M(date, token);
      case "Mo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
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
        return localize2.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
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
        return localize2.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize2, options) {
    var week = getUTCWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize2) {
    var isoWeek = getUTCISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d2(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getUTCDate(), {
        unit: "date"
      });
    }
    return formatters$1.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize2) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
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
  e: function e(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
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
  c: function c(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
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
  i: function i(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
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
  a: function a2(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
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
  b: function b(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
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
  B: function B(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
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
  h: function h2(date, token, localize2) {
    if (token === "ho") {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return formatters$1.h(date, token);
  },
  // Hour [0-23]
  H: function H2(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getUTCHours(), {
        unit: "hour"
      });
    }
    return formatters$1.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize2) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize2) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m2(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return formatters$1.m(date, token);
  },
  // Second
  s: function s2(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getUTCSeconds(), {
        unit: "second"
      });
    }
    return formatters$1.s(date, token);
  },
  // Fraction of second
  S: function S2(date, token) {
    return formatters$1.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
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
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
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
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
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
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
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
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter;
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
var dateLongFormatter = function dateLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "P":
      return formatLong2.date({
        width: "short"
      });
    case "PP":
      return formatLong2.date({
        width: "medium"
      });
    case "PPP":
      return formatLong2.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong2.date({
        width: "full"
      });
  }
};
var timeLongFormatter = function timeLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "p":
      return formatLong2.time({
        width: "short"
      });
    case "pp":
      return formatLong2.time({
        width: "medium"
      });
    case "ppp":
      return formatLong2.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong2.time({
        width: "full"
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong2) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var protectedDayOfYearTokens = ["D", "DD"];
var protectedWeekYearTokens = ["YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format2, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}
var formatDistanceLocale = {
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
var formatDistance = function formatDistance2(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
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
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative$1 = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
function buildLocalizeFn(args) {
  return function(dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
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
var formattingDayPeriodValues = {
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
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
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
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
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
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
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
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
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
    valueCallback: function valueCallback2(index) {
      return index + 1;
    }
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
var locale = {
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
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions2 = getDefaultOptions();
  var locale$1 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : locale;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale$1.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale$1.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale$1,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale$1.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = formatters[firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale$1.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}
function formatRelative2(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$weekStartsOn, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var baseDate = toDate(dirtyBaseDate);
  var defaultOptions2 = getDefaultOptions();
  var locale$1 = (_ref = (_options$locale = void 0) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : locale;
  var weekStartsOn = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$weekStartsOn = void 0) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : void 0) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : 0);
  if (!locale$1.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale$1.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  if (!locale$1.formatRelative) {
    throw new RangeError("locale must contain formatRelative property");
  }
  var diff = differenceInCalendarDays(date, baseDate);
  if (isNaN(diff)) {
    throw new RangeError("Invalid time value");
  }
  var token;
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
  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
  var utcBaseDate = subMilliseconds(baseDate, getTimezoneOffsetInMilliseconds(baseDate));
  var formatStr = locale$1.formatRelative(token, utcDate, utcBaseDate, {
    locale: locale$1,
    weekStartsOn
  });
  return format(date, formatStr, {
    locale: locale$1,
    weekStartsOn
  });
}
const HomePage = () => {
  const { get, post } = useFetchClient();
  const [loadingTriggerButton, setLoadingTriggerButton] = useState(false);
  const [config, setConfig] = useState(null);
  const [unstagedUpdates, setUnstagedUpdates] = useState(true);
  const [history, setHistory] = useState([]);
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
      post(`/${PLUGIN_ID}/notify`, { event });
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
            const lastStagingWorkflow = data.workflow_runs.filter((workflow) => {
              const workflowPathArray = workflow.path.split("/");
              const workflowFileName = workflowPathArray[workflowPathArray.length - 1];
              return workflowFileName === config.staging.workflowID;
            })[0];
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
        sendEmailNotification("staging-trigger");
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
        await post(`/${PLUGIN_ID}/trigger`);
        sendEmailNotification(config?.staging ? "prod-trigger" : "trigger");
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
                      /* @__PURE__ */ jsx(Dialog.Trigger, { children: config?.staging ? /* @__PURE__ */ jsxs(Flex, { children: [
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
                      ] }) : /* @__PURE__ */ jsx(
                        Button,
                        {
                          loading: loadingTriggerButton,
                          disabled: loadingHistory !== "none" || !canTrigger,
                          style: { height: "4.2rem" },
                          variant: "default",
                          startIcon: /* @__PURE__ */ jsx(Play, {}),
                          children: /* @__PURE__ */ jsx(Typography, { fontSize: "1.6rem", children: "Produzione" })
                        }
                      ) }),
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
                          ] })
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
              const relativeDate = formatRelative2(
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
    if (email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
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
      const { data } = await post(`/${PLUGIN_ID}/emails-for-notifications`, { newEmail });
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
      const { data } = await del(`/${PLUGIN_ID}/emails-for-notifications`, { params: { email: emailToDelete } });
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
              /* @__PURE__ */ jsx(Flex, { direction: "row", alignItems: "center", gap: "1rem", children: /* @__PURE__ */ jsxs(Dialog.Root, { open: showAddEmailPopup, onOpenChange: setShowAddEmailPopup, children: [
                /* @__PURE__ */ jsx(Dialog.Trigger, { children: /* @__PURE__ */ jsx(Button, { style: { height: "4.2rem" }, variant: "default", startIcon: /* @__PURE__ */ jsx(Plus, {}), children: /* @__PURE__ */ jsx(Typography, { fontSize: "1.6rem", children: "Aggiungi Email" }) }) }),
                /* @__PURE__ */ jsxs(Dialog.Content, { children: [
                  /* @__PURE__ */ jsx(Dialog.Header, { children: "Aggiungi Indirizzo Email" }),
                  /* @__PURE__ */ jsx(Dialog.Body, { children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: "1rem", width: "100%", children: [
                    /* @__PURE__ */ jsx(Typography, { children: "Questo indirizzo riceverà le email di notifica" }),
                    /* @__PURE__ */ jsx(TextInput, { type: "email", placeholder: "Indirizzo Email", onChange: (e2) => validateNewEmail(e2.target.value) })
                  ] }) }),
                  /* @__PURE__ */ jsxs(Dialog.Footer, { children: [
                    /* @__PURE__ */ jsx(Dialog.Cancel, { children: /* @__PURE__ */ jsx(Button, { fullWidth: true, variant: "tertiary", children: "Annulla" }) }),
                    /* @__PURE__ */ jsx(Dialog.Action, { children: /* @__PURE__ */ jsx(Button, { fullWidth: true, variant: "success-light", disabled: !newEmail, onClick: addNewEmail, children: "Conferma" }) })
                  ] })
                ] })
              ] }) })
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
              /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(IconButton, { title: "Rimuovi Email", marginLeft: "auto", onClick: () => setEmailToDelete(email), children: /* @__PURE__ */ jsx(Trash, {}) }) })
            ] }, email))
          ] })
        ] }),
        /* @__PURE__ */ jsx(Dialog.Root, { open: showConfirmEmailDeletionPopup, onOpenChange: setShowConfirmEmailDeletionPopup, children: /* @__PURE__ */ jsxs(Dialog.Content, { children: [
          /* @__PURE__ */ jsx(Dialog.Header, { children: "Conferma Rimozione Email" }),
          /* @__PURE__ */ jsx(Dialog.Body, { children: /* @__PURE__ */ jsxs(Typography, { fontSize: "1.4rem", children: [
            "L'indirizzo email [",
            emailToDelete,
            "] smetterà di ricevere qualunque notifica"
          ] }) }),
          /* @__PURE__ */ jsxs(Dialog.Footer, { children: [
            /* @__PURE__ */ jsx(Dialog.Cancel, { children: /* @__PURE__ */ jsx(Button, { fullWidth: true, variant: "tertiary", onClick: () => setEmailToDelete(void 0), children: "Annulla" }) }),
            /* @__PURE__ */ jsx(Dialog.Action, { children: /* @__PURE__ */ jsx(Button, { fullWidth: true, variant: "danger-light", onClick: deleteEmail, children: "Conferma" }) })
          ] })
        ] }) })
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
