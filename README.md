# 🎉 EventSphere – Cloud-Based College Event Registration System

> 🚀 From Chaos to Control – Reinventing Event Registration

EventSphere is a full-stack web application designed to simplify college event management. It allows students to register for events and provides administrators with a powerful dashboard to manage registrations, track analytics, and monitor event participation in real-time.

---

# ✨ Features

* 📝 Event Registration System
* 📊 Admin Dashboard with statistics
* 📈 Real-time Analytics (event-wise & check-in data)
* ✅ Check-in System for attendance tracking
* 🔍 Search & Filtering of participants
* 🎨 Modern UI (responsive and clean design)

---

# 🛠️ Tech Stack

| Layer    | Technology               |
| -------- | ------------------------ |
| Frontend | HTML, CSS, JavaScript    |
| Backend  | Node.js, Express.js      |
| Database | MongoDB                  |
| Tools    | MongoDB Compass, VS Code |

---

# 📁 Project Structure

```
event-project/
│
├── models/
│   └── user.js
│
├── node_modules/
│
├── index.html
├── users.html
├── events.html
├── analytics.html
├── registrations.html
│
├── server.js
├── package.json
└── package-lock.json
```

---

# ⚙️ Prerequisites

Before running this project, make sure you have:

✅ Node.js (v14 or higher)
👉 https://nodejs.org/

✅ MongoDB Community Server
👉 https://www.mongodb.com/try/download/community

✅ MongoDB Compass (optional but recommended)
👉 https://www.mongodb.com/products/compass

---

# 💻 Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/eventsphere.git
cd eventsphere
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Start MongoDB Server

### Option A (Windows Service)

* Press `Windows + R`
* Type `services.msc`
* Start **MongoDB**

### Option B (Manual)

```bash
mongod
```

👉 Make sure MongoDB runs on:

```
mongodb://127.0.0.1:27017
```

---

## 4️⃣ Run Backend Server

```bash
node server.js
```

You should see:

```
MongoDB Connected ✅
Server running on port 3000 🚀
```

---

## 5️⃣ Open the Website

👉 Open browser:

```
http://localhost:3000
```

---

# 🌐 Available Routes

| Route                | Description              |
| -------------------- | ------------------------ |
| `/`                  | Registration page        |
| `/users-page`        | Users dashboard          |
| `/events-page`       | Events page              |
| `/analytics-page`    | Analytics dashboard      |
| `/users`             | Get all users (API)      |
| `/register`          | Register user (POST API) |
| `/users/:id/checkin` | Check-in API             |

---

# 🧠 How It Works

1. User fills registration form
2. Data is sent to backend via `fetch()`
3. Express server processes request
4. MongoDB stores data
5. Dashboard fetches and displays live data
6. Analytics generated dynamically

---

# 📊 Analytics System

* Total registrations
* Checked-in users
* Pending users
* Event-wise participation

---

# ☁️ Cloud Deployment (Future Scope)

This project is designed to be cloud-ready and can be deployed using Google Cloud:

| Service           | Usage              |
| ----------------- | ------------------ |
| Google App Engine | Backend hosting    |
| Cloud Firestore   | Scalable database  |
| Firebase Auth     | Authentication     |
| BigQuery          | Advanced analytics |
| Cloud Storage     | File storage       |

---

# 🚀 Future Enhancements

* 📱 QR Code Check-in system
* 🔐 Authentication (Admin/Login system)
* 📩 Email/SMS notifications
* 🧾 Event creation panel
* 🌍 Full cloud deployment

---

# ⚠️ Common Issues & Fixes

## ❌ MongoDB Connection Error

```
ECONNREFUSED 127.0.0.1:27017
```

✅ Fix:

* Start MongoDB service
* Run `mongod`

---

## ❌ Port Already in Use

```
Error: listen EADDRINUSE
```

✅ Fix:

* Change port in `server.js`
* OR stop existing process

---

## ❌ Data Not Showing

✅ Fix:

* Check MongoDB is running
* Refresh page
* Check console (F12 → Console)

---

# 📚 Learnings

* Full-stack development
* REST API integration
* MongoDB operations
* Debugging real-world issues
* UI/UX design principles

---

# 👨‍💻 Author

**Your Name**
🎓 Google Cloud Digital Leader Project

---

# ⭐ Support

If you like this project:

👉 Give it a ⭐ on GitHub
👉 Share with others

---

# 🏁 Conclusion

EventSphere is not just a project — it is a scalable, cloud-ready solution designed to solve real-world event management problems.

---
