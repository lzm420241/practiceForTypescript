//var
var a = 10;
function f() {
    var message = "hello, world";
    return message;
}
function f1() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f1();
g(); // return '11'
function f3() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
        return a;
    }
}
f3();
//# sourceMappingURL=2.variableDeclaration.js.map