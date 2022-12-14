import Data from "../data";
import Header from "./Header";
import Items from "./EmployeeListItem";

const EmployeeDetails = Data.map((ele, index) => {
  return <Items Key={index} {...ele} />;
});

export default function HomePage(props) {
  return (
    <div className="home">
      <Header />
      <section className="emplList">{EmployeeDetails}</section>
    </div>
  );
}
