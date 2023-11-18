# Instructions for Using the Repository

To use this repository, follow the steps below:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/tuusuario/nombre-repo.git
cd nombre-repo
```

2. Ensure that Docker Desktop is installed on your machine.
3. Open your preferred terminal (bash, zsh, or others) and navigate to the project directory.
4. Run the following command to build the Docker images:

```bash
docker compose build
```

5. After the build is complete, run the following command to start the containers:

```bash
docker compose up
```

6. Access the frontend by navigating to `http://localhost:3000` in your web browser (assuming you haven't changed the default ports in the docker-compose.yml file).
7. Interact with the API by directing your HTTP client to `http://localhost:8080`.

> **Note:** The backend folder contains .http documents that can be used for testing the routes. It is recommended to replace the cookies in these documents with the ones provided by the API in each response. Please note that using these .http files requires installing the recommended extensions for the project.
