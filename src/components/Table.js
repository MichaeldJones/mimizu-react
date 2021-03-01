export const Table = ({ books, query, sort, setSort }) => {
  
  return (

    <table>
      <thead>
        <tr className="headRow">
          <th onClick={() => {
            if(sort[0] === "title" && sort[1] === "desc") {
              setSort(["title", "asc"]);
            } else {
              setSort(["title", "desc"]);
            }
          }}>Title</th>

          <th onClick={() => {
            if(sort[0] === "author" && sort[1] === "desc") {
              setSort(["author", "asc"]);
            } else {
              setSort(["author", "desc"]);
            }
          }}>Author</th>

          <th onClick={() => {
            if(sort[0] === "total" && sort[1] === "desc") {
              setSort(["total", "asc"]);
            } else {
              setSort(["total", "desc"]);
            }
          }}>Char Count</th>

          <th onClick={() => {
            if(sort[0] === "unique" && sort[1] === "desc") {
              setSort(["unique", "asc"]);
            } else {
              setSort(["unique", "desc"]);
            }
          }}>Unique Kanji</th>
        </tr>
      </thead>
        
      <tbody>
        {books.map(book => {
          if(book.title.includes(query) || book.author.includes(query)) {

            return (
            
              <tr 
                key={book.id} 
                onClick={() => window.open(book.link)}
                className="bodyRow"
              >
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.total}</td>
                <td>{book.unique}</td>
              </tr>
              
            );
          }
          
        })}
      </tbody>
      
      
    </table>
    
  );
}