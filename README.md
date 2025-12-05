# 🧑‍🌾 FarmSathi: Smart Agricultural Recommendation System

FarmSathi is an AI-powered agricultural assistant designed to support farmers in making informed decisions. The system provides comprehensive recommendations for crops, fertilizers, and crop disease management, ensuring better productivity and sustainable farming practices.

It integrates advanced machine learning models via a **FastAPI backend** and utilizes **Firebase Authentication** for secure user management.

## ✨ Core Features

FarmSathi integrates advanced machine learning models to deliver the following capabilities:

* **Crop Recommendation:** Suggests the best crops based on soil and environmental conditions (e.g., NPK, pH, Rainfall, Temperature).
* **Fertilizer Recommendation:** Recommends optimal fertilizers tailored to soil nutrient levels and crop type.
* **Disease Detection:** Identifies crop diseases from uploaded leaf images and suggests actionable remedies.
* **Chatbot:** Provides quick, context-aware answers to farming-related questions through an integrated widget.

---

## 💻 Frontend Overview

This repository contains the simple multi-page frontend for FarmSathi, built with **HTML, CSS, and vanilla JavaScript (ES modules)**, and designed to interface seamlessly with the FastAPI backend.

### Frontend File Structure

| File | Description | Protection Status |
| :--- | :--- | :--- |
| `index.html` | Landing page with hero section and "Get Started" button. | Public |
| `dashboard.html` | Protected dashboard with feature cards. | **Protected** |
| `crop-recommend.html` | Form calling `/crop-recommend`. | **Protected** |
| `fertilizer-recommend.html` | Form calling `/fertilizer-recommend`. | **Protected** |
| `disease-detect.html` | Image upload for `/predict-disease`. | **Protected** |
| `survey.html` | Simple protected user survey form. | **Protected** |
| `feedback.html` | Simple protected feedback form. | **Protected** |
| `contact.html` | Simple protected contact form. | **Protected** |
| `styles.css` | Global styling and responsive layout. | N/A |
| `firebase-config.js` | Firebase configuration and `API_BASE_URL` definition. | N/A |
| `app.js` | Firebase initialization, Auth logic, route protection, and API helpers. | N/A |
| `chatbot-widget.js` | Floating chatbot button + modal calling `/chatbot`. | N/A |

### Authentication and Route Protection

* **Firebase Authentication** (Email/Password + Google Sign-In) is handled by `app.js`.
* All feature pages are **protected**.
* If a logged-out user tries to access a protected page, the auth modal opens. Upon successful login, the user is redirected back to the page they requested.

---

## ⚙️ How to Run Locally

### 1. Prerequisites

You must have:

1.  A running **FastAPI backend** with the endpoints: `/crop-recommend`, `/fertilizer-recommend`, `/predict-disease`, and `/chatbot`.
2.  Node.js or Python 3 to run a local HTTP server.

### 2. Configure Firebase and API URL

1.  **Firebase Setup:** Go to the [Firebase Console](https://console.firebase.google.com/), create a Web App, and enable **Email/Password** and **Google** sign-in providers in Authentication settings.
2.  **Update Config:** Open `firebase-config.js` and replace the placeholder keys with your Firebase configuration.
3.  **Set Backend URL:** Verify the `API_BASE_URL` in `firebase-config.js` matches your backend's address (default: `http://localhost:8000`).

### 3. Start the Local Server

Navigate to the project root directory and start a local HTTP server.

> ❗ **Note:** Because the project uses ES Modules, opening `index.html` directly using a `file://` path will cause errors. **You must use an HTTP server.**

| Option | Command | Access URL |
| :--- | :--- | :--- |
| **Option A (Node.js)** | `npx http-server .` | `http://localhost:8080` |
| **Option B (Python 3)** | `python -m http.server 8000` | `http://localhost:8000` |

---

## 🧪 Testing the Features

Once both the frontend and backend servers are running:

* **Auth:** Click **Get Started** and sign up/in. You should land on `dashboard.html`.
* **Recommendation:** Fill and submit forms on `crop-recommend.html` or `fertilizer-recommend.html` to receive predictions.
* **Detection:** Upload an image on `disease-detect.html` to get the predicted disease and recommendation.
* **Chatbot:** Click the floating chat bubble, ask a question, and verify the text response.
* **Forms:** Submit data on the survey/feedback/contact forms. Data is cached locally in `localStorage` for demo purposes.

---

## 🚧 Development Status

FarmSathi is currently under active development.

### Implemented:

* Crop and fertilizer recommendation machine learning models (Backend).
* Complete Multi-page Frontend with Firebase Auth and API integration.

### Upcoming Features:

* Integration of pesticide recommendation.
* Expansion of the knowledge base with pest and disease libraries.
* Scalability for additional features like irrigation suggestions.
