// js single thread
// js sync dir

/* const func1 = () => {
    console.log("func1 consolelog 1");
    console.log("func1 console log 2");
   // ok basmadikca asagiya inmiyor 
    alert ("alert message");
}

const func2 = () => {
    console.log("func2 console log 1");
    console.log("func2 console log 2");
}

func1();
func2(); */

/* let x = 10;
console.log(x);
setTimeout(()=>{
    x+= 5;
},1000)

console.log(x);

x+=5;
console.log(x); */

// cikti 15 oluyor eksik veri sync calisma eksikligi buradan kaynaklanmaktadir

// call stack fonksiyonların calisma sirasini gosterir
// call stack mantigi recursion mantigi gibidir
/* function func1()
{
    console.log("ben birinciyim");
    func2();
    console.log("ben tekrar birinciyim")
}

function func2()
{
    console.log("ben ikinciyim");
    func3();
    console.log("ben tekrar ikinciyim")

}

function func3(){
    console.log("ben ucuncuyum");
}

func1(); */

// islem yapilirken ilk once yukaridaki call stack
// fonksiyonlar calistirilir daha sonra arrow functiondaki
// gibi callback functionları queue dan cikartilir

   // CALL BACK FUNCTİONS

const myName = () => {
    console.log("benim adim eren");
}

setTimeout(myName, 3000)
// bir fonksiyon baska bir fonksiyona arguman 
// olarak gelirse callback function denir

setTimeout(() => {
    console.log("benim");
},3000);
// seklindede gösterilebilir

// genelde callback functionlar eventlistenerlar icin kullanilirlar

