

// # Understanding AJAX and Web APIs

// ## Introduction

// AJAX (Asynchronous JavaScript and XML) is a technique that allows web pages to send and receive data from a server asynchronously, without refreshing the entire page. This means that parts of a web page can be updated dynamically, providing a more seamless and responsive user experience.

// One of the main use cases for AJAX is to interact with Web APIs (Application Programming Interfaces). A Web API is a set of rules and protocols that define how different software applications can communicate with each other over the internet.

// ## Web APIs

// A Web API is like a middleman that provides access to data or functionality from a remote server. It acts as an intermediary between your web application and the server's resources. Web APIs typically use a standardized data format like XML or JSON to exchange information.

// In the provided code, we're using the REST Countries API (`https://restcountries.com/v3.1/name/${country}`), which is a Web API that provides data about countries.

// ## The Code

// Let's break down the code and explain each part:

// ```javascript
// const countriesList = document.querySelector(".countries");
// ```

// This line selects an HTML element with the class `"countries"` and stores it in the `countriesList` variable. This element will be used to display the country information retrieved from the API.

// ```javascript
// function getCountry(country) {
//   // 1. Create an XMLHttpRequest object
//   let xhr = new XMLHttpRequest();

//   // 2. Create the request
//   xhr.open("GET", `https://restcountries.com/v3.1/name/${country}`);

//   // 3. Send the request
//   xhr.send();

//   xhr.addEventListener("load", () => {
//     // ...
//   });
// }
// ```

// The `getCountry` function takes a `country` parameter, which is the name of the country we want to retrieve data for.

// 1. An `XMLHttpRequest` object is created using `new XMLHttpRequest()`. This object is used to send and receive data from the server asynchronously.

// 2. The `open` method is called on the `xhr` object to create the request. The first argument (`"GET"`) specifies the HTTP method (in this case, `GET`), and the second argument is the URL of the API endpoint (`https://restcountries.com/v3.1/name/${country}`). The API endpoint includes the country name as a parameter.

// 3. The `send` method is called on the `xhr` object to send the request to the server.

// 4. An event listener is added to the `xhr` object to listen for the `"load"` event. This event is triggered when the server response is fully loaded.

// ```javascript
// xhr.addEventListener("load", () => {
//   // We need to convert from JSON string format into a JavaScript object using JSON.parse()
//   // We will destructure the array
//   let [data] = JSON.parse(xhr.responseText);

//   // This will give you an object with the corresponding country info
//   console.log(data);

//   const html = `
//     <article class="country">
//       <img src="${data.flags.png}" class="country-img" alt="" />
//       <div class="country-data">
//         <h3 class="country-name">${data.name.common}</h3>
//         <h4 class="country-region">${data.region}</h4>
//         <p class="country-row">${data.population}</p>
//         <p class="country-row">${data.languages.eng}</p>
//         <p class="country-row">${data.currencies.name}</p>
//       </div>
//     </article>
//   `;

//   countriesList.insertAdjacentHTML("beforeend", html);
// });
// ```

// Inside the `"load"` event listener:

// 1. The response from the server is received as a JSON string (`xhr.responseText`). To convert this JSON string into a JavaScript object, we use `JSON.parse()`.

// 2. The `JSON.parse` function returns an array, so we use array destructuring (`let [data] = ...`) to extract the first element of the array into the `data` variable.

// 3. The `data` variable now contains an object with information about the requested country.

// 4. A template literal is used to create an HTML string that represents a country card. The country information from the `data` object is interpolated into the HTML string using template literals (`${data.flags.png}`, `${data.name.common}`, etc.).

// 5. Finally, the HTML string is inserted into the `countriesList` element using `insertAdjacentHTML("beforeend", html)`. This appends the country card to the end of the `countriesList` element.

// ```javascript
// // Invoke the getCountry function
// getCountry("nigeria");
// getCountry("usa");
// ```

// These lines invoke the `getCountry` function with the country names "nigeria" and "usa", respectively. This will initiate the AJAX request to the REST Countries API and retrieve data for those countries.

// ## Concepts Explained

// 1. **AJAX (Asynchronous JavaScript and XML)**: A technique that allows web pages to send and receive data from a server asynchronously, without refreshing the entire page.

// 2. **Web API (Application Programming Interface)**: A set of rules and protocols that define how different software applications can communicate with each other over the internet. Web APIs provide access to data or functionality from a remote server.

// 3. **XMLHttpRequest**: A built-in JavaScript object that provides a way to transfer data between a client (web browser) and a server asynchronously. It is the foundation of AJAX requests.

// 4. **REST Countries API**: The API used in the provided code (`https://restcountries.com/v3.1/name/${country}`). It's a public API that provides data about countries in JSON format.

// 5. **Template Literals**: A new way of creating strings in JavaScript, introduced in ES6 (ECMAScript 2015). Template literals allow for string interpolation, which means you can embed expressions within the string using `${expression}`.

// 6. **Destructuring**: A JavaScript syntax that allows you to extract values from arrays or properties from objects into distinct variables.

// 7. **JSON (JavaScript Object Notation)**: A lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is often used for transmitting data between a server and web application.

// By understanding these concepts and the code provided, you'll have a better grasp of how AJAX and Web APIs work, and how to fetch and display data from a remote server on a web page.

// select the container div
const countriesList = document.querySelector(".countries");

function getCountry(country) {
  //1  create a XMLHttp Request object
  let xhr = new XMLHttpRequest();

  // 2 create the request
  xhr.open("GET", `https://restcountries.com/v3.1/name/${country}`);

  // 3 send the request
  xhr.send();

  xhr.addEventListener("load", () => {
    // we need to convert from Json string format into javascript object using JSON.parse()
    // we will destructure the array
    let [data] = JSON.parse(xhr.responseText);
    // this will give you an object with the corresponding country init
    console.log(data);
    const html = ` 
<article class="country">
    <img src="${data.flags.png}" class="country-img" alt="" />
    <div class="country-data">
      <h3 class="country-name">${data.name.common}</h3>
      <h4 class="country-region">${data.region}</h4>
      <p class="country-row">${data.population}</p>
      <p class="country-row">${data.languages.eng}</p>
      <p class="country-row">${data.currencies.name}</p>
</article>
`;
    countriesList.insertAdjacentHTML("beforeend", html);
  });
}

// invoke the get country 
getCountry('nigeria')
getCountry('usa')





