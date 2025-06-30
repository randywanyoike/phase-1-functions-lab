// Returns the number of blocks from 42nd Street (HQ)
function distanceFromHqInBlocks(location) {
  // ...existing code...
  return Math.abs(location - 42);
}

// Returns the number of feet from 42nd Street (HQ)
function distanceFromHqInFeet(location) {
  // ...existing code...
  return distanceFromHqInBlocks(location) * 264;
}

// Returns the distance travelled in feet between two points
function distanceTravelledInFeet(start, destination) {
  // ...existing code...
  return Math.abs(destination - start) * 264;
}

// Calculates fare price based on distance travelled
function calculatesFarePrice(start, destination) {
  // ...existing code...
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
