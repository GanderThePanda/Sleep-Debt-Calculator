function getSleepHours(day) {
    switch(day) {
      case "monday":
        return 6;
        break
      case "tuesday":
        return 7;
        break
      case "wednesday":
        return 8;
        break
      case "thursday":
        return 7.5;
        break;
      case "friday":
        return 12;
        break;
      case "saturday":
        return 10;
        break;
      case "sunday":
        return 7;
        break;
      default:
        return "value invalid";  
      };
  };
  
  function actualSleepHours() {
    return getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  };
  
  const idealSleepHours = 56;
  const differenceSleepHours = actualSleepHours() - idealSleepHours;
  
  function sleepDebt() {
    if (differenceSleepHours > 0) {
      return "You are sleeping more than enough! You are over sleeping by " + differenceSleepHours + " Hours.";}
      else if (differenceSleepHours < 0) {
      return "You aren't sleeping enough! You are under sleeping by " + differenceSleepHours + " Hours.";}
      else if (differenceSleepHours = 0) {
      return "You slept perfect!";}
  };
  
  console.log(sleepDebt());