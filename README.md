# 🎨 Interactive AI Video Portfolio

## 📌 Project Overview

This project is a modern and interactive **personal portfolio website** developed using **React.js, JavaScript, and Vite**.

The main purpose of this project is to create a visually engaging portfolio website that showcases a developer's skills, projects, certifications, and professional information.

A key feature of this project is the integration of an **AI-generated talking video and avatar** in the Hero section. Instead of using only a static profile image, the portfolio uses a talking avatar video to create an interactive introduction for visitors.

The project also includes animations, responsive layouts, project showcases, certification displays, and interactive video controls.

---

# 🚀 Features

## 🎥 AI Talking Video / Avatar

- AI-generated talking avatar video
- Video-based Hero section
- Play and Pause functionality
- Resume video functionality
- Standing avatar image when video is paused
- Video and image transition effects
- Responsive video presentation

---

## 🏠 Hero Section

The Hero section provides the first introduction to the portfolio.

It includes:

- Full-screen talking video
- Developer role introduction
- Short professional description
- View My Work button
- Contact Me button
- Play/Pause video control
- Scroll indicator

---

## 👤 About Section

The About section provides information about the developer and includes:

- Introduction
- Profile image
- Technical focus
- Programming technologies
- Interactive technology cards

---

## 🛠️ Skills & Expertise

The Skills and Expertise sections present the technologies and development areas used in the portfolio.

### Frontend

- HTML5
- CSS3
- JavaScript
- React.js
- Bootstrap

### Backend

- Java
- Node.js
- Express.js
- Python
- REST APIs

### Database

- SQL
- MySQL

### Tools & Technologies

- Git
- GitHub
- Postman
- Power BI
- Android Studio
- Visual Studio Code

### Data & AI

- Pandas
- NumPy
- Matplotlib
- Plotly
- Machine Learning
- Generative AI
- LLMs
- Prompt Engineering

---

# 💻 Projects Section

The Projects section showcases the major projects included in the portfolio.

Each project provides information such as:

- Project title
- Project date
- Project type
- Project description
- Technologies used
- Detailed project explanation

The portfolio currently showcases:

### 01. Military Defense Drone with Night Vision & Thermal Imaging

An academic project focused on an autonomous surveillance drone with night vision and thermal imaging capabilities.

### 02. App-Based Market Access Solution

A Raspberry Pi-based food delivery and market access platform connecting vendors and customers.

### 03. Full-Stack E-Commerce Application

A full-stack e-commerce application developed during an internship, including Product, User, Cart, and Order modules.

---

# 📜 Certifications Section

The Certifications section displays technical certifications using certificate images.

The section provides a visual way to showcase completed certifications related to:

- Java
- Python
- SQL
- Web Development
- Data Visualization
- Java Full Stack Development

Users can interact with the certification cards to view the certificate details.

---

# 📩 Contact Section

The Contact section provides a way for visitors to get in touch regarding:

- Job opportunities
- Professional opportunities
- Collaboration
- Projects
- Other professional inquiries

The section also provides direct contact information and professional profile links.

---

# 🎬 Video Interaction

The Hero video uses a simple play/pause interaction.

### When the video is playing

```text
▶️ Talking Video
       ↓
   Avatar Talks
```

### When the video is paused

```text
⏸️ Video Paused
       ↓
Standing Avatar Image
```

### When Resume is clicked

```text
▶️ Resume
     ↓
Talking Video Continues
```

This allows the visitor to control the talking avatar experience without interrupting the rest of the portfolio.

---

# ✨ UI & Animation

The project uses animations and transitions to make the interface more interactive.

Implemented using:

- Framer Motion
- AOS (Animate On Scroll)
- CSS transitions
- Hover effects
- Responsive layouts
- Smooth section navigation

---

# 📱 Responsive Design

The portfolio is designed to work across different screen sizes.

Supported layouts include:

- Desktop
- Laptop
- Tablet
- Mobile

The UI adjusts the layout, typography, spacing, video, and components according to the screen size.

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| JavaScript | Main programming language |
| React.js | Frontend framework |
| Vite | Development and build tool |
| HTML5 | Page structure |
| CSS3 | Styling |
| Tailwind CSS | UI styling and responsive design |
| Framer Motion | UI animations |
| AOS | Scroll animations |
| Git | Version control |
| GitHub | Source code management |

---

# 📁 Project Structure

```text
src/
│
├── assets/
│   │
│   ├── about/
│   │   ├── iamge.png
│   │   ├── Java-Logo.png
│   │   ├── python.png
│   │   └── sql.png
│   │
│   └── hero video/
│       ├── herovideo.mp4
│       └── image.png
│
├── components/
│   ├── About.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Expertise.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Preloader.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

public/
│
└── certificates/
    ├── data-visualization-infosys.jpg
    ├── introduction-to-sql.jpg
    ├── java-full-stack-jspiders.jpg
    ├── learn-java-codechef.jpg
    ├── python-101-ibm.jpg
    └── web-development-udemy.jpg
```

---

# ⚙️ Setup Instructions

## ✅ Step 1: Clone Repository

```bash
git clone https://github.com/JeevaniGowda/Video_Portfolio.git
```

---

## ✅ Step 2: Navigate to Project

```bash
cd Video_Portfolio
```

---

## ✅ Step 3: Install Dependencies

```bash
npm install
```

---

## ✅ Step 4: Run Development Server

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

---

# 📦 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

# 🧪 Development

The project can be developed and tested using:

- Visual Studio Code
- Chrome / Edge
- Vite Development Server
- Git & GitHub

---

# 📚 Concepts Used

This project demonstrates practical implementation of:

- React components
- JavaScript
- React state management
- Video integration
- Image and asset management
- Responsive web design
- CSS styling
- Tailwind CSS
- UI animations
- Scroll animations
- Interactive components
- Git version control
- GitHub repository management
- AI-generated video/avatar integration

---

# 🔮 Future Enhancements

Possible future improvements include:

- More interactive AI avatar functionality
- Additional project demonstrations
- Advanced portfolio animations
- Backend integration
- Dynamic project management
- Contact form backend integration
- Deployment with a custom domain

---

# ⭐ Conclusion

This project demonstrates how a traditional developer portfolio can be enhanced using **modern frontend technologies and AI-generated multimedia**.

The combination of **React.js, JavaScript, Vite, animations, responsive UI, and an AI-generated talking avatar** creates an interactive portfolio experience rather than a simple static webpage.

