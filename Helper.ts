export class Fitness {
  name: string;
  maximumUser: number;
  private waitingList: User[];
  private enrolledUser: User[];
  startingTime: string;

  constructor(name: string, startingTime: string, maximumUser: number) {
    this.name = name;
    this.startingTime = startingTime;
    this.maximumUser = maximumUser;
    this.waitingList = [];
    this.enrolledUser = [];
  }

  bookAClass(newUser: User) {
    const currentOccupancy: number = this.enrolledUser.length;
    if (currentOccupancy < this.maximumUser) {
      console.log(newUser.name + " added to enrolled list");
      this.enrolledUser.push(newUser);
    } else {
      console.log(newUser.name + " added to waiting list");
      this.waitingList.push(newUser);
    }
  }

  getEnrolledUser() {
    console.log("\nEnrolled list of " + this.name);
    console.table(this.enrolledUser);
  }

  getWaitingList() {
    console.log("\nWaiting list of " + this.name);
    console.table(this.waitingList);
  }

  cancelAEnrolledUser(user: User) {
    if (!this.checkUserPresentInEnrolledList(user)) return;

    const currentTime = new Date().toString();
    // TODO: date comparasion
    if (currentTime + 30 <= this.startingTime) {
      // remove the user if he was present. Given that he is present
      this.enrolledUser = this.enrolledUser.filter((current: User) => {
        current !== user;
      });

      if (this.waitingList.length > 0) {
        this.enrolledUser.push(this.waitingList[0]);
        this.waitingList.shift();
      }
    } else {
      console.log("Cannot be deleted... [30 different ain't there]");
    }
  }

  cancelAWaitingUser(user: User) {
    if (!this.checkUserPresentInWaitingList(user)) return;

    const currentTime = new Date().toString();
    // TODO: date comparasion
    if (currentTime + 30 <= this.startingTime) {
      // remove the user if he was present. Given that he is present
      this.waitingList = this.waitingList.filter((current: User) => {
        current !== user;
      });
    } else {
      console.log("Cannot be deleted... [30 different ain't there]");
    }
  }

  checkUserPresentInEnrolledList(user: User) {
    return this.enrolledUser.includes(user);
  }

  checkUserPresentInWaitingList(user: User) {
    return this.waitingList.includes(user);
  }
}

export class User {
  name: string;
  age: number;
  fitness?: Fitness;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
