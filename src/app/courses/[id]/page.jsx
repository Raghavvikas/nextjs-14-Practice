const Courses = ({ params }) => {
  console.log(params.id);
  return <div>{params.id}</div>;
};

export default Courses;
