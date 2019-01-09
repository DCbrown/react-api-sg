import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 68b78e0420ea8c994399a3af806deb77d2621239a40d8c991e0e47bcb48b2d90"
  }
});
