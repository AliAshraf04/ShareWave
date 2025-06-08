# ShareWave

ShareWave is a social media platform built with Next.js that allows users to share their thoughts and ideas.

## Features

*   **Post Creation:** Users can create and share new posts.
*   **Like Posts:** Users can like posts to show their appreciation.
*   **Feed:** A feed displays the latest posts from all users.
*   **Error Handling:** Robust error handling for a smooth user experience.
*   **Loading States:** Visual loading states to indicate when content is being fetched.

## Technologies Used

*   Next.js
*   React
*   SQLite (posts.db)
*   Cloudinary (for image uploads)

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure environment variables:**

    Create a `.env.local` file with the necessary environment variables.  The project uses Cloudinary for image uploads, so you'll need to configure your Cloudinary credentials.

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

*   `.env.local`: Environment variables configuration file.
*   `.gitignore`: Specifies intentionally untracked files that Git should ignore.
*   `jsconfig.json`: Configuration file for JavaScript projects in VS Code.
*   `next.config.mjs`: Next.js configuration file.
*   `package-lock.json`: Records the exact versions of dependencies used in the project.
*   `package.json`: Contains metadata about the project, including dependencies and scripts.
*   `posts.db`: SQLite database for storing posts.
*   `actions/`: Contains action files (e.g., `actions.js`).
*   `app/`: Contains the Next.js application code.
    *   `globals.css`: Global CSS styles.
    *   `layout.js`: Defines the layout for the application.
    *   `page.js`: The main page of the application.
    *   `feed/`: Contains the feed page.
    *   `new-post/`: Contains the new post page.
*   `assets/`: Contains static assets such as images.
*   `components/`: Contains reusable React components.
*   `lib/`: Contains utility functions and library code.
*   `public/`: Contains static files served by Next.js.

## Dependencies

The project uses the following dependencies:

*   `better-sqlite3`: ^9.4.3
*   `cloudinary`: ^2.6.1
*   `next`: 14.1.0
*   `react`: ^18
*   `react-dom`: ^18
