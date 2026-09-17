import BookForm from "../components/BookForm"
import BookItem from "../components/BookItem"
import BookList from "../components/BookList"
import { useState } from "react"
import FilterChip from "../components/FilterChip"

const ShelfScreen = () =>{
        const [books, setBooks] = useState([])
    return(
      
    <section className="screen active" id="screen-shelf">
      <p className="greeting">Добрый вечер</p>
      
        {/* BOOKFORM:INPUT */}
        <BookForm setBooks={setBooks}/>
        <FilterChip />
        {/* BookList */}
        <BookList />
        
    </section>

)
}
export default ShelfScreen