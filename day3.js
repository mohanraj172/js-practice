
//String method
let username = "mohan";
console.log(usrename.charAt(1));
console.log(usrename.length);
usrename = usrename.trim();//trim any white space
usrename = usrename.toupperCase();
usrename = usrename.toLowerCase();
usrename = usrename.startWith(""); //it adding white space return true
usrename = usrename.endsWith("");
usrename = usrename.includes("");// it middle with white space return true
//example
let number = "123-456-789"
number = number.replaceAll("-","/");//it remove any space or symbles
number = number.padStrat(20,"0"); //it added the lingth of addding zero of the front
number = number.padend(20,"0");//it added zero  end of the string .
//slice(strat,end);
//slice method
const firstname = "FRON TEND"
let fname = firstname.slice(0,2);//we can first zero strat the string index then second value is end
console.log(fname);
//example for slice method
const email = "mohan@gmail.com"
let usrename = email.slice(0,email.indexOf("@")); 
let Nname = email.slice(email.indexOf("@")+1); 
console.log(usrename);
console.log(Nname);
//method chaning
var user = widow.prompt("enter the usrename");
user = user.trim().charAt(0).toUppercase()+user.trim().slice(1).toLowercase();
console.log(user);