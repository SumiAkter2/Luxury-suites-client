import { useEffect, useState } from "react";

const useSuites = () => {
  const [suites, setSuites] = useState([]);
  useEffect(() => {
    fetch("https://luxury-suites-server.vercel.app/suites")
      .then((res) => res.json())
      .then((data) => setSuites(data));
  }, []);
  return [suites, setSuites];
};
export default useSuites;
