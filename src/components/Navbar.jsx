import React from 'react';

/**
 * Navbar component that renders the navigation bar for the application.
 * 
 * @returns {JSX.Element} The JSX element representing the navigation bar.
 */
function Navbar() {
  return (
    /**
     * The navigation bar container element.
     */
    <nav className="navbar">
      {/**
       * The container element for the navigation bar content.
       */}
      <div className="navbar-container">
        {/**
         * The brand link for the application.
         */}
        <a href="#top" className="navbar-brand">SkillPath Tracker</a>
        {/**
         * The list of navigation links.
         */}
        <ul className="navbar-links">
          {/**
           * The list item for the "Add Roadmap" link.
           */}
          <li>
            {/**
             * The link to the "Add Roadmap" section.
             */}
            <a href="#add-roadmap" className="navbar-link">Add Roadmap</a>
          </li>
          {/**
           * The list item for the "Your Roadmaps" link.
           */}
          <li>
            {/**
             * The link to the "Your Roadmaps" section.
             */}
            <a href="#your-roadmaps" className="navbar-link">Your Roadmaps</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/**
 * Exports the Navbar component as the default export.
 */
export default Navbar;