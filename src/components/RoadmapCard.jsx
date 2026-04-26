import React, { useState, useEffect } from 'react';

/**
 * ProgressBar component displays a progress bar based on the total and done values.
 * @param {Object} props - Component properties
 * @param {number} props.total - Total number of items
 * @param {number} props.done - Number of completed items
 * @returns {JSX.Element} ProgressBar component
 */
function ProgressBar({ total, done }) {
  const percent = total > 0 ? (done / total) * 100 : 0;

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-fill"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}

/**
 * TopicCard component represents a single topic with a checkbox.
 * @param {Object} props - Component properties
 * @param {string} props.name - Topic name
 * @param {boolean} props.checked - Whether the topic is checked
 * @param {function} props.onToggle - Callback function for checkbox toggle
 * @returns {JSX.Element} TopicCard component
 */
function TopicCard({ name, checked, onToggle }) {
  return (
    <label className="topic-card">
      <span className={`topic-text ${checked ? 'topic-checked' : ''}`}>
        {name}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="topic-checkbox"
      />
    </label>
  );
}

/**
 * RoadmapCard component displays a roadmap with progress bar and topics list.
 * @param {Object} props - Component properties
 * @param {Object} props.roadmap - Roadmap data
 * @param {function} props.onUpdate - Callback function for updating roadmap
 * @param {function} props.onDelete - Callback function for deleting roadmap
 * @returns {JSX.Element} RoadmapCard component
 */
const RoadmapCard = ({ roadmap, onUpdate, onDelete }) => {
  const [topics, setTopics] = useState(roadmap.topics);
  const [isVisible, setIsVisible] = useState(false);
  const totalTopics = topics.length;
  const doneTopics = topics.filter((topic) => topic.checked).length;

  /**
   * Updates topics state when roadmap topics change.
   */
  useEffect(() => {
    setTopics(roadmap.topics);
  }, [roadmap.topics]);

  /**
   * Toggles a topic's checked state and updates roadmap.
   * @param {number} index - Index of the topic to toggle
   */
  const handleToggleTopic = (index) => {
    const updatedTopics = topics.map((topic, i) =>
      i === index ? { ...topic, checked: !topic.checked } : topic
    );
    setTopics(updatedTopics);
    onUpdate({ ...roadmap, topics: updatedTopics });
  };

  /**
   * Deletes the roadmap after confirmation.
   */
  const handleDeleteClick = () => {
    if (window.confirm(`Are you sure you want to delete the "${roadmap.title}" roadmap?`)) {
      onDelete(roadmap.id);
    }
  };

  return (
    <div className="roadmap-card">
      <div className="card-header">
        <h3 className="card-title">{roadmap.title}</h3>
        <button
          onClick={handleDeleteClick}
          className="delete-button"
          title="Delete Roadmap"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="delete-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      <div className="card-content">
        <p className="card-description">
          Track your progress through the <strong>{roadmap.title}</strong> roadmap.
        </p>

        <ProgressBar total={totalTopics} done={doneTopics} />
        <p className="progress-text">{doneTopics} / {totalTopics} topics completed</p>

        <button
          onClick={() => setIsVisible(!isVisible)}
          className="toggle-button"
        >
          {isVisible ? 'Hide Topics' : 'Show Topics'}
        </button>

        {isVisible && (
          <div className="topics-list-container custom-scrollbar">
            {topics.map((topic, index) => (
              <TopicCard
                key={index}
                name={topic.name}
                checked={topic.checked}
                onToggle={() => handleToggleTopic(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RoadmapCard;