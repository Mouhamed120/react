import "./styles.css";
const firstBook = {
  image:
    "https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL604_SR604,400_.jpg",
  author: "Marilyn Sadler",
  title: "It's Not Easy Being a Bunny (Beginner Books(R))"
};
const secondBook = {
  image:
    "https://images-na.ssl-images-amazon.com/images/I/91xUsdujK3L._AC_UL604_SR604,400_.jpg",
  author: "Dav Pilkey",
  title: "Cat Kid Comic Club: On Purpose: A Graphic..."
};
const App = () => {
  return (
    <div className="bookList">
      <Book
        image={firstBook.image}
        title={firstBook.title}
        auth={firstBook.author}
      />
      <Book
        image={secondBook.image}
        title={secondBook.title}
        auth={secondBook.author}
      />
    </div>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.image} alt="" />
      <h5 className="title">{props.title}</h5>
      <p>{props.auth}</p>
    </div>
  );
};

export default App;
