//////////////////////////////////////////////////////////////////////////////
// Library of General Functions
//////////////////////////////////////////////////////////////////////////////

// curry: take any function and make it curryable
var curry = function (fn, fnLength) {
    fnLength = fnLength || fn.length;
    return function () {
        var suppliedArgs = Array.prototype.slice.call(arguments);
        if (suppliedArgs.length >= fn.length) {
            return fn.apply(this, suppliedArgs);
        } else if (!suppliedArgs.length) {
            return fn;
        } else {
            return curry(fn.bind.apply(fn, [this].concat(suppliedArgs)), fnLength - suppliedArgs.length);
        }
    };
};
 
/**
* compose 
*/
var compose = function() {
    var funcs = arguments;
    return function() {
        var args = arguments;
        for (var i = funcs.length; i --> 0;) {
            args = [funcs[i].apply(this, args)];
        }
        return args[0];
    };
};

/**
* reduce 
*/
var reduce = curry(function(func, init, xs) {
    return xs.reduce(func, init);
});

/**
* map 
*/
var map = curry(function(func, xs){
    return xs.map(func);
});

/**
* add 
* return the addition of a and b
*/
//+ add :: a -> b -> a | b
var add = curry(function(a, b) {
    return a + b;
});

/**
* splitN
* return the nth substring of split about expr 
*/
//+ splitN :: expr -> int -> str -> str 
var splitN = curry(function(expr, n, str) {
    return str.split(expr)[n];
});

/** 
* monthWord
* give a number, return the month as a word 
*/
//+ monthWord :: int -> str 
var monthWord = (function(){
    var monthWords = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
    return function(i) {
        return monthWords[parseInt(i, 10) - 1];
    };
}());

/**
* array2str 
* collapse an array down to a string 
*/
//+ array2str : [a] -> str
var array2str = function(xs) {
    return reduce(add, "", xs);
};

/**
* htmlTagger
* wrap a string in html tags 
*/
//+ htmlTagger :: tag (str) -> str -> str 
var htmlTagger = curry(function(tag, str) {
    return '<' + tag + '>' + str + '</' + tag + '>';
});

/**
* htmlAddAttribute 
* add an attribute="value" string to html element 
*/
//+ htmlAddAttribute :: str -> str -> str -> str 
var htmlAddAttribute = curry(function(attr, val, str) {
    var regex = />/;
    if (str.match(regex)) {
        return str.replace(regex, ' ' + attr + '="' + val + '">');
    }
    return str;
});

//////////////////////////////////////////////////////////////////////////////
// Application Specific Code
//////////////////////////////////////////////////////////////////////////////

// raw data 
var rawMonths = ['2010-10', '2011-01', '2011-12', '2012-05'];

// option tagger 
var optionTagger = htmlTagger('option');

// year months
var month = splitN('-', 1);
var year = splitN('-', 0);

// need to make a nice date 
var pretyDate = function(uglyDate) {
    return monthWord(month(uglyDate)) + " " + year(uglyDate);
};

// add value tag 
var addValue = htmlAddAttribute('value');

// generate a full option with value and correctly formatted display date
var fullOption = function(uglyDate) {
    return compose(addValue(uglyDate), optionTagger, pretyDate)(uglyDate);
};

// create html string of options for each year-month string in an array. 
var dateOptions = compose(array2str, map(fullOption));
console.log(dateOptions(rawMonths));

