
# Bike rental service for tourists or locals.
 


## Admin email and Password

 

```bash
 email: shahiida@gmail.com
 
 Password: shahida123
```
## Live Link

https://bike-rental-service-tau.vercel.app/

## Github server Link

https://github.com/MohammadJewelRana/bike-rental-service/tree/main/src/app



## Features

- Live previews
- Authentication and Authorization
- Validations(Zod)
 


## Installation and Run the project

Clone the repositiry

```bash
  git clone <repository-url>
```
    
Install dependencies:   

```bash
npm install
```

Set up environment variables:

```bash
Create a .env file and add necessary environment variables, such as MongoDB connection URI, JWT secret key, etc.
```

Start the server:

```bash
 npm run start:prod
```

Build the server:

```bash
 npm run  build
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

`PORT`

`DATABASE_URL`

`BCRYPT_SALT_ROUND`

`JWT_ACCESS_SECRET`

`JWT_REFRESH_SECRET`

`JWT_ACCESS_EXPIRES_IN`

`JWT_REFRESH_EXPIRES_IN`

 




## API Reference

#### Create user , login ,refresh token, bike, rental

```http
  POST /api/auth/signup
  POST /api/auth/login
  POST /api/auth/refresh-token
  POST /api/bikes
  POST /api/rentals
```
#### Update profile , bike , return bike

```http
  PUT /api/users/me
  PUT /api/bikes/:id
  PUT /api/rentals/:id/return
```

 
#### Get profile, bike ,rentals

```http
  GET /api/users/me
  GET /api/bikes
  GET /api/rentals
```
 
#### Delete  Bike

```http
  DELETE /api/bikes/:id
```

 
 
 


## Tech Stack


**Server:** Node, Express , Mongoose , TypeScript

**Package Management:** npm

**Validations:** Zod

**Authentication and Authorization:** Json Web Token



## 🚀 About Me
Hi there! 👋 I'm Mohammad Jewel Rana, a passionate MERN Stack Developer with expertise in both backend and frontend web development. I love building full-stack web applications that are not only functional but also provide a great user experience.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-d0b10.web.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/md-jewel-rana-05808b273)
 


## Contributing

Contributions are always welcome!


Feel free to open issues or submit pull requests for any improvements or bug fixes.

