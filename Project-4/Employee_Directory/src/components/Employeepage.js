import Data from "../data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeePageHeader from "./EmployeePageHeader";

export default function HomePage2() {
  const [details, setDetails] = useState({});
  const { name } = useParams();
  const getDetails = async () => {
    try {
      const data = Data.find((eachEmployee) => eachEmployee.name === name);
      setDetails(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  const loaded = () => {
    return (
      <div>
        <EmployeePageHeader />

        <ul>
          <h1>{details.name}</h1>
          <center>
            <img src={details.img} alt="img" />
          </center>
          <h3>{details.gender}</h3>
          <h4>{details.phone}</h4>

          <Link to={`/`}>Back To Employees Directory</Link>
        </ul>
      </div>
    );
  };

  const loading = () => {
    return <h2>Loading Employee ...</h2>;
  };
  return details ? loaded() : loading();
}
