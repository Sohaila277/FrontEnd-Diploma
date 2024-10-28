function weightedMean(X, W) {
    let weightedSum = 0;
    let weightSum = 0;
  
    for (let i = 0; i < X.length; i++) {
      weightedSum += X[i] * W[i];
      weightSum += W[i];
    }
  
    const weightedMean = weightedSum / weightSum;
    console.log(weightedMean.toFixed(1));
  }
  
  // Example usage:
  const X = [1, 2, 3];
  const W = [5, 6, 7];
  
  weightedMean(X, W);
  
  //take inputs from user

  function weightedMean() {
    const n = parseInt(prompt("Enter the number of elements:"));
  
    // Create empty arrays to store X and W values
    const X = [];
    const W = [];
  
    // Get X and W values from the user
    for (let i = 0; i < n; i++) {
      X.push(parseInt(prompt(`Enter element ${i + 1} for X:`)));
      W.push(parseInt(prompt(`Enter weight ${i + 1} for element ${i + 1}:`)));
    }
  
    // Calculate the weighted mean
    let weightedSum = 0;
    let weightSum = 0;
  
    for (let i = 0; i < n; i++) {
      weightedSum += X[i] * W[i];
      weightSum += W[i];
    }
  
    const weightedMean = weightedSum / weightSum;
    console.log(weightedMean.toFixed(1));
  }
  
  weightedMean();