const arr = [6, "eren", function() {console.log("ilginc bir ozellik")}];

arr[2]();


const myObj =  {
    age: 5,
    name: "Yusuf",
    func : function() {console.log("obje elementi");}
};

myObj.func();

console.log(20 + (function(){return 10})()); //IIFE 
//  İMMEDIATLY İNVOKABLE FUNCTİON EXPERESSİON
// DEGİSKENLER NE YAPIYORSA FONKSİYONLARDA YAPABİLİYOR

// function expression vs function declaration
// declaration degiskene atanırsa expression olmuş oluyor
const square = function (num)
{
    return num * num;
}
// fonksiyon ismi genelde kullanılmaz

console.log(square(5));


//function expression is not hoisted
// function expression can be ananomyous

const ekle = function (num, func)
{
    console.log(num + func());
}

ekle(10, function(){
    return 5;
})

//------------------------------------------
const myFunc = function (num) {
    return function toDouble(){
        console.log(num *2 );
    };
}

myFunc(4)();

//------------------------------------------

//IIFE immediately invokable function expression

const sum = function ()
{
    console.log(5+12);
}();

console.log(sum); // zaten cagriliyor

/* function adam()
{
    console.log(5 + 12);
}() // bu şekilde kullanilimaz

// EGER KULLANMAK İSTİYORSAN 
(function ()
{
    console.log(5 +12);
})();
// BU SEKİLDE OLMASI GEREKİYOR
//cagrilmadan calisiyor */



