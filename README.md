
# EduSched 🎓 — Student-Teacher Appointment Booking System

**EduSched** is a smart, role-based web application that streamlines the appointment scheduling process between students and teachers. It provides dashboards for students, teachers, and admins with Firebase-based authentication and real-time data updates.

---

## 🚀 Features

- 🔐 Login & Registration with Firebase Authentication
- 🎓 **Students** can:
  - View and search teachers
  - Book appointments
  - Cancel their appointments
- 🧑‍🏫 **Teachers** can:
  - View assigned appointments
  - Approve or reject them
- 👨‍💼 **Admins** can:
  - View, filter, and delete users
  - View platform analytics (total users, feedback, appointments)
- 💬 Feedback form stored in Firestore
- 📊 Real-time database updates using Firebase Firestore
- 🎨 Responsive UI with modals and dashboards

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase Firestore (NoSQL database)
- **Authentication**: Firebase Auth
- **Hosting**: Firebase Hosting / GitHub Pages (optional)

---

## 📁 Folder Structure

```
EduSched/
├── index.html
├── /pages
│   ├── admin.html
│   ├── student.html
│   └── teacher.html
├── /css
│   └── style.css
├── /js
│   └── firebase-config.js
├── /assets
│   └── background.jpg
└── README.md
```

---

## 🔧 Firebase Setup

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Email/Password Authentication**
3. Create the following Firestore collections:
   - `users/` — stores user info (name, email, role)
   - `appointments/` — stores bookings
   - `feedbacks/` — stores user feedback
4. Update your `/js/firebase-config.js` with your Firebase credentials.

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  ...
};
```

---

## 🔐 Firestore Rules (Minimum Working)

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /users/{userId} {
      allow read, write: if request.auth != null;
    }

    match /appointments/{docId} {
      allow read, write: if request.auth != null;
    }

    match /feedbacks/{docId} {
      allow write: if request.auth != null;
    }
  }
}
```

---

## 🖥️ Local Setup

1. Clone the repo:
```bash
git clone https://github.com/your-username/EduSched.git
cd EduSched
```

2. Run using Live Server (VS Code) or:
```bash
python -m http.server
```

---

## 🌐 Optional: Deploy with Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

---

## 📸 Screenshots

> _Add screenshots of admin, teacher, and student dashboards here._

---

## 🙋‍♀️ Author

Nancy Saini  
[GitHub](https://github.com/nancysaini123)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
