//my third page script

var sellang=localStorage.getItem("language");
var selmode=localStorage.getItem("mode");
// Check browser support
function lstorage(){
if (typeof(Storage) !== "undefined") {
    // Store
	var sem=localStorage.getItem("signemail");
   var useremail=localStorage.getItem("uemail");
	                            document.getElementById("printuseremail").innerHTML=useremail;
								 document.getElementById("printusersmail").innerHTML=sem;
								
    // Retrieve
    //var sellang=localStorage.getItem("language");
	
	document.getElementById("demo").innerHTML=sellang;
	//document.getElementById("abc").innerHTML=sellang;
	document.getElementById("mode").innerHTML=selmode;
	
} else {
    document.getElementById("demo").innerHTML = "Sorry, your browser does not support Web Storage...";
}

}


function onclicklinks(){
if( selmode =="video" ){
var videolinks = [
{type:"https://www.beginnertuts.com/", vname:"forbegineersvideotutorials",rating:5},
{type:"http://www.hongkiat.com/blog/web-dev-youtube-channels/", vname:"bestwebtutorials",rating:4},
{type:"https://optimizerwp.com/web-development-tutorial-youtube", vname:"web developementtutorial on youtube",rating:2}]
if(sellang=="css")
{
displayvideolinks();
}
if(sellang=="html")
{
myFunction();
}

if(sellang=="php"){ myFunctionrev();}
function myFunction() {
    videolinks.sort(function(a, b){return a.vname - b.vname});
    displayvideolinks();
}
function myFunctionrev() {

  videolinks.reverse();
    displayvideolinks();
}

function displayvideolinks() {
  document.getElementById("linksshownhere").innerHTML =
  "<li><a href="+videolinks[0].type+">" + " " + videolinks[0].vname + "<br><br><br></a></li>" +
"<li><a href="+videolinks[1].type+">"+ videolinks[1].vname + "<br><br><br></a></li>" +
"<li><a href="+videolinks[2].type+">"+ " " + videolinks[2].vname + "<br><br><br></a></li>" ;
}

}



if( selmode == "ebook" ){
var ebooklinks = [
{type:"http://www.techsupportalert.com/content/my-free-350-page-htmlcssphpmysql-book-get-it-while-you-can.htm", ename:"tech supportalert",rating:5},
{type:"https://amazon.in/Learning-PHP-MySQL-JavaScript-CSS/dp/1449319262", ename:"amezonlearning",rating:4},
{type:"http://freecomputerbooks.com/The-Web-Book.html", ename:"freecomputerbooks(webbook)",rating:3}]
if(sellang=="css")
{
displayebooklinks();
}
if(sellang=="html")
{
myFunction();
}

if(sellang=="php"){ myFunctionrev();}
function myFunction() {
    ebooklinks.sort(function(a, b){return a.ename - b.ename});
    displayebooklinks();
}
function myFunctionrev() {

  ebooklinks.reverse();
    displayebooklinks();
}

function displayebooklinks() {
  document.getElementById("linksshownhere").innerHTML =
  "<li><a href="+ebooklinks[0].type+">" + " " + ebooklinks[0].ename + "<br><br><br></a></li>" +
"<li><a href="+ebooklinks[1].type+">"+ ebooklinks[1].ename + "<br><br><br></a></li>" +
"<li><a href="+ebooklinks[2].type+">"+ " " + ebooklinks[2].ename + "<br><br><br></a></li>" ;
}

}



if( selmode =="blogs" ){
var blogslinks = [
{type:"https://www.w3schools.com", lname:"w3school", rating:5},
{type:"https://book.cakephp.org/", lname:"bookcakeblogs", rating:1},
{type:"https://blog.hubspot.com/marketing/web-design-html-css-javascript", lname:"hubspotblogs",rating:7}]
if(sellang=="css")
{
displayblogslinks();
}
if(sellang=="html")
{
myFunction();
}

if(sellang=="php"){ myFunctionrev();}
function myFunction() {
    blogslinks.sort(function(a, b){return a.rating - b.rating});
    displayblogslinks();
}
function myFunctionrev() {

  blogslinks.reverse();
    displayblogslinks();
}

function displayblogslinks() {
  document.getElementById("linksshownhere").innerHTML =
  "<li><a href="+blogslinks[0].type+">" + " " + blogslinks[0].lname + "<br><br><br></a></li>" +
"<li><a href="+blogslinks[1].type+">"+ blogslinks[1].lname + "<br><br><br></a></li>" +
"<li><a href="+blogslinks[2].type+">"+ " " + blogslinks[2].lname + "<br><br><br></a></li>" ;
}

}

}

//third page script end here

//page 2 script


var useremail=localStorage.getItem("uemail");
var sem=localStorage.getItem("signemail");
	                      function printuseremail() 
	                         {                 
		                          var useremail=localStorage.getItem("uemail");
	                            document.getElementById("printuseremail").innerHTML=useremail;
								var sem=localStorage.getItem("signemail");
								document.getElementById("printuseresmail").innerHTML=sem;
						             }
									 
									 
									 
									 // Check browser support
function validateForm(){
var lang = document.forms["myForm"]["language"].value;
var lmode = document.forms["myForm"]["mode"].value;

 //var lan=getElementById("l1").value;
 
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("language", lang);
	localStorage.setItem("mode", lmode);
	var sem=localStorage.getItem("signemail");
    document.getElementById("abc").innerHTML=sem;
    // Retrieve
	//var sellang=localStorage.getItem("language");
	//var selmode=localStorage.getItem("mode");
	
    //window.alert(sellang+selmode);
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}}



//second page script end here

//first page script

function validatesignupForm(){
var email = document.forms["myForm"]["email"].value;
var pass = document.forms["myForm"]["pwd"].value;

 //var lan=getElementById("l1").value;
 
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("uemail",email);
	localStorage.setItem("upass",pass);
    
    // Retrieve
	var useremail=localStorage.getItem("uemail");
	var userpass=localStorage.getItem("upass");
	
    window.alert(useremail);
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}}

function validatesigninForm()
{
var semail = document.forms["signmyForm"]["semail"].value;
var spass = document.forms["signmyForm"]["spwd"].value;


if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("signemail", semail);
	//localStorage.setItem("mode", lmode);
	var sem=localStorage.getItem("signemail");
	
    if(semail==="ashish1995pbh@gmail.com" &&  spass==="123")
	{
	window.alert(sem);
	}
	else
		return false;
	
    // Retrieve
	//var selmode=localStorage.getItem("mode");
	
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}



}

