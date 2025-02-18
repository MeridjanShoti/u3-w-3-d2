export const ADD_JOBS = "ADD_JOBS";
export const ADD_QUERY = "ADD_QUERY";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const addJobsAction = (data) => ({ type: "ADD_FAVOURITE", payload: data.company_name });
export const addQuery = (e) => ({ type: "ADD_QUERY", payload: e });
export const getJobs = (companyParams) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + companyParams);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: "ADD_JOBS", payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const searchJob = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: "ADD_JOBS", payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
