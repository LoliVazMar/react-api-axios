import axios from "axios";
import { useEffect, useState } from "react";

const URL_ENDPOINT =
  "https://api-sandbox.confirmsign.com/v4.0/threads/token/n4ddNNGGrrccXXXjjwwPPPnn/6d737572eca925be2fcc7ea416bfb1c5f97d70d9f1ef927130d2839221549427";

export default function AxiosApi() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(URL_ENDPOINT)
      .then((response) => setInfo(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  // function createPost() {
  //   axios.post(`${URL_ENDPOINT}/agreement/true`, info).then((response) => {
  //     setInfo({ ...info, response });
  //   });
  // }

  return [info, loading, error];
}
