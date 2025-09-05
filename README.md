#!/bin/bash
# =============================================
# README.md generator for Anshu Portfolio
# =============================================

# --- Personalization ---
# Fill these variables out before running the script
LIVE_DEMO_URL="https://anshu-portfolio-ecru.vercel.app/"
LINKEDIN_URL="https://www.linkedin.com/in/anshukush/"
EMAIL_ADDRESS="anshu.kush007@gmail.com"


# Remove existing README.md if it exists
if [ -f README.md ]; then
    echo "⚠️  README.md already exists. Overwriting..."
    rm README.md
fi

# Create new README.md
cat << EOF > README.md
# 🌐 Anshu Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A modern and responsive **developer portfolio** built with **React + Vite** to showcase my projects, skills, and experience.

---

### 🚀 **[Live Demo](${https://anshu-portfolio-ecru.vercel.app/})**

---

## 📸 Preview

![Portfolio Screenshot](${SCREENSHOT_URL})

---

## 💡 Overview
This is my personal portfolio website where you can:
- Explore my **projects** and **achievements**.
- Learn more about my **skills**.
- Connect with me via the **contact form**.

---

## 🛠️ Built With
- ⚛️ **React** – Component-based UI
- ⚡ **Vite** – Fast build tool
- 🎨 **Tailwind CSS** – Styling & responsiveness
- 📄 **React Router** – Page navigation
- ✉️ **EmailJS** – Client-side email service

---

## ✨ Features
- 📂 Projects gallery with live links and GitHub repos.
- 🌓 Dark / Light theme support (if implemented).
- 📱 Fully responsive design for all devices.
- ✉️ Functional contact form to reach me directly.

---

## 🏗️ Getting Started

### Prerequisites
Make sure you have **Node.js** (v18+) and **npm** installed.

### Installation & Setup

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/anshukushwaha07/AnshuPortfolio.git
   cd AnshuPortfolio
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables:**
   - Create a \`.env\` file in the root of the project.
   - Copy the contents of \`.env.example\` into your new \`.env\` file.
   - Fill in your EmailJS credentials:
     \`\`\`
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     \`\`\`

### Run Locally
Start the development server:
\`\`\`bash
npm run dev
\`\`\`
The application will be available at \`http://localhost:5173\`.

### Build for Production
Generate an optimized build for deployment:
\`\`\`bash
npm run build
\`\`\`

---

## 🌍 Deployment
This project can be easily deployed to any static site hosting service:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

---

## 📬 Contact
If you like my work or want to collaborate, feel free to connect with me:

- **LinkedIn:** [${LINKEDIN_URL}](${LINKEDIN_URL})
- **Email:** [${EMAIL_ADDRESS}](mailto:${EMAIL_ADDRESS})

⭐ If you find this project useful, please consider giving it a star!

EOF

echo "✅ README.md created successfully!"
