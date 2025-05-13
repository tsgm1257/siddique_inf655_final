# 🎟️ Event Ticket Booking Website

> ⚠️ **Important:** Create a `.env` file in the root of your project with the following keys from your Firebase config:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 📌 Project Overview

This is a full-featured **Event Ticket Booking Website** built with **React**, **Firebase**, and **Tailwind CSS**. It allows users to:

- Sign up and log in using Firebase Authentication
- Browse and search for upcoming events
- Sort events by price or date
- Add tickets to a cart and simulate a booking
- View booking history from their profile page

---

## 🚀 Features

- 🔐 **Authentication** with Firebase (Email/Password)
- 🗂️ **Event Listing** with title, date, price, and location
- 🔍 **Search Events by Title**
- 📅 **Sort Events by Price or Date**
- 🛒 **Cart Management** with quantity adjustment and removal
- ✅ **Booking Confirmation** stored in Firestore
- 🧾 **User Profile Page** showing email and past bookings
- 📱 **Responsive Design** (Mobile/Desktop)
- 🔔 **Toast Notifications** using React Toastify

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Routing:** React Router
- **Styling:** Tailwind CSS + DaisyUI
- **State Management:** React Context API
- **Backend:** Firebase Authentication + Firestore
- **Notifications:** React Toastify

---

## 📁 Folder Structure

```
/src
├── /assets             # Images, icons, etc.
├── /components         # Navbar, Footer, EventCard, ProtectedRoute, etc.
├── /contexts           # AuthContext, CartContext
├── /data               # Static data.js file with event info
├── /pages              # Home, Cart, Login, Signup, Profile, BookingConfirmation, EventDetails
├── /utils              # firebase.js for config
├── App.jsx
├── main.jsx
```

---

## 🧪 Firebase Setup Instructions

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Create a project and register a Web App
3. Enable **Email/Password Authentication**
4. Create a **Cloud Firestore** database (start in test mode)
5. Copy your Firebase config into a `.env` file as shown above

---

## 🧰 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/your-username/event-booking-app.git
cd event-booking-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Add your Firebase config to `.env`**

4. **Start the development server**
```bash
npm run dev
```

---

## 🌐 Live Demo

> Add your live site link here once deployed  
> Example: [https://event-booking-app.web.app](https://event-booking-app.web.app)

---

## 🧠 Final Reflection

This project helped me understand how to build full React applications with real backend services. I learned how to manage global state using Context API, connect to Firebase for both authentication and data persistence, and build a clean, responsive UI using Tailwind and DaisyUI. Challenges included handling Firebase behavior during development, preventing duplicate Firestore entries, and combining search and sorting functionality efficiently.

---
