// dataLoader.js
const apiKey = "wnnjlmio6z6mx0os9gkq3o74im7ayv7j9t1a3lq2e2egygwct"; // Replace with your actual OMDb API key

// dataLoader.js
async function loadMovies() {
    for (let i = 0; i < csvData.getRowCount(); i++) {
      let row = csvData.getRow(i);
      let title = row.getString("title");
      
      // Parse the genres field to extract only the genre names
      let genres = row.getString("genres");
      let genreNames = extractGenreNames(genres);  // Extract only names
  
      let releaseDate = row.getString("release_date");
      let popularity = parseFloat(row.getString("popularity"));
      let revenue = parseFloat(row.getString("revenue"));
  
      // Create movie objects based on popularity
      let movie;
      if (popularity > 120) {
        movie = new BlockbusterMovie(title, genreNames, releaseDate, popularity, revenue);
      } else {
        movie = new Movie(title, genreNames, releaseDate, popularity, revenue);
      }
  
      movies.push(movie);  // Add movie to the list
    }
  }
  
  // Helper function to extract genre names
  function extractGenreNames(genres) {
    try {
      let genreObjects = JSON.parse(genres);  // Parse the JSON-like string
      return genreObjects.map(g => g.name).join(", ");  // Extract names and join with commas
    } catch (error) {
      console.error("Error parsing genres:", error);
      return genres;  // Fallback to raw data if parsing fails
    }
  }
  

  function displayMovies() {
    let xStart = 50;         // Starting x position for the first column
    let yStart = 100;        // Starting y position for the first row
    let spacingX = 350;      // Horizontal spacing between columns
    let spacingY = 180;      // Vertical spacing between rows
    let columns = 3;         // Number of columns
  
    for (let i = 0; i < movies.length; i++) {
      // Calculate column and row based on index
      let col = i % columns;
      let row = Math.floor(i / columns);
  
      // Calculate x and y positions based on column and row
      let x = xStart + col * spacingX;
      let y = yStart + row * spacingY - scrollOffset;
  
      // Only display movies that are within the visible canvas area
      if (y > -spacingY && y < height) {
        movies[i].display(x, y);
      }
    }
  }
  