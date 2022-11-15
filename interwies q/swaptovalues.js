// #include<stdio.h>
// int main()
// {
//     int a = 10, b = 20;
//     printf("before swaping values a = %d b = %d",a,b);
//     a = a + b;  //30
//     b = a - b; // 30-10 = 20
//     a = a - b; // 30-20  = 10
//     printf("after swaping values a = %d b = %d ",a,b);

// }


// function swapValue(a,b){
//     console.log("before swaping a and b",a,b)

//     a = a+b;
//     b = a-b;
//     a = a-b;

//     console.log("after swaping a and b", a,b)
// }

// swapValue(50,30)


function reverseString(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinString = reverseArray.join("");
    console.log("reverse String : ",joinString)
}
reverseString("hardik")