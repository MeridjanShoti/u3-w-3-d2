import { useSelector } from "react-redux";
const Favourites = () => {
  const favouriteJobs = useSelector((state) => state.favourites);
  return (
    <ul>
      {favouriteJobs.map((job, index) => (
        <li key={`job-${index}`}>{job}</li>
      ))}
    </ul>
  );
};
export default Favourites;
