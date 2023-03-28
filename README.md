﻿# JavaScript-form-validation
Create 3 HTML pages ( index.html, login.html, dashboard.html ) and create JAVASCRIPT files for the index.html and the login.html.
The index.html will serve as a registration page containing 6 input fields 
( 
Input 1: type text should take first name give it an id in order to target it's value,
Input 2: type text should take last name give it an id in order to target it's value,
Input 3: should be a select dropdown of two option => male, female. to take the gender give it an id in order to target it's value,
Input 4: type text should take country give it an id in order to target it's value,
Input 5: type email should take email give it an id in order to target it's value,
Input 6: type password should take password give it an id in order to get it's value.
) and 1 submit button,
onclick of the submit button let it call a function,
the function called will get all the values in the 6 inputs element, 
assign each value gotten to a variable for easy readability then check,

===> if the email and the password is not empty then create a variable holding an object, the object should have keys and values in respective of the data gotten from the inputs EG ( 
const userData = { 
first_name:  // the value gotten from the first name input,
last_name:  // the value gotten from the last name input,
email:  // the value gotten from the email input,
password:  // the value gotten from the password input,
gender:  // the value gotten from the gender input,
country:  // the value gotten from the country input,
}
).
after this store the created object above to localstorage EG (
localstorage.setItem("// the key to store the data",  JSON.stringify(// the object name created above))
).
then change the directory of the current page to the login.html file using the syntax below
widnow.location.href = "login.html".

===> else if the email or the password is empty then alert("please input email and password")





In the login.html page create two inputs (
Input 1: type email takes email give it an id in order to target it's value,
Input 2: type password takes password give it an id in order to get it's value.
) and a login button,
onclick of the login button it calls a function,
in the function get the value from the email and password input and get back the data you stored in the localstorage the other time and purify it EG (
JSON.parse(localstorage.getItem("// the key used to store the data"))
)
after that check 

===> if the email value and the password value gotten from the input is equals the email and password key value gotten from the localstorage, then change the current location from login.html to the third page which is dashboard.html with the same syntax used earlier to change location RECALL (
window.location.href = "dashboard.html"
) and then alert("welcome to your dashboard")

===> else alert("email or password not correct")
