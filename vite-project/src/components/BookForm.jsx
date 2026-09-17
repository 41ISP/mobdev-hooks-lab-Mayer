
import { nanoid } from "nanoid"
import { useState } from "react"
//
const BookForm = ({setBooks}) => {
    const [bookField, setBookField] = useState('')

const onAdd = (e) =>{

        e.preventDefault()

        if (bookField.trim().length === 0 || bookField.trim().length > 60) return

    const newBook = {
            id: nanoid(),
            title: bookField.trim(),
            done: false
        }
    setBooks(books => [...books, newBook])
    setBookField("")
}

    return(
    <div className="add-book-row">
        <input
          className="input"
          id="bookInput"
          value={bookField}
          onChange={(e) => setBookField(e.target.value)}
          placeholder="Название книги..."
        />

            
            <button onClick={onAdd} className="btn" id="addBtn">
          Добавить на полку
        </button>
      </div>
 )       
}
export default BookForm

