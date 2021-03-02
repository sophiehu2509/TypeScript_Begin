// let say:string = "hello";

// function sum(a:number, b:number): number { 
//     return a + b;
// }
// sum (3,4)
// console.log("324256")

// let nums: number []; 
// // 数组，每一项是数字

// let num: Array<number> = [3, 4, 5]

// let u:object;
// u = {
//     name:'sdf',
//     age:343
// }


// type Gender = "男" | "女"

// type User = {
//     name: string
//     age: number
//     gender: "男" | "女"
// }

// let u: User

// u = {
//     name: "890",
//     age: 34,
//     gender: "男"
// }

// function getUsers(g:Gender): User[] {
//     return [];
// }

 //枚举
enum Gender{
    Male = "帅哥",
    Female = "美女"
 }
 
 let gender: Gender;
 
 gender = Gender.Male;
 gender = Gender.Female;

 function printGenders(){
     const vals = Object.values(Gender);
     vals.forEach(v => {
         console.log(v)
     });
 }
 printGenders();