// Create a function that takes a value as an argument and returns the type of this value.
// You should get the real type of a value (JavaScript typeof doesn't return
// the real valueect type of values and you need to fix that).

function realType(value) {
    switch (typeof (value)) {
        case 'object':
            if (value instanceof Array)
                return 'Array';
            if (value instanceof Date)
                return 'Date';
            if (value instanceof RegExp)
                return 'regexp';
            if (value instanceof String)
                return 'String';
            if (value instanceof Number)
                return 'Number';
            else if (value === null)
                return "null";
            return 'object';
            // valueect literals
        default:
            return typeof (value);
    }
}


console.log(realType([]));