function calculate() {
    const n = parseInt(prompt("Enter the number of elements:"));
    const arr = [];
  
    for (let i = 0; i < n; i++) {
      const num = parseInt(prompt(`Enter element ${i + 1}:`));
      arr.push(num);
    }
  
    // Calculate the mean
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const mean = sum / arr.length;
  
    // Sort the array to find the median
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    const median = arr.length % 2 === 0
      ? (arr[mid - 1] + arr[mid]) / 2
      : arr[mid];
  
    // Calculate the mode
    const frequency = {};
    let maxFrequency = 0;
    let mode;
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      frequency[num] = (frequency[num] || 0) + 1;
      if (frequency[num] > maxFrequency) {
        maxFrequency = frequency[num];
        mode = num;
      }
    }
  
    // Print the results
    console.log("Mean:", mean.toFixed(1));
    console.log("Median:", median.toFixed(1));
    console.log("Mode:", mode);
  }
  
  calculate();
