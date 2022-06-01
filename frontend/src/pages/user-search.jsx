import React, { useState, useEffect } from "react";
import axios from "axios";

const UserSearch = () => {
  const url = "http://localhost:5000/email";

  const [user, setUser] = useState([]);

  function handleInputChange(e) {
    if (e.key === "Enter") {
      axios.post(url, { email: e.target.value }).then((resp) => {
        setUser(resp.data);
        console.log(user, "the user is shown");
      });
    }
  }

  return (
    <div className="App">
      <div className="flex flex-col justify-center mb-4 ">
        <input
          type="email"
          class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          onKeyDown={handleInputChange}
          placeholder="Search Email"
        />

        <ul class="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-black rounded ml-2 bg-slate-500">
          {user.length > 0 &&
            user.map((user) => (
              <li key={user._id}>
                <p class="text-black text-xl leading-tight font-semibold mb-2">
                  {user.email}
                </p>
                <p class="text-black text-xl leading-tight font-semibold mb-2">
                  {user.firstName}
                </p>
                <p class="text-black text-xl leading-tight font-semibold mb-2">
                  {user.lastName}
                </p>
                <p class="text-black text-xl leading-tight font-semibold mb-2">
                  {user.mobileNumber}
                </p>
                <p class="text-black text-xl leading-tight font-semibold mb-2">
                  {user.courseLevel}
                </p>
                <p class="text-black text-xl leading-tight font-semibold mb-2">
                  {user.dob}
                </p>
                <p class="text-black text-xl leading-tight font-semibold mb-2">
                  {user.countries.map((p) => p.value)}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default UserSearch;
