import React, { Component } from "react";
import { getBooks } from "./../services/fakeBookService";
import "../css/styles.css";

class Books extends Component {
  state = {
    books: getBooks(),
  };

  render() {
    const { length: count } = this.state.books;

    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      <React.Fragment>
        <p>There are {count} movies in the database.</p>
        <div className="container mt-4">
          <div className="row">
            {this.state.books.map((book) => (
              <div className="col-md-4 mb-4" key={book.id}>
                <div className="card rounded-lg" style={{ width: "18rem" }}>
                  <a
                    href={book.volumeInfo.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="card-img-top"
                      style={{ height: "22rem" }}
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <a
                      href={book.volumeInfo.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5 className="card-title d-block text-truncate">
                        {book.volumeInfo.title}
                      </h5>
                    </a>
                    <p className="card-text d-block text-truncate">
                      <span>{book.volumeInfo.authors[0]}</span>
                      {book.volumeInfo.authors[1] && (
                        <span> & {book.volumeInfo.authors[1]}</span>
                      )}
                    </p>
                    <footer className="text-muted d-flex justify-content-between">
                      <span>{book.volumeInfo.categories[0]}</span>
                      <span>{book.volumeInfo.pageCount} pages</span>
                    </footer>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Books;
