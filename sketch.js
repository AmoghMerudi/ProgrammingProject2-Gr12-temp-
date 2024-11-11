let movies = [];
let csvData;
let scrollOffset = 0;  // Tracks the vertical scroll offset

function preload() {
  // Load the CSV file; specify the path accordingly
  csvData = loadTable("/tmdb_5000_movies.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadMovies();
}

function draw() {
    // Gradient background
    setGradient(0, 0, width, height, color(240, 240, 255), color(200, 220, 255));
    displayMovies();
  }
  
  // Helper function to create a gradient background
  function setGradient(x, y, w, h, c1, c2) {
    noFill();
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
  
// Adjust scroll with smooth interpolation
function mouseWheel(event) {
    scrollOffset += event.delta * 0.9;
    scrollOffset = constrain(scrollOffset, 0, max(0, movies.length * 180 - height));
  }
  
