import { useEffect, useState } from "react";

const useSuites = () => {
  const [suites, setSuites] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/suites")
      .then((res) => res.json())
      .then((data) => setSuites(data));
  }, []);
  return [suites, setSuites];
};
export default useSuites;
