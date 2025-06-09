# 🚀 Hecate Landing Page

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Django-092E20?logo=django&logoColor=white" alt="Django">
  <img src="https://img.shields.io/badge/Tailwind_CSS-A1A1A1?logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/MUI-FFFFFF?logo=mui" alt="MUI">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License">

</div>

![Hecate Preview](/frontend/public/hecate_home_screen.png) <!-- Add real screenshot later -->

A sleek landing page for **Hecate** – your intelligent AI chatbot assistant. This project serves as the entry point to showcase Hecate's capabilities, drive user engagement, and connect visitors to the chatbot experience.

---

## ✨ Features

- **Modern UI**: Responsive design built with React + Tailwind CSS
- **AI Integration**: Connected to Gemini's NLP backend
- **Dynamic Components**: Interactive elements using MUI
- **Django-Powered**: Robust backend for form handling & analytics
- **Performance Optimized**: Fast loading with React lazy loading

---

## 🛠️ Tech Stack

| Layer          | Technologies                          |
|----------------|---------------------------------------|
| **Frontend**   | React, Tailwind CSS, MUI              |
| **Backend**    | Django, Python                        |
| **AI Engine**  | Gemini API integration                |
| **Deployment** | (Specify later: e.g., Vercel/Netlify) |

---

## 🛫 Quick Start

1. Clone the repository:

   ```bash
   git clone https://github.com/MatheusDSantossi/hecate-landing-page.git

2. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. Set up Django backend:

   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate    # Windows
   pip install -r requirements.txt
   ```

4. Run both services:

   ```bash
   # Frontend (port 3000)
   npm start
   
   # Backend (port 8000)
   python manage.py runserver
   ```

---

## 📂 Project Structure

```bash
hecate-landing-page/
├── backend/            # Django app
│   ├── project/           # Main logic
│   ├── manage.py
│   └── requirements.txt
├── frontend/           # React app
│   ├── public/
│   ├── src/
│   │   ├── assets/ # Assets ST
│   │   ├── components/ # Reusable UI
│   │   ├── constants/ # Reusable UI
│   │   ├── pages/      # Page layouts
│   │   ├── styles/     # Tailwind config
│   │   ├── utils/     # Reusable UI
│   │   └── App.tsx
│   └── package.json
└── README.md
```

---

## 🔗 Connect to Hecate Chatbot

This landing page integrates with the main Hecate chatbot project:  
[github.com/MatheusDSantossi/hecate-chatbot](https://github.com/MatheusDSantossi/TCC-project)

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.
