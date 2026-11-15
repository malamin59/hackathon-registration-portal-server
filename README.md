# Hackathon Registration Portal — Backend

A secure and scalable Hackathon Registration Portal backend built with **Node.js, Express.js, MongoDB, and Mongoose**. It provides secure user authentication, email OTP verification, JWT-based authorization, and hackathon registration management.

## 🚀 Live API

**Backend:** https://hackathon-registration-murex.vercel.app/

**API Base URL:**
```text
https://hackathon-registration-murex.vercel.app/api
```

## ✨ Features

- **User Authentication:** Secure signup and login functionality.
- **Email Verification:** Custom 6-digit OTP verification using Nodemailer.
- **Password Security:** Password hashing with bcryptjs.
- **JWT Authentication:** Token-based authentication and protected routes.
- **Hackathon Registration:** Register users for hackathons.
- **User Profile:** Retrieve and update authenticated user information.
- **Registration Management:** Retrieve individual registration details.
- **Database:** MongoDB with Mongoose.
- **Error Handling:** Centralized error-handling middleware.
- **CORS Configuration:** Controlled cross-origin API access.
- **Deployment:** Vercel serverless deployment support.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB ODM |
| JWT | Authentication |
| bcryptjs | Password hashing |
| Nodemailer | Email delivery |
| dotenv | Environment configuration |
| CORS | Cross-origin resource sharing |
| Vercel | Backend deployment |

## 📁 Project Structure

```text
server/
├── api/
│   └── index.js
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── modules/
│   │   ├── auth/
│   │   ├── user/
│   │   └── registration/
│   │
│   ├── middlewares/
│   │   └── error.middleware.js
│   │
│   ├── routes/
│   │   └── index.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
├── pnpm-lock.yaml
└── vercel.json
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to the Server Directory

```bash
cd hackathon-registration-portal/server
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Configure Environment Variables

Create a `.env` file in the server root directory.

Use the following environment variable configuration:

```env
PORT=5000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

EMAIL_USER=your_email_address
EMAIL_PASS=your_email_app_password

CLIENT_URL=http://localhost:5173
```

**Important:** Never commit your `.env` file or expose sensitive credentials publicly. Use `.env.example` as a reference for the required environment variables.

### 5. Start the Development Server

```bash
pnpm dev
```

The backend will run at:

```text
http://localhost:5000
```

## 🔗 API Documentation

**Base URL (Local):**

```text
http://localhost:5000/api
```

**Base URL (Production):**

```text
https://hackathon-registration-murex.vercel.app/api
```

### Authentication Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/signup` | Register a new user |
| POST | `/auth/verify-otp` | Verify email using OTP |
| POST | `/auth/login` | Authenticate user and generate JWT |

### User Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/user/me` | Get authenticated user profile |
| PATCH | `/user/update` | Update user profile |

### Hackathon Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/hackathon/register` | Register for a hackathon |
| GET | `/hackathon/my-entry` | Get user's registration |
| GET | `/hackathon/:id` | Get hackathon details |

*Note: Ensure the HTTP methods above match the actual route definitions in your backend.*

## 🔐 Authentication

This backend uses JWT-based authentication to protect private API endpoints.

After successful login, the server generates a JWT token.

For protected routes, include the token in the request header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

Passwords are securely hashed using bcryptjs before being stored in MongoDB.

## 📧 Email Verification

The registration process includes email verification using a custom 6-digit OTP.

### Verification Flow

1. User submits signup information.
2. Backend validates the submitted information.
3. Password is hashed using bcryptjs.
4. A 6-digit OTP is generated.
5. Nodemailer sends the OTP to the user's email.
6. User submits the OTP for verification.
7. Backend verifies the OTP and activates the account.

## 🗄️ Database

MongoDB is used as the primary database, with Mongoose for schema modeling and database operations.

The application stores user information and hackathon registration data.

## 🌐 Deployment

The backend is deployed using **Vercel Serverless Functions**.

**Production URL:**

https://hackathon-registration-murex.vercel.app/

Production environment variables must be configured in Vercel Project Settings.

Required environment variables:

- `MONGODB_URL`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `EMAIL_USER`
- `EMAIL_PASS`
- `CLIENT_URL`

The `api/index.js` file provides the serverless request handler, while `src/server.js` is used for local development.

### Deploy with Vercel

```bash
vercel --prod
```

## 🔒 Security Practices

- Password hashing with bcryptjs.
- JWT-based authentication.
- Protected API routes.
- Environment variables for sensitive configuration.
- CORS origin restrictions.
- Centralized error handling.

## 👨‍💻 Author

**Al Amin Patwary**

- **GitHub:** https://github.com/malamin59
- **Portfolio:** https://alamin-15553.web.app/
- **LinkedIn:** https://www.linkedin.com/in/alamin-epb

---

⭐ If you find this project interesting, feel free to explore the repository and its implementation.
