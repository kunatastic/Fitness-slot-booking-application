"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Helper_1 = require("./Helper");
function main() {
    console.log("Welcome to Fitness Slot Booking");
    // 1. Create 3 new classes
    var Yoga = new Helper_1.Fitness("Yoga", new Date("2022-8-16 12:30:00"), 2);
    var Gym = new Helper_1.Fitness("Gym", new Date(), 3);
    var Dance = new Helper_1.Fitness("Dance", new Date("2022-8-16 12:30:00"), 3);
    // 2. Create new Members
    var user1 = new Helper_1.User("User - 1", 20);
    var user2 = new Helper_1.User("User - 2", 20);
    var user3 = new Helper_1.User("User - 3", 20);
    var user4 = new Helper_1.User("User - 4", 20);
    var user5 = new Helper_1.User("User - 5", 20);
    var user6 = new Helper_1.User("User - 6", 20);
    // 3. Assign new users
    Yoga.bookAClass(user1);
    Yoga.bookAClass(user2);
    Yoga.bookAClass(user3);
    Yoga.bookAClass(user4);
    Yoga.getEnrolledUser();
    Yoga.getWaitingList(); // user-4 added to waiting list
    Yoga.cancelAUser(user1);
    Yoga.getEnrolledUser();
    Yoga.getWaitingList(); // user-1 deleted and user-3 added and user-3 deleted from waiting list
    Gym.bookAClass(user5);
    Gym.bookAClass(user6);
    Gym.cancelAUser(user5); // user-5 cannot be deleted as 30 min difference is not present
    // Additional testcases
    // 1. If the user is not present in either of the waiting or enrolled list
    Dance.cancelAUser(user6);
}
main();
