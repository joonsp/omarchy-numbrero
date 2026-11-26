.pragma library

var UNITS = {
  // Length (base: m)
  mm: { dim: "length", sym: "mm", scale: 0.001 },
  millimeter: { dim: "length", sym: "mm", scale: 0.001 },
  millimeters: { dim: "length", sym: "mm", scale: 0.001 },
  cm: { dim: "length", sym: "cm", scale: 0.01 },
  centimeter: { dim: "length", sym: "cm", scale: 0.01 },
  centimeters: { dim: "length", sym: "cm", scale: 0.01 },
  m: { dim: "length", sym: "m", scale: 1 },
  meter: { dim: "length", sym: "m", scale: 1 },
  meters: { dim: "length", sym: "m", scale: 1 },
  km: { dim: "length", sym: "km", scale: 1000 },
  kilometer: { dim: "length", sym: "km", scale: 1000 },
  kilometers: { dim: "length", sym: "km", scale: 1000 },
  "in": { dim: "length", sym: "in", scale: 0.0254 },
  inch: { dim: "length", sym: "in", scale: 0.0254 },
  inches: { dim: "length", sym: "in", scale: 0.0254 },
  ft: { dim: "length", sym: "ft", scale: 0.3048 },
  foot: { dim: "length", sym: "ft", scale: 0.3048 },
  feet: { dim: "length", sym: "ft", scale: 0.3048 },
  yd: { dim: "length", sym: "yd", scale: 0.9144 },
  yard: { dim: "length", sym: "yd", scale: 0.9144 },
  yards: { dim: "length", sym: "yd", scale: 0.9144 },
  mi: { dim: "length", sym: "mi", scale: 1609.344 },
  mile: { dim: "length", sym: "mi", scale: 1609.344 },
  miles: { dim: "length", sym: "mi", scale: 1609.344 },
  nmi: { dim: "length", sym: "nmi", scale: 1852 },

  // Mass (base: g)
  mg: { dim: "mass", sym: "mg", scale: 0.001 },
  g: { dim: "mass", sym: "g", scale: 1 },
  gram: { dim: "mass", sym: "g", scale: 1 },
  grams: { dim: "mass", sym: "g", scale: 1 },
  kg: { dim: "mass", sym: "kg", scale: 1000 },
  kilogram: { dim: "mass", sym: "kg", scale: 1000 },
  kilograms: { dim: "mass", sym: "kg", scale: 1000 },
  t: { dim: "mass", sym: "t", scale: 1000000 },
  oz: { dim: "mass", sym: "oz", scale: 28.349523125 },
  lb: { dim: "mass", sym: "lb", scale: 453.59237 },
  lbs: { dim: "mass", sym: "lb", scale: 453.59237 },
  pound: { dim: "mass", sym: "lb", scale: 453.59237 },
  pounds: { dim: "mass", sym: "lb", scale: 453.59237 },

  // Temperature (base: C)
  C: { dim: "temp", sym: "°C", scale: 1 },
  "°C": { dim: "temp", sym: "°C", scale: 1 },
  celsius: { dim: "temp", sym: "°C", scale: 1 },
  F: { dim: "temp", sym: "°F", scale: 1 },
  "°F": { dim: "temp", sym: "°F", scale: 1 },
  fahrenheit: { dim: "temp", sym: "°F", scale: 1 },
  K: { dim: "temp", sym: "K", scale: 1 },
  kelvin: { dim: "temp", sym: "K", scale: 1 },

  // Time (base: s)
  ms: { dim: "time", sym: "ms", scale: 0.001 },
  s: { dim: "time", sym: "s", scale: 1 },
  sec: { dim: "time", sym: "s", scale: 1 },
  second: { dim: "time", sym: "s", scale: 1 },
  seconds: { dim: "time", sym: "s", scale: 1 },
  min: { dim: "time", sym: "min", scale: 60 },
  mins: { dim: "time", sym: "min", scale: 60 },
  minute: { dim: "time", sym: "min", scale: 60 },
  minutes: { dim: "time", sym: "min", scale: 60 },
  h: { dim: "time", sym: "h", scale: 3600 },
  hr: { dim: "time", sym: "h", scale: 3600 },
  hrs: { dim: "time", sym: "h", scale: 3600 },
  hour: { dim: "time", sym: "h", scale: 3600 },
  hours: { dim: "time", sym: "h", scale: 3600 },
  d: { dim: "time", sym: "d", scale: 86400 },
  day: { dim: "time", sym: "d", scale: 86400 },
  days: { dim: "time", sym: "d", scale: 86400 },
  wk: { dim: "time", sym: "wk", scale: 604800 },
  week: { dim: "time", sym: "wk", scale: 604800 },
  weeks: { dim: "time", sym: "wk", scale: 604800 },
  yr: { dim: "time", sym: "yr", scale: 31557600 },
  year: { dim: "time", sym: "yr", scale: 31557600 },
  years: { dim: "time", sym: "yr", scale: 31557600 },

  // Data (base: byte)
  bit: { dim: "data", sym: "bit", scale: 0.125 },
  bits: { dim: "data", sym: "bit", scale: 0.125 },
  B: { dim: "data", sym: "B", scale: 1 },
  byte: { dim: "data", sym: "B", scale: 1 },
  bytes: { dim: "data", sym: "B", scale: 1 },
  KB: { dim: "data", sym: "KB", scale: 1000 },
  MB: { dim: "data", sym: "MB", scale: 1000000 },
  GB: { dim: "data", sym: "GB", scale: 1000000000 },
  TB: { dim: "data", sym: "TB", scale: 1000000000000 },
  KiB: { dim: "data", sym: "KiB", scale: 1024 },
  MiB: { dim: "data", sym: "MiB", scale: 1048576 },
  GiB: { dim: "data", sym: "GiB", scale: 1073741824 },
  TiB: { dim: "data", sym: "TiB", scale: 1099511627776 },

  // Area (base: m2)
  m2: { dim: "area", sym: "m²", scale: 1 },
  sqm: { dim: "area", sym: "m²", scale: 1 },
  km2: { dim: "area", sym: "km²", scale: 1000000 },
  ha: { dim: "area", sym: "ha", scale: 10000 },
  sqft: { dim: "area", sym: "sqft", scale: 0.09290304 },
  acre: { dim: "area", sym: "acre", scale: 4046.8564224 },
  acres: { dim: "area", sym: "acre", scale: 4046.8564224 },

  // Volume (base: L)
  mL: { dim: "volume", sym: "mL", scale: 0.001 },
  ml: { dim: "volume", sym: "mL", scale: 0.001 },
  L: { dim: "volume", sym: "L", scale: 1 },
  l: { dim: "volume", sym: "L", scale: 1 },
  liter: { dim: "volume", sym: "L", scale: 1 },
  liters: { dim: "volume", sym: "L", scale: 1 },
  gal: { dim: "volume", sym: "gal", scale: 3.785411784 },
  qt: { dim: "volume", sym: "qt", scale: 0.946352946 },
  pt: { dim: "volume", sym: "pt", scale: 0.473176473 },
  cup: { dim: "volume", sym: "cup", scale: 0.2365882365 },
  tbsp: { dim: "volume", sym: "tbsp", scale: 0.01478676478125 },
  tsp: { dim: "volume", sym: "tsp", scale: 0.00492892159375 }
};

var BUILTIN_CONSTS = { pi: Math.PI, e: Math.E, tau: Math.PI * 2 };
var BUILTIN_FUNCS = {
  sqrt: true, cbrt: true, abs: true, sign: true, round: true, floor: true, ceil: true, trunc: true,
  sin: true, cos: true, tan: true, asin: true, acos: true, atan: true, atan2: true, deg: true, rad: true,
  log: true, ln: true, log2: true, exp: true, pow: true, min: true, max: true, clamp: true, sum: true, avg: true
};
var BUILTIN_AGGS = { sum: true, total: true, avg: true, average: true, mean: true, count: true, prev: true, ans: true };
var CURRENCY_CHARS = { "$": "$", "€": "€", "£": "£", "¥": "¥" };
var CURRENCY_WORDS = { USD: "$", EUR: "€", GBP: "£", JPY: "¥", KR: "kr", kr: "kr" };

function lookupUnit(word) {
  if (!word) return null;
  if (Object.prototype.hasOwnProperty.call(UNITS, word)) return UNITS[word];
  var lower = word.toLowerCase();
  if (word !== "B" && word !== "b" && word !== "C" && word !== "F" && word !== "K") {
    if (Object.prototype.hasOwnProperty.call(UNITS, lower)) return UNITS[lower];
  }
  return null;
}

function lookupCurrency(word) {
  if (!word) return null;
  if (Object.prototype.hasOwnProperty.call(CURRENCY_CHARS, word)) return CURRENCY_CHARS[word];
  var upper = word.toUpperCase();
  if (Object.prototype.hasOwnProperty.call(CURRENCY_WORDS, upper)) return CURRENCY_WORDS[upper];
  return null;
}

function lookupBase(word) {
  var lower = word ? word.toLowerCase() : "";
  if (lower === "hex" || lower === "bin" || lower === "oct" || lower === "dec") return lower;
  return null;
}

function convertUnit(val, fromSym, toUnit) {
  var fromUnit = lookupUnit(fromSym);
  if (!fromUnit || !toUnit || fromUnit.dim !== toUnit.dim) return null;
  if (fromUnit.sym === toUnit.sym) return val;
  if (fromUnit.dim === "temp") {
    var c = fromUnit.sym === "°C" ? val : (fromUnit.sym === "°F" ? (val - 32) * 5 / 9 : val - 273.15);
    return toUnit.sym === "°C" ? c : (toUnit.sym === "°F" ? c * 9 / 5 + 32 : c + 273.15);
  }
  return (val * fromUnit.scale) / toUnit.scale;
}

function formatNumber(n) {
  if (!isFinite(n)) return String(n);
  if (Math.abs(n) < 1e-12) n = 0;
  var absVal = Math.abs(n);
  var s;
  if (absVal !== 0 && (absVal >= 1e12 || absVal < 1e-6)) {
    s = Number(n.toPrecision(6)).toString();
  } else {
    s = n.toFixed(6).replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "");
  }
  return s === "-0" ? "0" : s;
}

function formatValue(v) {
  if (v.base && v.base !== "dec") {
    var iv = Math.round(v.number);
    var neg = iv < 0;
    var absInt = Math.abs(iv);
    var prefix = v.base === "hex" ? "0x" : (v.base === "bin" ? "0b" : "0o");
    var radix = v.base === "hex" ? 16 : (v.base === "bin" ? 2 : 8);
    return (neg ? "-" : "") + prefix + absInt.toString(radix);
  }
  if (v.isPercent) return formatNumber(v.number * 100) + "%";
  if (v.currency) {
    var negC = v.number < 0 && Math.abs(v.number) >= 1e-12;
    var numStr = formatNumber(negC ? -v.number : v.number);
    if (v.currency === "kr") return (negC ? "-" : "") + numStr + " kr";
    return (negC ? "-" : "") + v.currency + numStr;
  }
  var out = formatNumber(v.number);
  if (v.unit) out += " " + v.unit.sym;
  return out;
}

function tokenize(expr) {
  var tokens = [];
  var i = 0;
  var n = expr.length;
  while (i < n) {
    var ch = expr.charAt(i);
    if (/\s/.test(ch)) { i++; continue; }

    if (ch === "0" && i + 1 < n && /[xboXBO]/.test(expr.charAt(i + 1))) {
      var p = expr.charAt(i + 1).toLowerCase();
      var radix = p === "x" ? 16 : (p === "b" ? 2 : 8);
      var re = radix === 16 ? /^[0-9a-fA-F_]+/ : (radix === 2 ? /^[01_]+/ : /^[0-7_]+/);
      var rest = expr.slice(i + 2);
      var m = rest.match(re);
      if (!m || m[0].replace(/_/g, "") === "") throw new Error("Invalid integer literal");
      i += 2 + m[0].length;
      if (i < n && /[A-Za-z0-9]/.test(expr.charAt(i))) throw new Error("Invalid integer literal");
      tokens.push({ kind: "num", number: parseInt(m[0].replace(/_/g, ""), radix) });
      continue;
    }

    if (/[0-9]/.test(ch) || (ch === "." && i + 1 < n && /[0-9]/.test(expr.charAt(i + 1)))) {
      var nm = expr.slice(i).match(/^(?:\d[\d_]*(?:\.[\d_]+)?|\.\d[\d_]*)(?:[eE][+-]?\d+)?/);
      if (!nm) throw new Error("Invalid number");
      i += nm[0].length;
      tokens.push({ kind: "num", number: Number(nm[0].replace(/_/g, "")) });
      continue;
    }

    if (Object.prototype.hasOwnProperty.call(CURRENCY_CHARS, ch)) {
      tokens.push({ kind: "cur", text: ch });
      i++;
      continue;
    }

    if (/[A-Za-z_°]/.test(ch)) {
      var im = expr.slice(i).match(/^[A-Za-z_°][A-Za-z0-9_²]*/);
      i += im[0].length;
      tokens.push({ kind: "id", text: im[0] });
      continue;
    }

    if (expr.slice(i, i + 2) === "->") { tokens.push({ kind: "arrow", text: "->" }); i += 2; continue; }
    if (expr.slice(i, i + 2) === "**") { tokens.push({ kind: "^", text: "**" }); i += 2; continue; }
    if ("+-*/^%(),".indexOf(ch) >= 0) { tokens.push({ kind: ch, text: ch }); i++; continue; }
    throw new Error("Unexpected character '" + ch + "'");
  }
  tokens.push({ kind: "end", text: "" });
  return tokens;
}

function startsPrimary(tok) {
  if (tok.kind === "num" || tok.kind === "(" || tok.kind === "cur") return true;
  if (tok.kind === "id") {
    var l = tok.text.toLowerCase();
    return l !== "of" && l !== "off" && l !== "in" && l !== "to" && l !== "as";
  }
  return false;
}

function parseTokens(tokens, env, blockValues, prevValue) {
  var pos = 0;
  function peek(off) { var idx = pos + (off || 0); return idx < tokens.length ? tokens[idx] : tokens[tokens.length - 1]; }
  function advance() { var c = peek(0); if (pos + 1 < tokens.length) pos++; return c; }

  function isConv(tok) {
    if (tok.kind === "arrow") return true;
    if (tok.kind === "id") {
      var l = tok.text.toLowerCase();
      return l === "in" || l === "to" || l === "as";
    }
    return false;
  }

  function multVals(a, b) {
    if (a.unit && b.unit) throw new Error("Cannot multiply units");
    if (a.currency && b.currency) throw new Error("Cannot multiply currencies");
    if ((a.currency && b.unit) || (a.unit && b.currency)) throw new Error("Cannot combine currency and unit");
    var unit = a.unit || b.unit || null;
    var cur = a.currency || b.currency || null;
    var pct = (!!a.isPercent !== !!b.isPercent) && !unit && !cur;
    return { number: a.number * b.number, unit: unit, currency: cur, base: "dec", isPercent: pct };
  }

  function aggSum(items) {
    if (items.length === 0) return { number: 0, unit: null, currency: null, base: "dec", isPercent: false };
    var u0 = items[0].unit, c0 = items[0].currency, allPct = items[0].isPercent;
    var total = 0;
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      if (it.currency !== c0) throw new Error("Incompatible currencies in sum");
      if (!u0 && !it.unit) total += it.number;
      else if (u0 && it.unit && u0.dim === it.unit.dim) total += convertUnit(it.number, it.unit.sym, u0);
      else throw new Error("Incompatible units in sum");
    }
    return { number: total, unit: u0, currency: c0, base: "dec", isPercent: allPct && !u0 && !c0 };
  }

  function parseConversion() {
    var lhs = parseAddSub();
    while (isConv(peek(0))) {
      advance();
      if (peek(0).kind === "%") {
        advance();
        if (lhs.unit || lhs.currency) throw new Error("Cannot convert to %");
        lhs = { number: lhs.number, unit: null, currency: null, base: "dec", isPercent: true };
        continue;
      }
      if (peek(0).kind !== "id") throw new Error("Expected unit or base");
      var targetName = advance().text;
      var base = lookupBase(targetName);
      if (base) {
        if (lhs.unit || lhs.currency || lhs.isPercent) throw new Error("Base conversion requires an integer");
        if (!isFinite(lhs.number) || Math.trunc(lhs.number) !== lhs.number) throw new Error("Base conversion requires an integer");
        lhs = { number: lhs.number, unit: null, currency: null, base: base, isPercent: false };
        continue;
      }
      var targetUnit = lookupUnit(targetName);
      if (!targetUnit) throw new Error("Unknown unit '" + targetName + "'");
      if (lhs.currency || !lhs.unit) throw new Error("Cannot convert to " + targetUnit.sym);
      var conv = convertUnit(lhs.number, lhs.unit.sym, targetUnit);
      if (conv === null) throw new Error("Incompatible units");
      lhs = { number: conv, unit: targetUnit, currency: null, base: "dec", isPercent: false };
    }
    return lhs;
  }

  function parseAddSub() {
    var lhs = parseMulDiv();
    while (peek(0).kind === "+" || peek(0).kind === "-") {
      var isAdd = advance().kind === "+";
      var rhs = parseMulDiv();
      lhs = { number: lhs.number, unit: lhs.unit, currency: lhs.currency, base: "dec", isPercent: lhs.isPercent };
      if (!lhs.isPercent && rhs.isPercent) {
        lhs.number *= isAdd ? (1 + rhs.number) : (1 - rhs.number);
      } else if (lhs.isPercent && rhs.isPercent) {
        lhs.number = isAdd ? (lhs.number + rhs.number) : (lhs.number - rhs.number);
      } else if (lhs.isPercent && !rhs.isPercent) {
        throw new Error("Cannot add to percentage");
      } else if (lhs.currency || rhs.currency) {
        if (lhs.currency !== rhs.currency) throw new Error("Incompatible currencies");
        lhs.number = isAdd ? (lhs.number + rhs.number) : (lhs.number - rhs.number);
      } else if ((!lhs.unit && !rhs.unit) || (lhs.unit && rhs.unit && lhs.unit.sym === rhs.unit.sym)) {
        lhs.number = isAdd ? (lhs.number + rhs.number) : (lhs.number - rhs.number);
      } else if (lhs.unit && rhs.unit && lhs.unit.dim === rhs.unit.dim) {
        var r = convertUnit(rhs.number, rhs.unit.sym, lhs.unit);
        lhs.number = isAdd ? (lhs.number + r) : (lhs.number - r);
      } else {
        throw new Error("Incompatible units");
      }
    }
    return lhs;
  }

  function parseMulDiv() {
    var lhs = parseOf();
    while (peek(0).kind === "*" || peek(0).kind === "/" || peek(0).kind === "%") {
      var op = advance().kind;
      var rhs = parseOf();
      if (op === "*") {
        lhs = multVals(lhs, rhs);
      } else if (op === "/") {
        if (rhs.number === 0) throw new Error("Division by zero");
        if (lhs.currency || rhs.currency) {
          if (lhs.currency && rhs.currency === lhs.currency)
            lhs = { number: lhs.number / rhs.number, unit: null, currency: null, base: "dec", isPercent: false };
          else if (lhs.currency && !rhs.currency && !rhs.unit)
            lhs = { number: lhs.number / rhs.number, unit: null, currency: lhs.currency, base: "dec", isPercent: false };
          else throw new Error("Incompatible currencies in division");
        } else if (lhs.unit && rhs.unit) {
          if (lhs.unit.dim !== rhs.unit.dim) throw new Error("Incompatible units");
          var rInL = convertUnit(rhs.number, rhs.unit.sym, lhs.unit);
          if (rInL === 0) throw new Error("Division by zero");
          lhs = { number: lhs.number / rInL, unit: null, currency: null, base: "dec", isPercent: false };
        } else if (rhs.unit) {
          throw new Error("Cannot divide by " + rhs.unit.sym);
        } else {
          lhs = { number: lhs.number / rhs.number, unit: lhs.unit, currency: null, base: "dec", isPercent: lhs.isPercent && !rhs.isPercent };
        }
      } else {
        if (rhs.number === 0) throw new Error("Division by zero");
        if (lhs.unit !== rhs.unit || lhs.currency !== rhs.currency) throw new Error("Incompatible units for modulo");
        lhs = { number: lhs.number % rhs.number, unit: lhs.unit, currency: lhs.currency, base: "dec", isPercent: false };
      }
    }
    return lhs;
  }

  function parseOf() {
    var lhs = parseImplicitMul();
    if (peek(0).kind === "id") {
      var l = peek(0).text.toLowerCase();
      if (l === "of") {
        advance();
        var rhs = parseOf();
        if (lhs.unit || lhs.currency) throw new Error("Left side of 'of' cannot have a unit");
        return { number: lhs.number * rhs.number, unit: rhs.unit, currency: rhs.currency, base: "dec", isPercent: rhs.isPercent && lhs.isPercent };
      }
      if (l === "off") {
        advance();
        var rhsOff = parseOf();
        if (lhs.isPercent && !lhs.unit && !lhs.currency)
          return { number: (1 - lhs.number) * rhsOff.number, unit: rhsOff.unit, currency: rhsOff.currency, base: "dec", isPercent: rhsOff.isPercent };
        if (lhs.unit === rhsOff.unit && lhs.currency === rhsOff.currency)
          return { number: rhsOff.number - lhs.number, unit: rhsOff.unit, currency: rhsOff.currency, base: "dec", isPercent: false };
        throw new Error("Incompatible operands for 'off'");
      }
    }
    return lhs;
  }

  function canImplicitMul() {
    var n = peek(0);
    if (n.kind === "(") return true;
    if (n.kind === "id") {
      var l = n.text.toLowerCase();
      if (l === "in" || l === "to" || l === "as" || l === "of" || l === "off") return false;
      if (peek(1).kind === "(" && BUILTIN_FUNCS[l]) return true;
      if (Object.prototype.hasOwnProperty.call(env, n.text)) return true;
      if (Object.prototype.hasOwnProperty.call(BUILTIN_CONSTS, l)) return true;
    }
    return false;
  }

  function parseImplicitMul() {
    var lhs = parseUnary();
    while (canImplicitMul()) {
      lhs = multVals(lhs, parseUnary());
    }
    return lhs;
  }

  function parseUnary() {
    if (peek(0).kind === "+") { advance(); return parseUnary(); }
    if (peek(0).kind === "-") {
      advance();
      var v = parseUnary();
      return { number: -v.number, unit: v.unit, currency: v.currency, base: v.base, isPercent: v.isPercent };
    }
    return parsePower();
  }

  function parsePower() {
    var base = parsePostfix();
    if (peek(0).kind === "^") {
      advance();
      var exp = parseUnary();
      if (exp.unit || exp.currency || base.unit || base.currency) throw new Error("Invalid exponent");
      return { number: Math.pow(base.number, exp.number), unit: null, currency: null, base: "dec", isPercent: false };
    }
    return base;
  }

  function parsePostfix() {
    var val = parsePrimary();
    while (true) {
      if (peek(0).kind === "%" && !startsPrimary(peek(1))) {
        advance();
        if (val.unit || val.currency) throw new Error("Cannot apply %");
        val = { number: val.number / 100, unit: null, currency: null, base: "dec", isPercent: true };
        continue;
      }
      if (peek(0).kind === "cur" && !val.currency && !val.unit && !val.isPercent) {
        val = { number: val.number, unit: null, currency: lookupCurrency(advance().text), base: "dec", isPercent: false };
        continue;
      }
      if (peek(0).kind === "id" && !val.unit && !val.currency && !val.isPercent) {
        var w = peek(0).text;
        var l = w.toLowerCase();
        if (l === "in") {
          if (peek(1).kind === "%" || lookupBase(peek(1).text)) break;
          advance();
          val = { number: val.number, unit: UNITS["in"], currency: null, base: "dec", isPercent: false };
          continue;
        }
        if (l !== "to" && l !== "as" && l !== "of" && l !== "off") {
          var u = lookupUnit(w);
          if (u) {
            advance();
            val = { number: val.number, unit: u, currency: null, base: "dec", isPercent: false };
            continue;
          }
          if (!Object.prototype.hasOwnProperty.call(env, w)) {
            var cur = lookupCurrency(w);
            if (cur) {
              advance();
              val = { number: val.number, unit: null, currency: cur, base: "dec", isPercent: false };
              continue;
            }
          }
        }
      }
      break;
    }
    return val;
  }

  function parseCall(name) {
    advance(); // '('
    var args = [];
    if (peek(0).kind !== ")") {
      while (true) {
        args.push(parseConversion());
        if (peek(0).kind === ",") { advance(); continue; }
        break;
      }
    }
    if (peek(0).kind !== ")") throw new Error("Expected ')'");
    advance();
    if (name === "sum") return aggSum(args);
    if (name === "avg") {
      if (args.length === 0) throw new Error("avg() expects arguments");
      var s = aggSum(args);
      s.number /= args.length;
      return s;
    }
    if (name === "min" || name === "max") {
      if (args.length === 0) throw new Error(name + "() expects arguments");
      var nums = args.map(function(a) { return a.number; });
      return { number: name === "min" ? Math.min.apply(null, nums) : Math.max.apply(null, nums), unit: args[0].unit, currency: args[0].currency, base: "dec", isPercent: args[0].isPercent };
    }
    if (name === "clamp") {
      if (args.length !== 3) throw new Error("clamp() expects 3 arguments");
      return { number: Math.min(Math.max(args[0].number, args[1].number), args[2].number), unit: args[0].unit, currency: args[0].currency, base: "dec", isPercent: args[0].isPercent };
    }
    if (name === "abs") return { number: Math.abs(args[0].number), unit: args[0].unit, currency: args[0].currency, base: "dec", isPercent: args[0].isPercent };
    if (name === "round") {
      var dec = args.length >= 2 ? Math.round(args[1].number) : 0;
      var f = Math.pow(10, Math.min(Math.max(dec, 0), 10));
      return { number: Math.round(args[0].number * f) / f, unit: args[0].unit, currency: args[0].currency, base: "dec", isPercent: args[0].isPercent };
    }
    if (name === "floor") return { number: Math.floor(args[0].number), unit: args[0].unit, currency: args[0].currency, base: "dec", isPercent: args[0].isPercent };
    if (name === "ceil") return { number: Math.ceil(args[0].number), unit: args[0].unit, currency: args[0].currency, base: "dec", isPercent: args[0].isPercent };
    if (name === "trunc") return { number: Math.trunc(args[0].number), unit: args[0].unit, currency: args[0].currency, base: "dec", isPercent: args[0].isPercent };
    if (name === "sqrt") return { number: Math.sqrt(args[0].number), unit: null, currency: null, base: "dec", isPercent: false };
    if (name === "cbrt") return { number: Math.cbrt(args[0].number), unit: null, currency: null, base: "dec", isPercent: false };
    if (name === "sin") return { number: Math.sin(args[0].number), unit: null, currency: null, base: "dec", isPercent: false };
    if (name === "cos") return { number: Math.cos(args[0].number), unit: null, currency: null, base: "dec", isPercent: false };
    if (name === "tan") return { number: Math.tan(args[0].number), unit: null, currency: null, base: "dec", isPercent: false };
    if (name === "asin") return { number: Math.asin(args[0].number), unit: null, currency: null, base: "dec", isPercent: false };
    if (name === "acos") return { number: Math.acos(args[0].number), unit: null, currency: null, base: "dec", isPercent: false };
    if (name === "atan") return { number: Math.atan(args[0].number), unit: null, currency: null, base: "dec", isPercent: false };
    if (name === "atan2") return { number: Math.atan2(args[0].number, args[1].number), unit: null, currency: null, base: "dec", isPercent: false };
    if (name === "deg") return { number: args[0].number * 180 / Math.PI, unit: null, currency: null, base: "dec", isPercent: false };
    if (name === "rad") return { number: args[0].number * Math.PI / 180, unit: null, currency: null, base: "dec", isPercent: false };
    if (name === "ln") return { number: Math.log(args[0].number), unit: null, currency: null, base: "dec", isPercent: false };
    if (name === "log2") return { number: Math.log2(args[0].number), unit: null, currency: null, base: "dec", isPercent: false };
    if (name === "exp") return { number: Math.exp(args[0].number), unit: null, currency: null, base: "dec", isPercent: false };
    if (name === "pow") return { number: Math.pow(args[0].number, args[1].number), unit: null, currency: null, base: "dec", isPercent: false };
    if (name === "log") {
      if (args.length === 1) return { number: Math.log10(args[0].number), unit: null, currency: null, base: "dec", isPercent: false };
      return { number: Math.log(args[0].number) / Math.log(args[1].number), unit: null, currency: null, base: "dec", isPercent: false };
    }
    throw new Error("Unknown function '" + name + "'");
  }

  function parsePrimary() {
    var tok = peek(0);
    if (tok.kind === "num") { advance(); return { number: tok.number, unit: null, currency: null, base: "dec", isPercent: false }; }
    if (tok.kind === "cur") {
      var cur = lookupCurrency(advance().text);
      var inner = parsePrimary();
      if (inner.currency || inner.unit || inner.isPercent) throw new Error("Unexpected currency");
      return { number: inner.number, unit: null, currency: cur, base: "dec", isPercent: false };
    }
    if (tok.kind === "(") {
      advance();
      var inside = parseConversion();
      if (peek(0).kind !== ")") throw new Error("Missing ')'");
      advance();
      return inside;
    }
    if (tok.kind === "id") {
      advance();
      var name = tok.text;
      var lower = name.toLowerCase();
      if (peek(0).kind === "(" && (BUILTIN_FUNCS[lower] || !Object.prototype.hasOwnProperty.call(env, name)))
        return parseCall(lower);
      if (Object.prototype.hasOwnProperty.call(env, name)) return env[name];
      if (Object.prototype.hasOwnProperty.call(BUILTIN_CONSTS, lower))
        return { number: BUILTIN_CONSTS[lower], unit: null, currency: null, base: "dec", isPercent: false };
      if (lower === "prev" || lower === "ans") {
        if (!prevValue) throw new Error("No previous value");
        return prevValue;
      }
      if (lower === "count") return { number: blockValues.length, unit: null, currency: null, base: "dec", isPercent: false };
      if (lower === "sum" || lower === "total") return aggSum(blockValues);
      if (lower === "avg" || lower === "average" || lower === "mean") {
        if (blockValues.length === 0) throw new Error("Nothing to average");
        var s = aggSum(blockValues);
        s.number /= blockValues.length;
        return s;
      }
      throw new Error("Unknown variable '" + name + "'");
    }
    throw new Error("Expected expression");
  }

  var result = parseConversion();
  if (peek(0).kind !== "end") throw new Error("Unexpected token '" + peek(0).text + "'");
  if (!isFinite(result.number)) throw new Error("Math error");
  return result;
}

function stripInlineComment(line) {
  var cut = line.indexOf("//");
  for (var i = 1; i < line.length; i++) {
    if (line.charAt(i) === "#" && /\s/.test(line.charAt(i - 1))) {
      cut = cut < 0 ? i : Math.min(cut, i);
      break;
    }
  }
  return cut >= 0 ? line.slice(0, cut) : line;
}

function looksLikeNote(trimmed, env) {
  if (/[0-9+\-*/^%()=,.$€£¥]/.test(trimmed)) return false;
  var words = trimmed.match(/[A-Za-z_][A-Za-z0-9_]*/g) || [];
  for (var i = 0; i < words.length; i++) {
    var w = words[i];
    var l = w.toLowerCase();
    if (Object.prototype.hasOwnProperty.call(env, w) || BUILTIN_CONSTS[l] || BUILTIN_AGGS[l] || BUILTIN_FUNCS[l])
      return false;
  }
  return true;
}

function evaluate(text) {
  var rawLines = String(text || "").replace(/\r\n/g, "\n").split("\n");
  var env = {};
  var vars = {};
  var blockValues = [];
  var prevValue = null;
  var linesOut = [];
  var hasErrors = false;

  for (var i = 0; i < rawLines.length; i++) {
    var trimmed = rawLines[i].trim();
    var entry = { line: i + 1, kind: "empty" };
    if (trimmed === "") {
      blockValues = [];
    } else if (trimmed.charAt(0) === "#") {
      entry.kind = "heading";
      blockValues = [];
    } else if (trimmed.slice(0, 2) === "//") {
      entry.kind = "comment";
    } else {
      var body = stripInlineComment(rawLines[i]).trim();
      if (body === "") {
        entry.kind = "comment";
      } else {
        var am = body.match(/^(?:let\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=(?!=)\s*(.+)$/);
        if (am) {
          var varName = am[1];
          entry.variable = varName;
          try {
            var valA = parseTokens(tokenize(am[2].trim()), env, blockValues, prevValue);
            var formattedA = formatValue(valA);
            entry.kind = "assignment";
            entry.result = formattedA;
            env[varName] = valA;
            vars[varName] = formattedA;
            prevValue = valA;
            blockValues.push(valA);
          } catch (eA) {
            entry.kind = "error";
            entry.error = eA.message;
            hasErrors = true;
          }
        } else if (looksLikeNote(body, env)) {
          entry.kind = "note";
        } else {
          try {
            var valE = parseTokens(tokenize(body), env, blockValues, prevValue);
            entry.kind = "expression";
            entry.result = formatValue(valE);
            prevValue = valE;
            blockValues.push(valE);
          } catch (eE) {
            entry.kind = "error";
            entry.error = eE.message;
            hasErrors = true;
          }
        }
      }
    }
    linesOut.push(entry);
  }
  return { ok: !hasErrors, lines: linesOut, variables: vars };
}
