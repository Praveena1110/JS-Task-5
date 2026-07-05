// Task 1 - Employee Login
if (true) {
  var companyName = "Stackly IT";
  let employeeId = "EMP101";
  const password = "stack123";

  console.log("Inside Block");
  console.log("Company:", companyName);
  console.log("Employee ID:", employeeId);
  console.log("Password:", password);
}

console.log("\nOutside Block");
console.log("Company:", companyName);

try {
  console.log(employeeId);
} catch (error) {
  console.log("Error:", error.message);
}

try {
  console.log(password);
} catch (error) {
  console.log("Error:", error.message);
}

// Task 2 - ATM Machine
console.log(accountBalance);
var accountBalance = 5000;

try {
    console.log(balance);
    let balance = 10000;
} catch (error) {
    console.log(error.message);
}

try {
    console.log(amount);
    const amount = 20000;
} catch (error) {
    console.log(error.message);
}

// Task 3 - Food Delivery App
function orderFood(foodName) {
    console.log("Order Placed :", foodName);
}

orderFood("Chicken Biryani");

// Task 4 - WatsApp Status
let updateStatus = function(status) {
    console.log("Status Updated :", status);
};

updateStatus("Busy in Meeting");

// Task 5 - Weather App
const weather = (city, temperature) => {
    console.log(city + " Temperature is " + temperature + "°C");
};

weather("Chennai", 36);

// Task 6 - Flipkart Offer
(function () {
    console.log("Today's Offer");
    console.log("Flat 60% Discount");
})();

// Task 7 - Online Payment
function paymentSuccess() {
    console.log("Payment Successful");
}

function makePayment(callback) {
    console.log("Payment Processing...");
    callback();
}

makePayment(paymentSuccess);

// Tast 8 - YouTube Playlist
function* playlist() {
    yield "Video 1";
    yield "Video 2";
    yield "Video 3";
    yield "Video 4";
}

let videos = playlist();

let video = videos.next();

while (!video.done) {
    console.log(video.value);
    video = videos.next();
}

console.log("Playlist Completed");

// Task 9 - Student Result
function calculateTotal() {
    return 485;
}

let totalMarks = calculateTotal();

console.log("Total Marks :", totalMarks);

// Task 10 - Shopping Cart
function cartTotal(price1, price2, price3) {
    return price1 + price2 + price3;
}

let total = cartTotal(500, 1000, 1500);

console.log("Total Amount :", total);

// Task 11 - Salary Calculator
function salary(basic, hra, bonus) {
    return basic + hra + bonus;
}

let totalSalary = salary(40000, 10000, 8000);

console.log("Total Salary :", totalSalary);

// Task 12 - Food Bill
function foodBill(food) {
    return function(drinks) {
        return function(dessert) {
            return food + drinks + dessert;
        };
    };
}

console.log(foodBill(200)(100)(80));

// Task 13 - E-commerce Coupon Generator
function* coupons() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "MEGA50";
}

let coupon = coupons();

let result = coupon.next();

while (!result.done) {
    console.log(result.value);
    result = coupon.next();
}

console.log("No More Coupons");

// Task 14 - Bank TRansaction
function success() {
    console.log("Transaction Successful");
}

function withdraw(callback) {
    console.log("Processing...");
    callback();
}

withdraw(success);

// Task 15 - Employee Profile
function employeeProfile() {

    if (true) {

        var company = "Stackly";
        let designation = "MERN Developer";
        const salary = 50000;

        console.log("Inside Block");
        console.log(company);
        console.log(designation);
        console.log(salary);
    }

    console.log("\nOutside Block");
    console.log(company);

    try {
        console.log(designation);
    } catch (error) {
        console.log(error.message);
    }

    try {
        console.log(salary);
    } catch (error) {
        console.log(error.message);
    }
}

employeeProfile();