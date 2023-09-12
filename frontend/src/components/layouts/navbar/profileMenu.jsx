import React from "react";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <div className="dropdown dropdown-end me-9">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-8 rounded-full">
          <img src="./assets/person.png" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            {/* <span className="badge">New</span> */}
          </Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <a href="/login">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
