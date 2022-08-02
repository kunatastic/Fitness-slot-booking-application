import { Fitness, User } from "./Helper";

function main() {
  console.log("Welcome to Fitness Slot Booking");

  // 1. Create 3 new classes
  const Yoga: Fitness = new Fitness("Yoga", new Date("2022-8-16 12:30:00"), 2);
  const Gym: Fitness = new Fitness("Gym", new Date(), 3);
  const Dance: Fitness = new Fitness("Dance", new Date("2022-8-16 12:30:00"), 3);

  // 2. Create new Members
  const user1: User = new User("User - 1", 20);
  const user2: User = new User("User - 2", 20);
  const user3: User = new User("User - 3", 20);
  const user4: User = new User("User - 4", 20);
  const user5: User = new User("User - 5", 20);
  const user6: User = new User("User - 6", 20);

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

  Gym.cancelAUser(user5);
}

main();
