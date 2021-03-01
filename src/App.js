import { useState, useEffect } from "react";
import { Table } from "./components/Table"
import { Intro } from "./components/Intro"
import { Header } from "./components/Header"
import { orderBy } from "lodash";


function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(["", ""]);

  useEffect(() => {
    fetch('http://3.140.36.36/api/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (

    <>
      <Intro />

      <Header 
        setQuery={ setQuery }
      />

      <Table 
        books={ orderBy(books, sort[0], sort[1]) }
        query={ query }
        sort={ sort }
        setSort={ setSort }
      />
    </>
  );
}

export default App;
