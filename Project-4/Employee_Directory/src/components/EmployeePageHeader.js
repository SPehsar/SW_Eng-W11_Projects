import React from "react";
import data from "../data";
import Employee from "./Employee";

export default function EmployeePageHeader({ name, title, img }) {
  let employee = null;
  data.map((emplName) => {
    const joinedName = emplName.name.split(" ").join("");
    const path = window.location.pathname;
    if (`/employee/${joinedName}` === path) {
      employee = emplName;
      console.log(emplName);
      return employee;
    }
  });

  return (
    <>
      <div>
        <h1>Widget Co. Dating Company Employee</h1>
      </div>
    </>
  );
}
