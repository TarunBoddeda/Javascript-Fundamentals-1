const arr = [1, 2, 3, 4, "Mithun", 1, 2, 3, "Tarun"];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    console.log(`Found the first string: ${arr[i]}`);
    break;
  } else {
    console.log("No string value found");
  }
}
