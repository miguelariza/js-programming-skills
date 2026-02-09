let userRole = "admin";
let accessLevel;

if(userRole === "admin") {
    accessLevel = "Full access granted";
} else if(userRole === "manager") {
    accessLevel = "Limited access granted"
} else {
    accessLevel = "No access granted";
}

console.log("Access level: " + accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole = "admin") {
        userMessage = "Welcome, Admin";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User access: ", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    case "employee":
        userCategory = "Employee";
        break;
    case "enrolledMember":
        userCategory = "Enrolled Member";
        break;
    case "nonSubscriber":
        userCategory = "Non-subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category: ", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

console.log("Authentication Status: ", authenticationStatus);

let dietaryServices = userCategory;
let dietaryOptions;

switch(dietaryServices) {
    case "Employee":
        dietaryOptions = "Full Dietary Service and Health Program Access";
        break;
    case "Enrolled Member":
        dietaryOptions = "Dietary Services and one-on-one interaction with dietician";
        break;
    case "Subscriber":
        dietaryOptions = "Partial Access Dietary Services";
        break;
    case "Non-subscriber":
        dietaryOptions = "No Dietary Service Acess. You need to Enroll as a member or become a subscriber.";
        break;
    default:
        dietaryOptions = "Unavailable";
}

console.log("Dietary Service: ", dietaryOptions);