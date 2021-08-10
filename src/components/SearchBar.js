import "./styles/SearchBar.css";
import { useEffect } from "react";

export default function SearchBar() {
  const getSearch = (query) => {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve({ msg: "promise resolved", query });
        }, 2000);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  };

  useEffect(async () => {
    getSearch("lagaan")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("call is executed");
    // let reponse = await getSearch("lagaan");
    // // api call with response data
  }, []);
  return (
    <div className="search-bar">
      <input type="search" />
      <button>Search</button>
    </div>
  );
}
