let hour = prompt("Enter the hour in military time (1-24)");
if (hour<=6){
  console.log("Good day")
}
else if (hour<=6 && hour<=12){
  console.log("Good morning")
}
else if (hour<=18){
  console.log("Good evening")
}
else if (hour<=24){
  console.log("Good night")
}
else{
  console.log("Good day")
}