# 🛒 Uplyft E-commerce Chatbot

A full-stack e-commerce web application designed to facilitate seamless product listings, user management, and order processing. Built using Django for the backend and SQLite for database management, this project demonstrates fundamental concepts of modern web development.

---

## 📌 Project Summary

The Uplyft E-commerce platform allows:

- Admins to manage products and users.
- Customers to view products and place orders.
- Simple authentication and authorization system.
- Easy extensibility for future features like payment integration, advanced search, and recommendation systems.

---

## 🧰 Technology Stack

| Layer        | Technology        |
|--------------|------------------|
| Backend      | Django (Python)  |
| Database     | SQLite           |
| API Style    | REST (via Django)|
| ORM          | Django ORM       |
| Hosting      | Localhost (Dev)  |

---

## 🧪 Sample Queries & Expected Results

### ✅ Get Product List
**Endpoint:** `GET /products/`  
**Expected Output:** JSON list of products with fields such as name, price, and description.

### ✅ Create Order
**Endpoint:** `POST /orders/`  
**Request Body:**
```json
{
  "product_id": 1,
  "user_id": 2,
  "quantity": 3
}
```
**Expected Output:**
```json
{
  "status": "Order placed successfully",
  "order_id": 25
}
```

### ✅ User Login
**Endpoint:** `POST /login/`  
**Expected Output:** JWT Token or Session Cookie

---

## ⚙️ Installation & Setup Guide

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd uplyftAssignment-main/backend
```

### 2️⃣ Create a Virtual Environment (Optional but Recommended)
```bash
python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
```

### 3️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```

> If `requirements.txt` is not available, manually install:
```bash
pip install django
```

### 4️⃣ Run Migrations
```bash
python manage.py migrate
```

### 5️⃣ Start Development Server
```bash
python manage.py runserver
```

Now, open `http://127.0.0.1:8000/` in your browser.

---

### 🧪 Running Tests (Optional)
If tests are available:
```bash
python manage.py test

```


## 🧑‍🎨 Frontend Setup (React with Vite + Tailwind CSS)

### 1. Navigate to Frontend Directory

```bash
cd ../chatbotui
```

### 2. Install Node.js Dependencies

Make sure Node.js and npm are installed.

```bash
npm install
```

### 3. Run the React App

```bash
npm run dev
```

The app will be live at:

```
http://localhost:5173
```

This UI interacts with your Django backend.

---

## 🧪 Sample API Endpoints (Django)

### 🛍️ List Products

```http
GET /products/
```

**Response:**

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 54999,
    "description": "High-performance laptop"
  }
]
```

### 🛒 Place Order

```http
POST /orders/
```


---

## 📂 Project Structure Overview

```
uplyftAssignment-main/
├── backend/
│   ├── db.sqlite3
│   ├── manage.py
│   ├── ecommerce/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── ...
```

---

## 📌 Notes

- The database used here is `SQLite` for ease of local development.
- The project can be extended to use PostgreSQL or MySQL with minor settings changes.
- Admin panel can be accessed at `/admin` after creating a superuser.

```bash
python manage.py runserver
```




---
