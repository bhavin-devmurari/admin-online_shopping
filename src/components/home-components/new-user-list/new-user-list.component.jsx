import React from 'react';
import './new-user-list.styles.css';
import { Visibility } from '@material-ui/icons';

const NewUserList = () => {
  return (
    <div className="new-user-list-container">
      <span className="new-user-list-title">New Join Members</span>
      <ul className="new-user-list">
        <li className="new-user-list-item">
          <img
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="new-user-image"
          />
          <div className="new-user">
            <span className="new-user-name">Anna Keller</span>
            <span className="new-user-job-title">Software Engineer</span>
          </div>
          <button className="new-user-view-button">
            <Visibility className="new-user-view-icon" />
            Display
          </button>
        </li>

        {/* below is dummay extra user */}
        <li className="new-user-list-item">
          <img
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="new-user-image"
          />
          <div className="new-user">
            <span className="new-user-name">Anna Keller</span>
            <span className="new-user-job-title">Software Engineer</span>
          </div>
          <button className="new-user-view-button">
            <Visibility className="new-user-view-icon" />
            Display
          </button>
        </li>
        <li className="new-user-list-item">
          <img
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="new-user-image"
          />
          <div className="new-user">
            <span className="new-user-name">Anna Keller</span>
            <span className="new-user-job-title">Software Engineer</span>
          </div>
          <button className="new-user-view-button">
            <Visibility className="new-user-view-icon" />
            Display
          </button>
        </li>
        <li className="new-user-list-item">
          <img
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="new-user-image"
          />
          <div className="new-user">
            <span className="new-user-name">Anna Keller</span>
            <span className="new-user-job-title">Software Engineer</span>
          </div>
          <button className="new-user-view-button">
            <Visibility className="new-user-view-icon" />
            Display
          </button>
        </li>
        <li className="new-user-list-item">
          <img
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="new-user-image"
          />
          <div className="new-user">
            <span className="new-user-name">Anna Keller</span>
            <span className="new-user-job-title">Software Engineer</span>
          </div>
          <button className="new-user-view-button">
            <Visibility className="new-user-view-icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NewUserList;
