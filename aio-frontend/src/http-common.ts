import axios from "axios";

// En este archivo se establece la conexión con la api mediante axios
export default axios.create({
    baseURL: "http://localhost:9000/",
    headers: {
        "Content-type": "application/json"
    }
});