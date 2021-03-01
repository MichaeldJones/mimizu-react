export const Intro = () => {

  return (
    <div className="intro">
      <div>
        <h1>mimizu</h1>
        <p>
          Hello my name is Michael, this is my website mimizu. This website was made in order to easily access kanji and character count info from the public domain library Aozora Bunko.  
        </p>
        <p>
          You can access this data by scrolling down to the table. This table contains 4 columns: Title, Author, Character Count, and Unique Kanji. Each row acts as a link to the actual book in Aozora Bunko. It defaults to just sorting them by their Aozora Bunko order, but you can click on the column titles in order to sort the table by those factors. One click will sort by descending order, then a subsequent click will sort by ascending order. There is also a search feature, which will allow you to search based on author and title.
        </p>
        <p>
          Currently this website is in an early phase of development, and I have a lot planned to add to it. If you have any suggestions of features, design or you just want to reach out to me, please contact me at
        </p>
        <a href="mailto:michaelSoftDev@gmail.com">
          michaelSoftDev@gmail.com
        </a>
      </div>
      
    </div>
  );
}