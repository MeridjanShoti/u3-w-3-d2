import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addQuery, RESET_JOBS, searchJob } from "../redux/actions";
import Job from "./Job";
import { useEffect } from "react";

const MainSearch = () => {
  const jobs = useSelector((state) => state.jobs.content);
  const query = useSelector((state) => state.query.content);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(addQuery(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(searchJob(query));
  };
  useEffect(() => {
    dispatch({ type: RESET_JOBS });
    dispatch(addQuery(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(query);
  return (
    <Container>
      {console.log("jobs mainsearch", jobs)}
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
          {jobs ? jobs.map((jobData) => <Job key={jobData._id} data={jobData} />) : <Alert>no jobs</Alert>}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
