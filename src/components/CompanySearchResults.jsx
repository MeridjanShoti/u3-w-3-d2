import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../redux/actions";

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.content);
  const params = useParams();

  useEffect(() => {
    console.log(params);
    dispatch(getJobs(params.company));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  console.log("jobs companysearch", jobs);
  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
