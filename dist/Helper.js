"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Fitness = void 0;
var Fitness = /** @class */ (function () {
    function Fitness(name, startingTime, maximumUser) {
        this.name = name;
        this.startingTime = startingTime;
        this.maximumUser = maximumUser;
        this.waitingList = [];
        this.enrolledUser = [];
    }
    Fitness.prototype.bookAClass = function (newUser) {
        var currentOccupancy = this.enrolledUser.length;
        if (currentOccupancy < this.maximumUser) {
            this.enrolledUser.push(newUser);
            console.log(newUser.name + " added to enrolled list");
        }
        else {
            this.waitingList.push(newUser);
            console.log(newUser.name + " added to waiting list");
        }
    };
    Fitness.prototype.cancelAUser = function (existingUser) {
        if (this.checkUserPresentInEnrolledList(existingUser)) {
            this.cancelAEnrolledUser(existingUser);
            return;
        }
        if (this.checkUserPresentInWaitingList(existingUser)) {
            this.cancelAWaitingUser(existingUser);
            return;
        }
        console.log("User have not enrolled");
    };
    // UTILS FUNCTIONS
    Fitness.prototype.getEnrolledUser = function () {
        console.log("\nEnrolled list of " + this.name);
        console.table(this.enrolledUser);
    };
    Fitness.prototype.getWaitingList = function () {
        console.log("\nWaiting list of " + this.name);
        console.table(this.waitingList);
    };
    Fitness.prototype.checkUserPresentInEnrolledList = function (user) {
        return this.enrolledUser.includes(user);
    };
    Fitness.prototype.checkUserPresentInWaitingList = function (user) {
        return this.waitingList.includes(user);
    };
    Fitness.prototype.cancelAEnrolledUser = function (user) {
        var currentTime = new Date();
        currentTime = new Date(currentTime.getTime() + 30 * 60000);
        if (currentTime <= this.startingTime) {
            this.enrolledUser = this.enrolledUser.filter(function (current) {
                return current.name !== user.name;
            });
            if (this.waitingList.length > 0) {
                this.enrolledUser.push(this.waitingList[0]);
                this.waitingList.shift();
                console.log("User delete and New user added from waiting list");
            }
            else {
                console.log("User delete and waiting list is empty");
            }
        }
        else {
            console.log("Cannot be deleted... [30 different ain't there]");
        }
    };
    Fitness.prototype.cancelAWaitingUser = function (user) {
        var currentTime = new Date();
        currentTime = new Date(currentTime.getTime() + 30 * 60000);
        if (currentTime <= this.startingTime) {
            this.waitingList = this.waitingList.filter(function (current) {
                current !== user;
            });
        }
        else {
            console.log("Cannot be deleted... [30min difference ain't there]");
        }
    };
    return Fitness;
}());
exports.Fitness = Fitness;
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
exports.User = User;
