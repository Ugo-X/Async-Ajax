// CALLBACK HELL
// ## Callback Hell: A Descent into Nested Complexity ALSO KNOWN AS PYRAMID OF DOOM

// In the world of asynchronous programming, where operations don't happen instantaneously, callback functions are essential tools for handling the results when they eventually become available. However, there's a potential pitfall that awaits the unwary: **callback hell**.

// **What is Callback Hell?**

// Imagine you're making soup. You need to boil water, chop vegetables, and add them in a specific order. In a well-organized kitchen, you follow these steps sequentially. But what if, instead of focusing on one task at a time, you started everything simultaneously, delegating each step to a different helper?

// Callback hell is like this chaotic kitchen. It arises when you use nested callback functions to manage asynchronous operations. Each callback relies on the completion of the previous one before it can execute, leading to a deeply indented structure of functions, one inside the other.

// **Disadvantages and Cons of Callback Hell:**

// - **Readability Nightmare:** The nested structure makes the code incredibly difficult to follow. Imagine the soup recipe with instructions buried within instructions, making it nearly impossible to understand the overall flow.
// - **Maintenance Mayhem:** Modifying or debugging such code becomes a frustrating exercise in deciphering the chain of callbacks. Fixing one part might break another, like accidentally adding onions before the water boils!
// - **Error Handling Escapades:** Tracking down errors in callback hell is like searching for a missing ingredient in a messy kitchen. It's hard to pinpoint where things went wrong, and debugging becomes a time-consuming ordeal.
// - **Testing Tribulations:** Unit testing code with deeply nested callbacks can be a nightmare. Each test needs to mock the entire chain of callbacks, making it complex and error-prone.

// **A Glimpse into the Mess (Example):**

// The provided code snippet (lines 1-18) offers a humorous (yet cautionary) example of callback hell. It simulates making soup with nested callbacks, highlighting how seemingly simple tasks become entangled in a web of dependencies.

// **The Way Out: Promises and Async/Await**

// Thankfully, there are more peaceful ways to manage asynchronous operations. Promises and Async/Await offer more structured and readable approaches:

// - **Promises:** Promises provide a mechanism to handle the eventual completion (or failure) of an asynchronous operation. They offer a cleaner way to chain operations and handle errors in a more controlled manner.
// - **Async/Await:** Async/Await builds upon Promises, allowing you to write asynchronous code in a more synchronous-looking style. It uses `async` and `await` keywords to make code appear more linear, improving readability and maintainability.

// **Conclusion:**

// Callback hell might seem manageable for simple scenarios, but as your codebase grows and involves more asynchronous operations, it quickly becomes a tangled mess. By embracing Promises and Async/Await, you can create cleaner, more maintainable code that avoids the pitfalls of callback hell, leading to a well-organized and efficient "kitchen" for your asynchronous tasks.

// FURTHER NOTES
// ## Understanding Callback Hell and Alternatives

// This code demonstrates the concept of **callback hell** and introduces alternative approaches to handle asynchronous operations in a more readable way.

// **1. Callback Hell Example (Lines 1-18)**

// - This code simulates preparing soup with nested callbacks. It's a humorous analogy, but it highlights the issue:
//   - Each step (boiling water, chopping, adding ingredients) is wrapped in a separate function with a nested `setTimeout` to simulate delays.
//   - Each nested callback relies on the previous one to complete, leading to a deeply indented structure that becomes difficult to read and maintain as complexity grows (like a pot overflowing with ingredients!).

// **2. Why Promises and Async/Await Were Invented (Line 19)**

// - The comment accurately explains the motivation for Promises and Async/Await. Callback hell can make code hard to follow and reason about, especially with many asynchronous operations chained together.

// **3. Improved Approach with Event Listener (Lines 20-38)**

// - This section demonstrates a more manageable way to achieve a similar effect without callback hell:
//   - It uses standard DOM manipulation techniques to select elements with specific classes.
//   - It attaches an event listener to the button (`btn`) that waits for a click event.
//   - When clicked, the code executes a series of steps to change the color of three headings sequentially:
//     - It waits for 2 seconds using `setTimeout`.
//     - Inside the callback, it changes the color of heading1.
//     - Another nested `setTimeout` waits for 1 second.
//     - Inside this nested callback, it changes the color of heading2.
//     - Yet another nested `setTimeout` waits for 1 second.
//     - Finally, it changes the color of heading3.

// **Key Points:**

// - While this approach is better than callback hell for simple cases, it can still become cumbersome with many asynchronous tasks.
// - Promises and Async/Await provide cleaner ways to manage asynchronous operations in a more sequential and readable manner.

// **Additional Notes:**

// - The original code snippet about fetching data is not directly related to the callback hell example, but it highlights a common scenario where asynchronous operations (like AJAX requests) can lead to callback hell.
// - Fetching data from a server using techniques like AJAX or `fetch` would involve similar concepts, but with additional considerations for handling successful responses, errors, and data parsing.

// I hope this explanation clarifies the concepts of callback hell and alternative approaches!

// THE EXAMPLE

// Here we are primarily concerned with how we handle the data that is returned when the browser handles the functionality given to it(fetch Data, Get Geolocation, set)
// The order of this call back hell would be as follows
// 1 boiling
// 2 chopping carrots
// 3 done boiling
// 4 add carrots
// 5 chop onion
// 6 carrots done
// 7 onion done
// 8 add onion
// 9 soup is done
boilWater();
console.log("chopping carrot");
function boilWater() {
  console.log("boiling...");
  setTimeout(() => {
    console.log("done boiling");
    console.log("add carrots");
    setTimeout(() => {
      console.log("carrots done");
      setTimeout(() => {
        console.log("onion done");
        console.log("add onion");
        setTimeout(() => {
          console.log("soup is done");
        });
      }, 5000);
    }, 5000);
    console.log("chop onion");
  }, 8000);
}






// STILL ON CALLBACK HELL


// still on call backs, the invent of promises, async/wait came about due to the fact that we do not want to keep nesting functionalities in functionalities, cause with time it gets all clustered up and may not be easily readable
// Select the first element in the document with the class "one"
const heading1 = document.querySelector(".one");
// Select the first element in the document with the class "two"
const heading2 = document.querySelector(".two");
// Select the first element in the document with the class "three"
const heading3 = document.querySelector(".three");
// Select the first element in the document with the class "btn"
const btn = document.querySelector(".btn");
// Add an event listener to the "btn" element, listening for a "click" event
btn.addEventListener("click", () => {
  // Log the "btn" element to the console when it's clicked
  console.log(btn);
  // Execute the following code after a delay of 2000 milliseconds (2 seconds)
  setTimeout(() => {
    // Change the color of heading1 to red
    heading1.style.color = "red";
    // Execute the following code after a delay of 1000 milliseconds (1 second)
    setTimeout(() => {
      // Change the color of heading2 to green
      heading2.style.color = "green";
      // Execute the following code after a delay of 1000 milliseconds (1 second)
      setTimeout(() => {
        // Change the color of heading3 to violet
        heading3.style.color = "violet";
      }, 1000);
    }, 1000);
  }, 2000);
});

