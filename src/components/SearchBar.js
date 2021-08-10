import "./styles/SearchBar.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    setQuery(value);

    let result = props.allData.filter((data) => {
      // console.log("search:", data.name.search(query));
      return data.name.search(value) !== -1;
    });
    // console.log("result", result);
    props.setFilteredData(result);
  };

  return (
    <div className="search-bar">
      <input type="search" name={query} value={query} onChange={handleSearch} />
      <button>Search</button>
    </div>
  );
}

// const getSearch = (query) => {
//   return new Promise((resolve, reject) => {
//     try {
//       setTimeout(() => {
//         resolve({ msg: "promise resolved", query });
//       }, 2000);
//     } catch (err) {
//       console.log(err);
//       reject(err);
//     }
//   });
// };

// useEffect(async () => {
//   getSearch("lagaan")
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   console.log("call is executed");
//   // let reponse = await getSearch("lagaan");
//   // // api call with response data
// }, []);
