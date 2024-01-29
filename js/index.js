//console.log("hi")
// a=10
// b=20
// console.log(Math.max(a,b))

// a=-20.78
// console.log(Math.floor(a))
// console.log(Math.ceil(a))

/* program to find quadratic rootx* */
// const a=10,b=8,c=30;
// let x1= ((-b+Math.sqrt(b*b-4*a*c))/(2*a))
// let x2= ((-b-Math.sqrt(b*b-4*a*c))/(2*a))
// console.log(x1)
// console.log(x2)

// let a='the time is 12\'0 clock'
// let b="the kalam said do it"
// console.log(a,b)

// let a1= Number(prompt("Enter value"))
// let a2= Number(prompt("Enter value"))
// console.log(`addition is ${a1} and ${a2} is ${a1+a2}`)

/*let str1=prompt()
let str2=str1.split('').reverse().join('')
if (str1==str2) console.log("Success")
else
console.log("fail")*/

/*var x=5
if (x<10)
console.log("less ")
else
console.log("greather")*/

/*const inp=prompt("Enter age")
if(inp>=18)
{
    console.log("eligible")
}
else if(inp<18)
{
    console.log("not eligible")
}
else{
    console.log("invalid")

}*/
/*const inp=prompt("enter first number")
const inp1=prompt("enter second number")
if(inp>inp1)
{
    console.log("inp is greather than inp1")
}
else if(inp<inp1)
{
    console.log("inp is less thna inp1")
}
else{
    console.log("equal")
}*/

 /*const gender=prompt("enter criteria")
 if (gender=="male") 
 {  
    const inp=prompt("enter age")
    if(inp>=18)
    {
        print("eligible")
    }
    else
    {
        print("not")
    }

 }*/
/*const role=prompt("enter role")
 switch((role)){
    case "Teacher":
        console.log("hello teacher");
    case "Principal":
        console.log("hello principal");
    case "teacher":
        console.log("hello teacher");
    case "staff":
         console.log("hello staff");
        default:console.log("Wrong")
 }*/

/* let num=prompt("Enter a number")
 while(num>0)
 {
    if(num%2==0)
    {
        console.log(num)
    }
    console.log(num)

    
   
 }*/
 /*let str=prompt("enter string")
 i=0
 while(i<=str.length)
 {
    if (i%2==0)
    {
    console.log(str[i])
    }
    i++;
 }*/
 /*for(let i=20;i>=0;i--)
 {
    if(i%2==0)
    {
        console.log(i)
    }

 }*/
 /*let arr=[2,3,5,7,8,6]
for(let i=0;i<arr.length-1;i++)
{
    console.log(arr[i])
}*/

/*let str=prompt("enter string")*/
/*for(i=str.length;i>=0;i-=3)
{
   
        console.log(str[i])
    
}*/
/*str.split('').reverse().forEach(function(val,i)
{
    if((i+1)%3==0)
    {
        console.log(val)
    }

})*/

window.onload=init;
function init()
{
    
/*const p1=document.getElementById('pa')
console.log(p1)
p1.textContent="hi sanket"
console.log(p1)
p1.innerText="sanket is to much awsome boy"
console.log(p1)
p1.innerHTML="<i>sanky my love</i>"*/
p1=document.getElementById('pa2')

}
let c=0;
function inc1()
{
    /*c=c+1;*/
    c=c+2
     
    p1.textContent=c;
}
function dec1()
{
    c=c-1
    if(c<0)
    {
        alert("invalid")
    }
    else
    {
    p1.textContent=c;
    }
}
function reset()
{
   
    
    c=0;
    p1.textContent=c;
}