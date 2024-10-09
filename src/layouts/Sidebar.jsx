import React from 'react';

const Sidebar = ({ isOpen }) => (
  <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
    <ul>
      {['Explore', 'Chat', 'My Characters', 'Gallery', 'Go Premium'].map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;