import "./Book.css"
import OrderButton from "./OrderButton"


const Book = (props) => {
  return (
    <div className="oneBook">
      <img src={props.myimage} alt="Image Harry Potter" />
    <h2 className="bookName">{props.mytitle}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptatibus dolorem porro sit tenetur est repudiandae similique qui aspernatur quam possimus eaque, id mollitia quae iure perspiciatis, distinctio, recusandae molestias.</p>
    <OrderButton />
    </div>
  )
}

export default Book;



// Komponenta je obycejna funkce
// komponenta má stejný název jako je název souboru
// komponenta obsahuje return
// na konci souboru musí být řádek s exportem
// v return musí něco být
// return dokaze vratit jen jeden tag