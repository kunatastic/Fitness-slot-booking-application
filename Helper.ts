export class Fitness {
  name: string;
  maximumUser: number;
  private waitingList: User[];
  private enrolledUser: User[];
  startingTime: Date;

  constructor(name: string, startingTime: Date, maximumUser: number) {
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

  private cancelAEnrolledUser(user: User) {
    let currentTime = new Date();
    currentTime = new Date(currentTime.getTime() + 30 * 60000);

    if (currentTime <= this.startingTime) {
      // remove the user if he was present. Given that he is present
      this.enrolledUser = this.enrolledUser.filter((current: User) => {
        return current.name !== user.name;
      });

      if (this.waitingList.length > 0) {
        this.enrolledUser.push(this.waitingList[0]);
        this.waitingList.shift();
        console.log("User delete and New user added from waiting list");
      } else {
        console.log("User delete and waiting list is empty");
      }
    } else {
      console.log("Cannot be deleted... [30 different ain't there]");
    }
  }

  private cancelAWaitingUser(user: User) {
    let currentTime = new Date();
    currentTime = new Date(currentTime.getTime() + 30 * 60000);

    if (currentTime <= this.startingTime) {
      // remove the user if he was present. Given that he is present
      this.waitingList = this.waitingList.filter((current: User) => {
        current !== user;
      });
    } else {
      console.log("Cannot be deleted... [30 different ain't there]");
    }
  }

  cancelAUser(existingUser: User) {
    if (this.checkUserPresentInEnrolledList(existingUser)) {
      this.cancelAEnrolledUser(existingUser);
      return;
    }

    if (this.checkUserPresentInWaitingList(existingUser)) {
      this.cancelAWaitingUser(existingUser);
      return;
    }
    console.log("User have not enrolled");
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
