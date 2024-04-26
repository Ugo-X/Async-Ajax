// ASYNC AND AJAX
// The following link will take you to an effective video tutorial to learn Aync and Ajax properly(just copy and paste it into your web browser)
// const url =
//   "https://youtube.com/playlist?list=PL1BztTYDF-QPfcEISQoDaYQ0lADgPLNqu&si=CXwbj8WYHz64SYIB";
// SYNCHRONOUS PROGRAMMING
// 1 Javascript is a single threaded progaramming language, which means that it can only process one statement at a time
// 2 it executes code line by line
// 3 if any part of your codes operation has a long operation time, the other lines will have to wait till that previous line is completely process before they can run
// most of Js is synchronous code

// SYNCHRONOUS PROGRAMMING
// 1 In Async the statements are executed asynchronously. This means that a task will not wait for another task to complete for it's execution(an asynchronous program, is none blocking)

// let str = "good morning"
// console.log(str);
// setTimeout(() => {
//   alert('There is a fish in the river')
// }, 2000);
// console.log('have a nice day at work')

// AJAX
// enables us to communicate with remote web servers in an asynchronous way and request for data from a web server, the web server responds and sends the given data in a certain format, which is Json or XML or some other format
// The content we get from our server can  be dynamically added to our webpage, and there is no need for refreshal of the entire web page.
// Ajax- asynchronous javascript and XML (extensible markup language)
// IMPORTANCE OF AJAX
// 1 saves some bandwidth because we are not loading the entire page but trynna input the data that we were able to fetch and populate just one part of our we  page.'
// 2 Better User experience
// 3 interactive webpage

// HOW DO WE MAKE AJAX CALLS TO THE SERVER?
// WE make use of the XMLHttpRequest object to request data from the server asynchronously.

// HOW DO WE MAKE THIS AJAX CALLS??????

// 1, WE CREATE THE XMLHttpRequest Object
// 2, we make the request using the open method that takes in 5 parameters with the method(to request data from a SequencerProvider, we use GET and to send data to a SequencerProvider, we make use of post) and the url(filw location of where we would like to fetch the data) being the most important one.
// 3 async- where you specify if you want to get this data in a synchronous or asynchronous way(if you pass true, you get it in a sunchronous way but if you pass false, you will get it in a synchronous way)
// 4 user parameter is there for the purpose of authentication, some Api need you to be authenticated to access the data they have, so there, you have to pass a user name and password.
// 5 using the send method, we can then send the request to the server Api for get method.
//  if it is POST request, you can send the data using send(string) where you can then parse the data that you want to send as string

// THE RESPONSE OF THE SERVER
// !when you send the request to the ServiceWorkerRegistration, it will provide us with a Response, and you can read that response using the "responseText" property that returns the response as string. If you also want to return the reponse as XMLDocument, you can make use of the "responseXML" property

// !!status - returns the status number of the request
// 200 - OK
// 403 - forbidden
// 404 - not found - reosource not found

const dataContainer = document.getElementById("dataContainer");
const btn = document.getElementById("fetchBtn");

btn.addEventListener("click", getData);

function getData() {
  // 1 create an XMLHttpRequest object\
  let xhr = new XMLHttpRequest();
  // 2 create the request
  xhr.open("GET", "data.txt", true);

  // 3 send the request(to server -)
  xhr.send();
  //4  when the data from the server is not loaded completely, cause sometimes the data can be large, the onprogress property happens
  xhr.onprogress = () => {
    dataContainer.textContent = "loading";
  };
  //5 when the data is loaded completely, onload event occurs. When it happens we want to display our result on
  xhr.onload = () => {
    dataContainer.textContent = xhr.responseText;
  };
}


