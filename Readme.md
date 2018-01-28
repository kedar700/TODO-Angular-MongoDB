# Todo Application using Spring boot, Angular and MongoDB.

* This is a todo application where you can save your task, edit it and mark it done. 
* It was designed using Spring boot, Angular5.0 and MongoDB.
* It does not require MongoDB to be installed but uses MongoLab to connect.

## Requirements

1. Java - 1.8.x

2. Maven - 3.x.x

3. MongoDB - 3.x.x

## Steps to Run the Application

**1. Build and run the backend app using maven**

```bash
cd spring-boot-backend
mvn package
java -jar target/todoapp-1.0.0.jar
```

Alternatively, you can run the app without packaging it using -

```bash
mvn spring-boot:run
```

The backend server will start at <http://localhost:8080>.

**2. Run the frontend app using npm**

```bash
cd angular-frontend
npm install
```

```bash
npm start
```

Frontend server will run on <http://localhost:4200>


