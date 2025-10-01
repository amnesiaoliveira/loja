# PS5 Games CRUD Application

This is a simple CRUD application for managing PS5 games using Node.js and Express. The application allows users to register, view, edit, and delete games, including details such as title, category, and game image.

## Features

- **Create**: Add new PS5 games with title, category, and image.
- **Read**: View a list of all registered PS5 games.
- **Update**: Edit details of existing games.
- **Delete**: Remove games from the list.

## Project Structure

```
ps5-games-crud
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains the game controller for handling CRUD operations
│   │   └── gamesController.js
│   ├── models                # Contains the game model
│   │   └── game.js
│   ├── routes                # Contains the routes for game-related endpoints
│   │   └── games.js
│   ├── views                 # Contains EJS views for rendering HTML
│   │   ├── games.ejs
│   │   ├── addGame.ejs
│   │   ├── editGame.ejs
│   │   └── partials
│   │       ├── _header.ejs
│   │       └── _footer.ejs
│   └── public                # Contains public assets
│       └── uploads           # Directory for storing uploaded game images
├── package.json              # NPM configuration file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd ps5-games-crud
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to access the application.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

## License

This project is licensed under the MIT License.