class Movie {
    constructor(title, genres, releaseDate, popularity, revenue) {
      this.title = title;
      this.genres = genres;
      this.releaseDate = releaseDate;
      this.popularity = popularity;
      this.revenue = revenue;
    }

    display(x, y) {
      fill(255, 255, 255, 220);  // Light semi-transparent background
      stroke(200);
      rect(x - 10, y - 15, 320, 100, 10); // Box dimensions

      fill(0);
      textSize(12);
      textStyle(BOLD);
      this.drawWrappedText(`Title: ${this.title}`, x, y, 300);
      textStyle(NORMAL);
      this.drawWrappedText(`Genres: ${this.genres}`, x, y + 20, 300);
      text(`Release Date: ${this.releaseDate}`, x, y + 40);
      text(`Popularity: ${this.popularity}`, x, y + 60);
      text(`Revenue: $${this.revenue}`, x, y + 80);
    }

    // Helper method to wrap text within a certain width
    drawWrappedText(str, x, y, maxWidth) {
      let words = str.split(" ");
      let line = "";
      let lineHeight = 15; // Line spacing

      for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + " ";
        let testWidth = textWidth(testLine);
        if (testWidth > maxWidth && n > 0) {
          text(line, x, y);
          line = words[n] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      text(line, x, y);
    }
  }
