import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
const Favourites = () => {
  const favouriteJobs = useSelector((state) => state.favourites.content);
  if (favouriteJobs && favouriteJobs.length) {
    return (
      <ul>
        {favouriteJobs.map((job, index) => (
          <li key={`job-${index}`}>{job}</li>
        ))}
      </ul>
    );
  } else {
    return <Alert>nessun favourite job</Alert>;
  }
};
export default Favourites;
