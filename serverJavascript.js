// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.lastPosition = function(str){
    return str.length - 1;
};

exports.gpaCalculator = function(str, num){
    if ((str == "A") || (str == "a")){
        return (4 * num);
    }
    if ((str == "A-") || (str == "a-")){
        return (3.7 * num);
    }
    if ((str == "B+") || (str == "b+")){
        return (3.33 * num);
    }
    if ((str == "B") || (str == "b")){
        return (3 * num);
    }
    if ((str == "B-") || (str == "b-")){
        return (2.70 * num);
    }
    if ((str == "C+") || (str == "c+")){
        return (2.3 * num);
    }
    if ((str == "C") || (str == "c")){
        return (2 * num);
    }
    if ((str == "C-") || (str == "c-")){
        return (1.7 * num);
    }
    if ((str == "D+") || (str == "d+")){
        return (1.3 * num);
    }
    if ((str == "D") || (str == "d")){
        return (1 * num);
    }
    if ((str == "D-") || (str == "d-")){
        return (0.7 * num);
    }
    else return 0;
};
exports.attemped = function(num1, num2, num3){
    return (parseInt(num1) + parseInt(num2) + parseInt(num3));
};

exports.gpaTotal = function(num1, num2, num3, num4) {
    return ((parseInt(num1)+parseInt(num2)+parseInt(num3))/ parseInt(num4)).toFixed(2);
};