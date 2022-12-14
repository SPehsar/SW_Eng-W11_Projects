import Employee from "./Employee";

export default function StaffInfo({ name, title, img }) {
  return (
    <div>
      <Employee name={name} title={title} img={img} />
    </div>
  );
}
