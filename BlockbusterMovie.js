class BlockbusterMovie extends Movie {
    constructor(title, genres, releaseDate, popularity, revenue) {
      super(title, genres, releaseDate, popularity, revenue);
      this.label = "Blockbuster";
    }

    display(x, y) {
      fill(255, 235, 205, 220);  // Light golden background
      stroke(255, 215, 0);  // Gold border for blockbusters
      rect(x - 10, y - 30, 320, 120, 10); // Box dimensions

      fill(255, 69, 0);
      textSize(14);
      textStyle(BOLD);
      text(`🌟 ${this.label} 🌟`, x, y - 15);

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
}
