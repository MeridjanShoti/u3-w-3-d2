import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchJob } from "../redux/actions";

const MainSearch = () => {
  const jobs = useSelector((state) => state.jobs);
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(searchJob(query));
  };

  return (
    <Container>
      {console.log("jobs", jobs)}
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Link to="/favourites">go to favourites</Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
