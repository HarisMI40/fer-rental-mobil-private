import axios from "axios";

const API_URL = "https://api-car-rental.binaracademy.org/admin";
const token = localStorage.getItem('token_Admin')

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
