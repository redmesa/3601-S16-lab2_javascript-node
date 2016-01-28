// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.lastPosition = function(str){
    return str.length - 1;
};

exports.gpaCalculator = function(str){
    if ((str == "A") || (str == "a")){
        return 4;
    }
    if ((str == "A-") || (str == "a-")){
        return 3.7;
    }
    if ((str == "B+") || (str == "b+")){
        return 3.33;
    }
    if ((str == "B") || (str == "b")){
        return 3;
    }
    if ((str == "B-") || (str == "b-")){
        return 2.70;
    }
    if ((str == "C+") || (str == "c+")){
        return 2.3;
    }
    if ((str == "C") || (str == "c")){
        return 2;
    }
    if ((str == "C-") || (str == "c-")){
        return 1.7;
    }
    if ((str == "D+") || (str == "d+")){
        return 1.3;
    }
    if ((str == "D") || (str == "d")){
        return 1;
    }
    if ((str == "D-") || (str == "d-")){
        return 0.7;
    }
    else return 0;
};
exports.gpaTotal = function(num1, num2, num3) {
    return ((num1 + num2 + num3) / 3);
};