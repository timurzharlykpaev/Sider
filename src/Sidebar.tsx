
import React from 'react';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li><a >Dashboard</a></li>
          <li><a  >Profile</a></li>
          <li><a  >Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
