import axios from "axios";
import React, { useEffect } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

const UserInput = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "formdata");
    axios.post("http://localhost:5000/user", data);
  };

  const options = [
    { value: "USA", label: "USA" },
    { value: "Australia", label: "Australia" },
    { value: "New-Zealand", label: "New-Zealand" },
    { value: "Canada", label: "Canada" },
    { value: "UK", label: "UK" },
    { value: "Ireland", label: "Ireland" },
    { value: "Germany", label: "Germany" },
  ];
  return (
    <div className="flex items-center max-w-lg min-h-screen mx-auto">
      <div className="w-full px-6 py-6 bg-gray-500 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            type="text"
            className="px-3 py-3 my-3 rounded-lg"
            placeholder="First name"
            {...register("firstName", { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            placeholder="Last name"
            className="px-3 py-3 my-3 rounded-lg"
            {...register("lastName", { required: true, maxLength: 100 })}
          />
          <input
            type="text"
            className="px-3 py-3 my-3 rounded-lg"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="tel"
            className="px-3 py-3 my-3 rounded-lg"
            placeholder="Mobile number"
            {...register("mobileNumber", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
          <div className="">
            <p>Course Level</p>
            <select
              {...register("courseLevel", { required: true })}
              className="px-3 py-3 my-3 rounded-lg"
            >
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
          </div>

          <div className="">
            <p className="">Country Preferences</p>
            <Controller
              control={control}
              name="countries"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select
                  default="test"
                  options={options}
                  isMulti
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                />
              )}
            />
          </div>

          <div className="">
            <input
              type="date"
              className="px-6 py-3 my-3 rounded-lg shadow-md cursor-pointer bg-amber-500 hover:bg-amber-400 active:bg-amber-600 "
              {...register("dob", {
                required: false,
              })}
            />
          </div>

          <input
            type="submit"
            className="px-6 py-3 my-3 rounded-lg shadow-md cursor-pointer bg-amber-500 hover:bg-amber-400 active:bg-amber-600 "
          />
        </form>
      </div>
    </div>
  );
};

export default UserInput;
