// App.jsx
import React, { useState, useEffect } from 'react';
import RoadmapCard from './components/RoadmapCard';
import AddRoadmap from './components/AddRoadmap';
import Navbar from './components/Navbar'; // Import Navbar
import './index.css';

function App() {
  const [roadmaps, setRoadmaps] = useState(() => {
    const saved = localStorage.getItem('roadmaps');
    return saved ? JSON.parse(saved) : [
      {
        id: 'web-development',
        title: "Web Development",
        topics: [
          { name: "HTML & Semantic Tags", checked: false },
          { name: "CSS (Flexbox, Grid)", checked: false },
          { name: "JavaScript Basics", checked: false },
          { name: "DOM Manipulation", checked: false },
          { name: "Responsive Design", checked: false },
          { name: "Git & GitHub", checked: false },
          { name: "React (Hooks, Props, State)", checked: false },
          { name: "React Router", checked: false },
          { name: "APIs & Axios", checked: false },
          { name: "Node.js & Express", checked: false },
          { name: "MongoDB & Mongoose", checked: false },
          { name: "Authentication (JWT, OAuth)", checked: false },
          { name: "Deployment (Netlify, Vercel)", checked: false },
          { name: "CI/CD Pipelines", checked: false },
          { name: "Performance Optimization", checked: false }
        ]
      },
      {
        id: 'machine-learning',
        title: "Machine Learning",
        topics: [
          { name: "Python & NumPy", checked: false },
          { name: "Pandas & Data Cleaning", checked: false },
          { name: "Data Visualization (Matplotlib, Seaborn)", checked: false },
          { name: "Statistics & Probability", checked: false },
          { name: "Linear & Logistic Regression", checked: false },
          { name: "Decision Trees & Random Forest", checked: false },
          { name: "KNN & SVM", checked: false },
          { name: "Clustering (K-Means, DBSCAN)", checked: false },
          { name: "Dimensionality Reduction (PCA)", checked: false },
          { name: "Model Evaluation & Tuning", checked: false },
          { name: "Neural Networks & Deep Learning (Keras/TensorFlow)", checked: false },
          { name: "Transfer Learning", checked: false },
          { name: "Deployment using Flask/Streamlit", checked: false },
          { name: "Project: ML Prediction System", checked: false }
        ]
      },
      {
        id: 'cybersecurity',
        title: "Cybersecurity",
        topics: [
          { name: "Cybersecurity Fundamentals", checked: false },
          { name: "Network Basics & Protocols (TCP/IP, UDP)", checked: false },
          { name: "Linux Commands & Scripting", checked: false },
          { name: "Cryptography (Hashing, Encryption)", checked: false },
          { name: "Web Vulnerabilities (OWASP Top 10)", checked: false },
          { name: "Penetration Testing Basics", checked: false },
          { name: "Wireshark & Packet Analysis", checked: false },
          { name: "Firewalls & VPNs", checked: false },
          { name: "Malware Types & Detection", checked: false },
          { name: "Incident Response & Logging", checked: false },
          { name: "Security Certifications (CEH, CompTIA Security+)", checked: false },
          { name: "Capture The Flag (CTF) Practice", checked: false },
          { name: "Security Tools: Metasploit, Nmap", checked: false },
          { name: "Project: Vulnerability Scanner", checked: false }
        ]
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('roadmaps', JSON.stringify(roadmaps));
  }, [roadmaps]);

  const addRoadmap = (title, topicsString) => {
    const newRoadmap = {
      id: title.toLowerCase().replace(/\s/g, '-'),
      title,
      topics: topicsString.split(',').map((t) => ({ name: t.trim(), checked: false }))
    };
    setRoadmaps((prevRoadmaps) => [...prevRoadmaps, newRoadmap]);
  };

  const updateRoadmap = (updatedRoadmap) => {
    setRoadmaps((prevRoadmaps) =>
      prevRoadmaps.map((rm) => (rm.id === updatedRoadmap.id ? updatedRoadmap : rm))
    );
  };

  const deleteRoadmap = (id) => {
    setRoadmaps((prevRoadmaps) => prevRoadmaps.filter((rm) => rm.id !== id));
  };

  return (
    <div className="app-container">
      <Navbar /> {/* Integrated Navbar */}

      <header id="top" className="header-section"> {/* Added ID for navigation */}
        <h1 className="header-title animate-fade-in-down">🚀 SkillPath Tracker</h1>
        <p className="header-description animate-fade-in">
          Track and visualize your personalized learning roadmaps across domains like Web Development, ML, and Cybersecurity.
        </p>
      </header>

      <section id="add-roadmap" className="add-roadmap-section"> {/* Added ID for navigation */}
        <h2 className="section-title animate-fade-in-right">➕ Add a New Roadmap</h2>
        <AddRoadmap onAdd={addRoadmap} />
      </section>

      <section id="your-roadmaps" className="roadmaps-section"> {/* Added ID for navigation */}
        <h2 className="section-title animate-fade-in-left">📚 Your Learning Paths</h2>
        <div className="roadmaps-grid">
          {roadmaps.map((rm) => (
            <RoadmapCard
              key={rm.id}
              roadmap={rm}
              onUpdate={updateRoadmap}
              onDelete={deleteRoadmap}
            />
          ))}
        </div>
      </section>

      
    </div>
  );
}

export default App;