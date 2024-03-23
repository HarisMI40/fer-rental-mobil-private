import axios from "axios";

const API_URL = "https://api-car-rental.binaracademy.org/admin";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwNTMzMTc5N30.BPM3cOObRc3Kcxs8vGt3OF86J7Ti620px2otHfCCTJo";

const chartOrderReport = ({ from, until }) => {
  const response = axios.get(
    `${API_URL}/order/reports?from=${from}&until=${until}`,
    {
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    }
  );

  return response;
};

const orderAPI = {
  chartOrderReport,
};

export default orderAPI;
