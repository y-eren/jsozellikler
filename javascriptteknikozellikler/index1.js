// js'de oop yapısı
/* 
function Person(name,surname, age)
{
    const obj = {};
    obj.name = name;
    obj.surname = surname;
    obj.age = age;
    obj.fullName = function(){
        return this.name + " " + this.surname;
    }
    return obj;
} */
/* 
const person1 = new Person("John", "Doe", 40);
console.log(person1); */

/* function Person(name,surname, age)
{
   
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function(){
        return this.name + " " + this.surname;
    }
    
} */

// seklinde yeniden cagrilirsa olusturulur.



// veyahut object constructor yöntemide kullanilabilir
// object constructor şekline de oluşturulabilir
/* const person1 = new Object ();
person1.name = "yusuf"
person1.surname = "eren";


console.log(person1);
console.log(person1.name);
console.log(person1.surname); */


// CREATE metodu ile de oluşturulabilir.

//Object.create()

/*  const person = {
   
    name: "yusuf",
    surname: "eren"
    
}

const nesne = Object.create(person);
nesne.name = "ABAB";
nesne.surname = "baba";


console.log(nesne);  */

//---------------------prototype kavramı --------------------------

// bir constructor calistirilirken 

/* function Person(name , age)
{
    this.name = name;
    this.surname = surname;
}
Person.prototype.fullName = function ()
{
    return this.name + " " + this.surname;
} */

// nesne olusturuldugunda protoypedaki fonksiyon
//her nesne icin tekrar olusturulmaz


// object create ile nesne olsuturuldugunda protoypedan
// olusturuluyor in ve hasOwnProperty() kullanılabilir


//computed propert name

/* let prop1 = 'name';
let myObj = {
    [prop1] :'yusuf'
}

console.log(myObj); */

//***************************************** */

// short method syntax

/* const person = {
    name : 'yusuf',
    fullname : function()
    {
        return this.name
    }
    // yerine
    fullname()
    {
        return this.name
    }
} */

//**************************************** */


//object desctructing

/* const person = {
    name : 'yusuf',
    surname : 'eren',
    age: 21,
    fullname ()
    {
        return this.name + "" + this.surname
    }
} */

/* let myVar1 = person.name;
console.log(myVar1);

let myVar2 = person.age;
console.log(myVar2); */
// yerine yazılabilir
/* let { name : myVar1, age: myVar2} = person;
console.log(myVar1);
console.log(myVar2); */

// yerine yazılabilir

/* let { name, age} = person;
console.log(name);
console.log(age) */
// seklindede olabilir


//******************************** */

// spread operator
/* const person = {
    name : 'yusuf',
    surname : 'eren',
    age: 21,
    fullname ()
    {
        return this.name + "" + this.surname
    }
}

let person2 = {...person};
console.log(person2); */

// olursa nesneleri kopyalamak ve birlestirmek icin kullanililabilir


/* const nesne = {...myObj1,abc: 'abcdef',...myObj2}; */
// seklinde birlestirilebiliyor

//********************************* */


//REST OPERATOR

/* const person = {
    name : 'yusuf',
    surname : 'eren',
    age: 21,
    fullname ()
    {
        return this.name + "" + this.surname
    }
}
const {name, ...rest} = person;

console.log(name);
console.log(rest); */

// geri kalan degerler dondurulebiliyor


/* Object.keys(person);
Object.values(person);
Object.entries(person); */
// seklindede kullanilir


//*****************nesne yönelimli programlama************ */

/* function Person(name,surname,age){
    this.name = name;
    this.surname = surname;
    this.age = age;

}

const a = new Person("izzet", "altinmese", 34);
console.log(a.name); */


/* class Person {
    constructor(name,surname, age)
    {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    fullName()
    {
        this.name + " " + this.surname;
    }
} */

/* const a = new Person("izzet", "altinmese", 34); */
// ayni ciktiyi kullanir sadece prrototype kullanacagin
// zaman is karmasiklasmasin diye kullanılır
// class expression class decleration olur classlarsa
// bir fonksiyondur


//