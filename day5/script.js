//1. Asynchronous JavaScript: JS is single-threaded, but it can handle asynchronous operations using callbacks, Promises, and async/await. This allows JS to perform tasks like fetching data from an API without blocking the main thread.
        //example
        console.log("Start");
        setTimeout(() => console.log("After 2 sec"), 2000);
        console.log("End");
        /*output:
           1. Start
           2. End
           3. After 2 sec (2 seconds ke baad)
         */

        // JS doesn’t wait, moves to next line → async behavior

        let count = 0;
        const interval = setInterval(() => {
            count++;
            console.log(`Interval count: ${count}`);
            if (count === 5) {
                clearInterval(interval);
                console.log("Interval stopped");
            }
        });





        // setTimeout: specified time ke baad ek baar execute hota hai
        document.getElementById("timeoutBtn").addEventListener("click", () => {
            setTimeout(() => {
                alert("This is a timeout message!");
            }, 2000); // 2 seconds ke baad alert show hoga
        });

        // setInterval: specified time ke baad repeatedly execute hota hai
        let intervalId;
        document.getElementById("intervalBtn").addEventListener("click", () => {
            intervalId = setInterval(() => {
                console.log("This message appears every 3 seconds");
            }, 3000); // har 3 seconds ke baad message log hoga
        });

        // Stop the interval
        document.getElementById("stopIntervalBtn").addEventListener("click", () => {
            clearInterval(intervalId);
            console.log("Interval stopped");
        });

   

        //2.callback Hell: Jab hum nested callbacks use karte hain, toh code difficult to read aur maintain ho jata hai. Isse callback hell kehte hain.
        //Example of callback hell:

        setTimeout(() => {
            console.log("Step 1");
            setTimeout(() => {
                console.log("Step 2");
                setTimeout(() => {
                    console.log("Step 3");
                    setTimeout(() => {
                        console.log("Step 4");
                    }, 1000);
                }, 1000);
            }, 1000);
        },1000);   

        //hard to read-->solve with Promises 

        const task=new Promise((resolve, reject) => {
            let success=true; // change to false to see rejection
            if(success){
                resolve("Task completed successfully!");
            } else {
                reject("Task failed!");
            }
        });
        task.then(res=>console.log(res))
        .catch(err=>console.error(err));
        //States: Pending → Fulfilled → Rejected

        //4. Async/Await
        const fetchData = () => new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data fetched!");
            }, 2000);
        });
        async function getData() {
            console.log("Fetching data...");
            const data = await fetchData();
            console.log(data);
        }
        getData();

//   Makes async code look synchronous
//   Must be used with try/catch for errors

// 5. Fetch API (GET request example)
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error("Error fetching data:", error));

//fetch() returns a Promise
// res.json() converts response to JS object