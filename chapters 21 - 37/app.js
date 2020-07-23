// ******************************
// CHAPTER # 21 - 25:
// ******************************
// Task # 01 :-
// var firstName = prompt(&quot;Enter Your First Name&quot;);
// var lastName = prompt(&quot;Enter Your Last Name&quot;);
// var fullName = firstName + &quot; &quot; + lastName;
// alert(&quot;Hello &quot; + fullName);
// Task # 02 :-
// var favMobile = prompt(&quot;Enter Your Favourite Mobile Phone Model&quot;);
// document.write(&quot;My favourite phone is: &quot; + favMobile + &quot;&lt;br&gt;Length of
// string: &quot; + favMobile.length);
// Task # 03 :-
// var myString = &quot;Pakistani&quot;;
// document.write(&quot;String: &quot; + myString + &quot;&lt;br&gt;Index of &#39;n&#39;: &quot; +
// myString.indexOf(&quot;n&quot;));
// Task # 04 :-
// var myString = &quot;Hello World&quot;;
// document.write(&quot;String: &quot; + myString + &quot;&lt;br&gt;Last index of &#39;l&#39;: &quot; +
// myString.lastIndexOf(&quot;l&quot;));
// Task # 05 :-
// var myString = &quot;Pakistani&quot;;
// document.write(&quot;String: &quot; + myString + &quot;&lt;br&gt;Character at index 3: &quot; +
// myString.charAt(3));
// Task # 06 :-
// var firstName = prompt(&quot;Enter Your First Name&quot;);
// var lastName = prompt(&quot;Enter Your Last Name&quot;);
// var fullName = firstName.concat(&quot; &quot;,lastName);
// alert(&quot;Hello &quot; + fullName);
// Task # 07 :-
// var city = &quot;Hyderabad&quot;;
// document.write(&quot;City: &quot; + city + &quot;&lt;br&gt;After replacement: &quot; +
// city.replace(&quot;Hyder&quot;,&quot;Islam&quot;));
// Task # 08 :-
// var message = &quot;Ali and Sami are best friends.They play cricket and
// football together.&quot;;

// document.write(&quot;&lt;b&gt;Message:&lt;/b&gt; &quot; + message + &quot;&lt;br&gt;&lt;br&gt;&lt;b&gt;After
// replacement:&lt;/b&gt; &quot;
// + message.replace(/and/g,&quot;&amp;&quot;));
// Task # 09 :-
// var myString = &quot;472&quot;;
// var myNo = Number(myString);
// document.write(&quot;Value: &quot; + myString + &quot;&lt;br&gt;Type: &quot; + typeof(myString)
// + &quot;&lt;br&gt;Value: &quot; + myNo + &quot;&lt;br&gt;Type: &quot; + typeof(myNo));
// Task # 10 :-
// var input = prompt(&quot;Enter Anything&quot;);
// document.write(&quot;User input: &quot; + input + &quot;&lt;br&gt;Upper case: &quot; +
// input.toUpperCase());
// Task # 11 :-
// var input = prompt(&quot;Enter Anything&quot;);
// var titleCase = input.charAt(0).toUpperCase();
// for(var i=1 ; i &lt; input.length ; i++){
// titleCase = titleCase.concat(input.charAt(i));
// }
// document.write(&quot;User input: &quot; + input + &quot;&lt;br&gt;Title case: &quot; +
// titleCase);
// Task # 12 :-
// var num = 35.36 ;
// var myString = num.toString().split(&quot;&quot;);
// myString.splice(myString.indexOf(&quot;.&quot;),1);
// document.write(&quot;Number: &quot; + num + &quot;&lt;br&gt;Result: &quot; + myString.join(&quot;&quot;));
// Task # 13 :-
// var myName = prompt(&quot;Enter Your Name&quot;);
// for(var i=0 ; i &lt; myName.length ; i++){
// if(myName.charCodeAt(i) == 33 || myName.charCodeAt(i) == 44 ||
// myName.charCodeAt(i) == 46
// || myName.charCodeAt(i) == 64){
// alert(&quot;Please enter a valid username&quot;);
// break;
// }
// }
// Task # 14 :-
// var A = [&quot;cake&quot;,&quot;apple pie&quot;,&quot;cookie&quot;,&quot;chips&quot;,&quot;patties&quot;];
// var item = prompt(&quot;Welcome to ABC Bakery. What do you want to order
// sir/ma&#39;am?&quot;);
// item = item.toLowerCase();
// if(A.indexOf(item) == -1){

// document.write(&quot;We are sorry. &quot; + item + &quot; is &lt;b&gt;not
// available&lt;/b&gt; in our bakery&quot;);
// }
// else{
// document.write(item + &quot; is &lt;b&gt;available&lt;/b&gt; at index &quot; +
// A.indexOf(item) + &quot; in our bakery&quot;);
// }
// Task # 15 :-
// var password = prompt(&quot;Enter Your Password&quot;);
// if(password.length &gt;= 6){
// if(password.charCodeAt(0) &gt;= 48 &amp;&amp; password.charCodeAt(0) &lt;=
// 57){
// document.write(&quot;Entered password: &quot; + password
// + &quot;&lt;br&gt;Password cannot begin with a number &lt;br&gt;Please
// enter a valid password&quot;);
// }
// else{
// for(var i = 0 ; i &lt; password ; i++){
// if(password.charCodeAt(i) &gt;= 48 &amp;&amp;
// password.charCodeAt(i) &lt;= 57){
// if((password.charCodeAt(i) &gt;=65 &amp;&amp;
// password.charCodeAt(i) &lt;=90)
// || (password.charCodeAt(i) &gt;=97 &amp;&amp;
// password.charCodeAt(i) &lt;=122)){
// alert(&quot;ok&quot;);
// break;
// }
// else{
// alert(&quot;Please enter a valid
// password with characters&quot;)
// }
// }
// else{
// alert(&quot;Please enter a valid password
// with numbers&quot;)
// }
// }
// }
// }
// else{
// document.write(&quot;Entered password: &quot; + password
// + &quot;&lt;br&gt;Password must contain atleast 6 characters &lt;br&gt;Please
// enter a valid password&quot;);
// }
// Task # 16 :-
// var university = &quot;University of Karachi&quot;;
// university = university.split(&quot;&quot;);
// for(var i = 0 ; i &lt; university.length ; i++){
// document.write(university[i] + &quot;&lt;br&gt;&quot;);
// }

// Task # 17 :-
// var myInput = prompt(&quot;Enter Anything&quot;);
// document.write(&quot;User input: &quot; + myInput + &quot;&lt;br&gt;Last character of
// input: &quot;
// + myInput.charAt(myInput.length-1));
// Task # 18 :-
// var myText = &quot;The quick brown fox jumps over the lazy dog&quot;;
// document.write(&quot;Text: &quot; + myText + &quot;&lt;br&gt;&quot;);
// myText = myText.toLowerCase();
// var count = 0 ;
// for (var i = 0; i &lt; myText.length; i++) {
// if (myText.slice(i, i + 3) === &quot;the&quot;) {
// count++;
// }
// }
// document.write(&quot;There are &quot; + count + &quot; occurrence(s) of word &#39;the&#39;&quot;);

// ******************************
// CHAPTER # 26 - 30:
// ******************************

// Task # 01 :-
// var num = prompt(&quot;Enter any positive integer&quot;);
// document.write(&quot;number: &quot; + num + &quot;&lt;br&gt;round off value: &quot; +
// Math.round(num) + &quot;&lt;br&gt;floor value: &quot;
// + Math.floor(num) + &quot;&lt;br&gt;ceil value: &quot; + Math.ceil(num));
// Task # 02 :-
// var num = prompt(&quot;Enter any negative floating point number&quot;);
// document.write(&quot;number: &quot; + num + &quot;&lt;br&gt;round off value: &quot; +
// Math.round(num) + &quot;&lt;br&gt;floor value: &quot;
// + Math.floor(num) + &quot;&lt;br&gt;ceil value: &quot; + Math.ceil(num));
// Task # 03 :-
// var num = -4 ;
// document.write(&quot;The absolute value of &quot; + num + &quot; is &quot; +
// Math.abs(num));
// Task # 04 :-

// var dice = Math.random()*6 ;
// document.write(&quot;random dice value: &quot; + Math.ceil(dice));
// Task # 05 :-
// var coin = Math.random()*2 ;
// if(Math.ceil(coin) == 1){
// document.write(Math.ceil(coin) + &quot;&lt;br&gt;random coin value:
// Tails&quot;);
// }
// else{
// document.write(Math.ceil(coin) + &quot;&lt;br&gt;random coin value:
// Heads&quot;);
// }
// Task # 06 :-
// var randomNo = Math.random()*100;
// document.write(&quot;random number between 1 and 100: &quot; +
// Math.ceil(randomNo));
// Task # 07 :-

// Task # 08 :-
// var secretNo = Math.random()*10;
// secretNo = Math.ceil(secretNo);
// var guessNo = prompt(&quot;Enter a number between 1 and 10&quot;);
// if(guessNo == secretNo){
// alert(&quot;Congratulations! You guess the right number&quot;);
// }
// else{
// alert(&quot;Try again!&quot;);
// }

// ******************************
// CHAPTER # 31 - 34:
// ******************************

// Task # 01 :-
// var dateTimeNow = new Date() ;
// document.write(dateTimeNow) ;

// Task # 02 :-
// var monthNames = [&quot;January&quot;,&quot;Febuary&quot;,&quot;March&quot;,&quot;April&quot;,&quot;May&quot;,&quot;June&quot;
// ,&quot;July&quot;,&quot;August&quot;,&quot;September&quot;,&quot;October&quot;,&quot;November&quot;,&quot;December&quot;];
// var dateTimeNow = new Date();
// var month = dateTimeNow.getMonth();
// alert(&quot;Current month: &quot; + monthNames[month]);
// Task # 03 :-
// var dayNames = [&quot;Sun&quot;,&quot;Mon&quot;,&quot;Tue&quot;,&quot;Wed&quot;,&quot;Thu&quot;,&quot;Fri&quot;,&quot;Sat&quot;];
// var dateTimeNow = new Date();
// var day = dateTimeNow.getDay();
// alert(&quot;Today is &quot; + dayNames[day]);
// Task # 04 :-
// var dateTimeNow = new Date();
// var day = dateTimeNow.getDay();
// if(day == 0 || day == 6){
// document.write(&quot;It’s Fun day&quot;);
// }
// Task # 05 :-
// var dateTimeNow = new Date();
// var date = dateTimeNow.getDate();
// if(date &lt; 16){
// document.write(&quot;First fifteen days of the month&quot;);
// }
// else{
// document.write(&quot;Last days of the month&quot;)
// }
// Task # 06 :-
// var dateTimeNow = new Date() ;
// var milli = dateTimeNow.getTime()/1000/60;
// document.write(&quot;Current Date: &quot; + dateTimeNow + &quot;&lt;br&gt;Elapsed
// milliseconds since January 1,1970: &quot;
// + dateTimeNow.getTime() + &quot;&lt;br&gt;Elapsed minutes since January 1,1970: &quot;
// + milli) ;
// Task # 07 :-
// var dateTimeNow = new Date();
// var hours = dateTimeNow.getHours();
// if(hours &lt; 12){
// document.write(&quot;It&#39;s AM&quot;);
// }
// else{
// document.write(&quot;It&#39;s PM&quot;)
// }

// Task # 08 :-
// var laterDate = new Date(&quot;Dec 31, 2020&quot;);
// document.write(&quot;Later date: &quot; + laterDate);
// Task # 09 :-
// var startDate = new Date(&quot;Apr 25, 2020&quot;);
// var dateTimeNow = new Date();
// var millisD = startDate.getTime();
// var millidTN = dateTimeNow.getTime();
// var diff = milliDTN - milliSD;
// var days = diff/1000/60/60/24;
// alert(Math.floor(days) + &quot; days have passed since 1st Ramadan,2020&quot;);
// Task # 10 :-
// var dateTimeNow = new Date();
// var begin2015 = new Date(&quot;Jan 01, 2015&quot;);
// var millidTN = dateTimeNow.getTime();
// var millib2015 = begin2015.getTime();
// var diff = millidTN - millib2015;
// var seconds = diff/1000;
// document.write(&quot;On reference date &quot; + dateTimeNow + &quot;,&lt;br&gt;&quot; +
// Math.floor(seconds)
// + &quot; seconds had passed since beginning of 2015&quot;);
// Task # 11 :-
// var dateTimeNow = new Date();
// ******************************
// CHAPTER # 35 - 38:
// ******************************
// Task # 01 :-
// var a = new Date();
// document.write(a);
// Task # 02 :-
// function abc(a, b) {
//   document.write("Hello :" + a + " " + b);
// }
// var a = prompt("enter first name");
// var b = prompt("enter last name");
// abc(a, b);
// Task # 03 :-
// function abc(a) {
//   return "Sum of two numbers is :" + a;
// }
// var a = prompt("enter first name");
// var b = prompt("enter last name");
// // var c = +a + +b;
// var c = Number(a) + Number(b);
// document.write(abc(c));
// Task # 04 :-
// function abc(a, b, operator) {
//   if (operator == "+") {
//     var c = Number(a) + Number(b);
//     return "Sum of two numbers is :" + c;
//   } else if (operator == "-") {
//     var c = Number(a) - Number(b);
//     return "Subtraction of two numbers is :" + c;
//   } else if (operator == "*") {
//     var c = Number(a) * Number(b);
//     return "multiplication of two numbers is :" + c;
//   } else if (operator == "/") {
//     var c = Number(a) / Number(b);
//     return "division of two numbers is :" + c;
//   } else {
//     return "Please enter valid operator '+,-,*,/'";
//   }
// }
// var a = prompt("enter first name");
// var b = prompt("enter last name");
// var operator = prompt("enter operator");
// document.write(abc(a, b, operator));
// Task # 05 :-
// function abc(a) {
//   var c = a ** 2;
//   document.write("square of number " + a + " is : " + c);
// }
// var a = Number(prompt("enter Number"));
// abc(a);
// Task # 06 :-
// function abc(a) {
//   if (a < 0) {
//     return -1;
//   }
//   // If the number is 0, its factorial is 1.
//   else if (a == 0) {
//     return 1;
//   }
//   // Otherwise, call the recursive procedure again
//   else {
//     return a * abc(a - 1);
//   }
// }
// var a = Number(prompt("enter Number"));
// document.write(abc(a));
// Task # 07 :-
// function abc(a, b) {
//   for (var i = a; i <= b; i++) {
//     document.write(i + "<br>");
//   }
// }
// var a = prompt("enter first name");
// var b = prompt("enter last name");
// abc(a, b);
// Task # 08 :-
// function function1(Base, Perpendicular) {
//   var Hypotenuse = Base ** 2 + Perpendicular ** 2;
//   document.write("Hypotenuse is : " + Hypotenuse + "<br>");
//   function function2(Hypotenuse) {
//     var c = Hypotenuse ** 2;
//     document.write("Square of Hypotenuse is : " + c + "<br>");
//   }
//   function2(Hypotenuse);
// }
// var Base = prompt("enter first name");
// var Perpendicular = prompt("enter last name");
// function1(Base, Perpendicular);
// Task # 09 :-
// function function1(Base, Perpendicular) {
//   var Hypotenuse = Base ** 2 + Perpendicular ** 2;
//   document.write("Hypotenuse is : " + Hypotenuse + "<br>");
//   function function2(Hypotenuse) {
//     var c = Hypotenuse ** 2;
//     document.write("Square of Hypotenuse is : " + c + "<br>");
//   }
//   function2(Hypotenuse);
// }
// var Base = prompt("enter Base");
// var Perpendicular = prompt("enter Height");
// function1(Base, Perpendicular);
// Task # 10 :-
// function function1(Width, Height) {
//   var a = Width * Height;
//   document.write("Area of square is : " + a + "<br>");
// }
// var Width = 2;
// var Height = 3;
// function1(2, 3);
// function1(Width, Height);
// Task # 11 :-
// function abc(a) {
//   document.write("your string is :" + a + "<br>");
//   document.write("Upper case of your string is :" + a.toUpperCase());
// }
// var a = prompt("enter first name");
// abc(a);

// Task # 12 :-
// function find_longest_word(text) {
//   let wordArray = text.split(" ");
//   let maxLength = 0;
//   let result = "";

//   for (let i = 0; i < wordArray.length; i++) {
//     if (wordArray[i].length > maxLength) {
//       maxLength = wordArray[i].length;
//       result = wordArray[i];
//     }
//   }

//   return result;
// }
// document.write(find_longest_word("Web Development Tutorial"));
// Task # 13 :-
// function char_count(str, letter) {
//   var letter_Count = 0;
//   for (var position = 0; position < str.length; position++) {
//     if (str.charAt(position) == str) {
//       letter_Count += 1;
//     }
//   }
//   return letter_Count;
// }

// document.write(char_count("JSResourceS.com", "o"));

// Task # 14 :-
// function calcCircumference(r) {
//   var a = 2 * 3.142 * r;
//   document.write("Circumference of circle is :" + a + "<br>");
// }
// var r = prompt("enter Radius");
// calcCircumference(r);

// function calcArea(rr) {
//   var b = 3.142 * rr ** 2;
//   document.write("Area of circle is :" + b);
// }
// var rr = prompt("enter Radius");
// calcArea(rr);
