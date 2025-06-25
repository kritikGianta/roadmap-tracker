import React, { useState } from 'react';

function AddRoadmap({ onAdd }) {
  const [title, setTitle] = useState('');
  const [topics, setTopics] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !topics.trim()) {
      alert("Please fill in both the roadmap title and topics.");
      return;
    }
    onAdd(title.trim(), topics.trim());
    setTitle('');
    setTopics('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-roadmap-form animate-fade-in-up">
      <div className="form-group">
        <label htmlFor="roadmapTitle" className="form-label">
          Roadmap Title
        </label>
        <input
          id="roadmapTitle"
          type="text"
          placeholder="e.g., Data Science Basics"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="roadmapTopics" className="form-label">
          Topics (comma-separated)
        </label>
        <textarea
          id="roadmapTopics"
          placeholder="e.g., Python Intro, Statistics, Machine Learning Algorithms"
          className="form-textarea"
          rows={4}
          value={topics}
          onChange={(e) => setTopics(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="submit-button"
      >
        Add New Roadmap
      </button>
    </form>
  );
}

export default AddRoadmap;