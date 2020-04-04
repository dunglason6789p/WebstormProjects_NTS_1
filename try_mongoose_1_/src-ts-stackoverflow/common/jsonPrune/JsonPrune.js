"use strict";
/*
// JSON.prune : a function to stringify any object without overflow
// two additional optional parameters :
//   - the maximal depth (default : 6)
//   - the maximal length of arrays (default : 50)
// You can also pass an "options" object.
// examples :
//   var json = JSON.prune(window)
//   var arr = Array.apply(0,Array(1000)); var json = JSON.prune(arr, 4, 20)
//   var json = JSON.prune(window.location, {inheritedProperties:true})
// Web site : http://dystroy.org/JSON.prune/
// JSON.prune on github : https://github.com/Canop/JSON.prune
// This was discussed here : http://stackoverflow.com/q/13861254/263525
// The code is based on Douglas Crockford's code : https://github.com/douglascrockford/JSON-js/blob/master/json2.js
// No effort was done to support old browsers. JSON.prune will fail on IE8.

(function () {
    'use strict';

    var DEFAULT_MAX_DEPTH = 6;
    var DEFAULT_ARRAY_MAX_LENGTH = 50;
    var DEFAULT_PRUNED_VALUE = '"-pruned-"';
    var seen; // Same variable used for all stringifications
    var iterator; // either forEachEnumerableOwnProperty, forEachEnumerableProperty or forEachProperty

    // iterates on enumerable own properties (default behavior)
    var forEachEnumerableOwnProperty = function(obj, callback) {
        for (var k in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, k)) callback(k);
        }
    };
    // iterates on enumerable properties
    var forEachEnumerableProperty = function(obj, callback) {
        for (var k in obj) callback(k);
    };
    // iterates on properties, even non enumerable and inherited ones
    // This is dangerous
    var forEachProperty = function(obj, callback, excluded) {
        if (obj==null) return;
        excluded = excluded || {};
        Object.getOwnPropertyNames(obj).forEach(function(k){
            if (!excluded[k]) {
                callback(k);
                excluded[k] = true;
            }
        });
        forEachProperty(Object.getPrototypeOf(obj), callback, excluded);
    };

    Object.defineProperty(Date.prototype, "toPrunedJSON", {value:Date.prototype.toJSON});

    var	cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        meta = {	// table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        };

    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    var prune = function (value, depthDecr, arrayMaxLength) {
        var prunedString = DEFAULT_PRUNED_VALUE;
        var replacer;
        if (typeof depthDecr == "object") {
            var options = depthDecr;
            depthDecr = options.depthDecr;
            arrayMaxLength = options.arrayMaxLength;
            iterator = options.iterator || forEachEnumerableOwnProperty;
            if (options.allProperties) iterator = forEachProperty;
            else if (options.inheritedProperties) iterator = forEachEnumerableProperty
            if ("prunedString" in options) {
                prunedString = options.prunedString;
            }
            if (options.replacer) {
                replacer = options.replacer;
            }
        } else {
            iterator = forEachEnumerableOwnProperty;
        }
        seen = [];
        depthDecr = depthDecr || DEFAULT_MAX_DEPTH;
        arrayMaxLength = arrayMaxLength || DEFAULT_ARRAY_MAX_LENGTH;
        function str(key, holder, depthDecr) {
            var i, k, v, length, partial, value = holder[key];

            if (value && typeof value === 'object' && typeof value.toPrunedJSON === 'function') {
                value = value.toPrunedJSON(key);
            }
            if (value && typeof value.toJSON === 'function') {
                value = value.toJSON();
            }

            switch (typeof value) {
                case 'string':
                    return quote(value);
                case 'number':
                    return isFinite(value) ? String(value) : 'null';
                case 'boolean':
                //@ts-ignore
                case 'null':
                    return String(value);
                case 'object':
                    if (!value) {
                        return 'null';
                    }
                    if (depthDecr<=0 || seen.indexOf(value)!==-1) {
                        if (replacer) {
                            var replacement = replacer(value, prunedString, true);
                            return replacement===undefined ? undefined : ''+replacement;
                        }
                        return prunedString;
                    }
                    seen.push(value);
                    partial = [];
                    if (Object.prototype.toString.apply(value) === '[object Array]') {
                        length = Math.min(value.length, arrayMaxLength);
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value, depthDecr-1) || 'null';
                        }
                        v = '[' + partial.join(',') + ']';
                        if (replacer && value.length>arrayMaxLength) return replacer(value, v, false);
                        return v;
                    }
                    if (value instanceof RegExp) {
                        return quote(value.toString());
                    }
                    iterator(value, function(k) {
                        try {
                            v = str(k, value, depthDecr-1);
                            if (v) partial.push(quote(k) + ':' + v);
                        } catch (e) {
                            // this try/catch due to forbidden accessors on some objects
                        }
                    });
                    return '{' + partial.join(',') + '}';
                case 'function':
                case 'undefined':
                    return replacer ? replacer(value, undefined, false) : undefined;
            }
        }
        return str('', {'': value}, depthDecr);
    };

    //@ts-ignore
    prune.log = function() {
        console.log.apply(console, Array.prototype.map.call(arguments, function(v) {
            //@ts-ignore
            return JSON.parse(JSON.prune(v));
        }));
    };
    //@ts-ignore
    prune.forEachProperty = forEachProperty; // you might want to also assign it to Object.forEachProperty

    if (typeof module !== "undefined") module.exports = prune;
    //@ts-ignore
    else JSON.prune = prune;
}());

export class JSONx {

}
export namespace JSONx{
    export function jsonDeepStringify(value:any):string {
        //@ts-ignore
        return JSON.prune(value)
    }
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
function space(count) {
    var str = "";
    for (var i = 1; i <= count; i++) {
        str += " ";
    }
    return str;
}
function indent(level, spacePerIndent) {
    if (spacePerIndent === void 0) { spacePerIndent = 2; }
    var str = "";
    var tab = space(spacePerIndent);
    for (var i = 1; i <= level; i++) {
        str += tab;
    }
    return str;
}
/**To overcome the issue of JSON.stringify (:only 1 level). (???)*/
function jsonDeepStringify__(obj, indentLevel, spacePerIndent, avoidKeys) {
    if (spacePerIndent === void 0) { spacePerIndent = 2; }
    try {
        //console.log("{");
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            var value = obj[key];
            if (avoidKeys != null && avoidKeys.includes(key)) {
                console.log(indent(indentLevel) + key + ":" + value + "//SKIPPED");
                continue;
            }
            if (value == null) {
                console.log(indent(indentLevel) + key + ":" + "null");
            }
            else if (Array.isArray(value)) {
                console.log(indent(indentLevel) + key + ":" + "[");
                jsonDeepStringifyArray__(value, indentLevel + 1, spacePerIndent, avoidKeys);
            }
            else if (value instanceof Date) {
                console.log(indent(indentLevel) + key + ":" + value.toDateString());
            }
            else if (typeof (value) == "object") {
                console.log(indent(indentLevel) + key + ":" + "{");
                jsonDeepStringify__(value, indentLevel + 1, spacePerIndent, avoidKeys);
            }
            else {
                console.log(indent(indentLevel) + key + ":" + value);
            }
        }
        console.log(indent(indentLevel - 1) + "}");
    }
    catch (err) {
        console.log(err);
    }
}
function jsonDeepStringifyArray__(arr, indentLevel, spacePerIndent, avoidKeys) {
    if (spacePerIndent === void 0) { spacePerIndent = 2; }
    try {
        // console.log("[");
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            if (item == null) {
                console.log(indent(indentLevel) + "null");
            }
            else if (Array.isArray(item)) {
                console.log(indent(indentLevel) + "[");
                jsonDeepStringifyArray__(item, indentLevel + 1, spacePerIndent, avoidKeys);
            }
            else if (item instanceof Date) {
                console.log(indent(indentLevel) + item.toDateString());
            }
            else if (typeof (item) == "object") {
                console.log(indent(indentLevel) + "{");
                jsonDeepStringify__(item, indentLevel + 1, spacePerIndent, avoidKeys);
            }
            else {
                console.log(indent(indentLevel) + item);
            }
        }
        console.log(indent(indentLevel - 1) + "]");
    }
    catch (err) {
        console.log(err);
    }
}
var JSONx;
(function (JSONx) {
    function logJsonDeep(value, spacePerIndent, avoidKeys) {
        if (spacePerIndent === void 0) { spacePerIndent = 2; }
        if (avoidKeys === void 0) { avoidKeys = null; }
        if (value == null) {
            console.log("null");
        }
        else if (Array.isArray(value)) {
            console.log("[");
            jsonDeepStringifyArray__(value, 1, spacePerIndent, avoidKeys);
        }
        else if (typeof (value) == "object") {
            console.log("{");
            jsonDeepStringify__(value, 1, spacePerIndent, avoidKeys);
        }
        else {
            console.log(value);
        }
    }
    JSONx.logJsonDeep = logJsonDeep;
})(JSONx = exports.JSONx || (exports.JSONx = {}));
//# sourceMappingURL=JsonPrune.js.map