# React Application Documentation

## Description

This React application is built on a routing approach using the **wouter** library. Additionally, it utilizes various key dependencies to provide specific functionalities and enhance the user experience. These dependencies include:

- **wouter:** A router that simplifies route management within the application.
- **just-debounce-it:** Used to enhance the user experience when filtering products, allowing for more efficient and smooth filtering.
- **swr (Stale-While-Revalidate):** Employed for fetching data [from the API](https://github.com/diecodev/viio-test/tree/main/backend). It is also utilized for caching responses, eliminating the need for complex global context management.
- **sonner:** Provides user feedback during interaction with the application, improving usability.
- **react-cookie:** Used to read browser cookies and manage protected routes, especially in the context of user authentication.

## Application Routes

- **"/":** Root route that redirects the user based on their login status.
- **"/sign-in":** Route for signing in. Not accessible if the user is already authenticated.
- **"/sign-up":** Route for user registration. Once registered, the user is automatically authenticated and cannot access this route after registration.
- **"/products":** Route where users can view the list of products [provided by the API](https://github.com/diecodev/viio-test/tree/main/backend). It includes a search bar for filtering products.

> **Note:** No unit tests were conducted using Vite or other testing libraries due to my limited experience with Docker and time constraints.
