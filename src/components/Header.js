import logo from "../images/worm.png"

export const Header = ({ setQuery }) => {

  return (
    <header className="head">

      <div className="icon">
        <img src={ logo } alt="mimizu"/>
      </div>
      
      <div className="searchBar" id="searcher">
        <input 
          type="text" 
          onKeyUp={e => setQuery(e.target.value)}
          placeholder="Search ..."
        />
      </div>
    </header>
  );
}