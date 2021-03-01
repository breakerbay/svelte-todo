<style>
  .wrapper {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
    grid-auto-rows: minmax(10em, auto);
    gap: 3em;
    background-color: #fff;
    color: #444;
  }

  .box {
    background-color: rgb(120, 70, 123);
    border: 5px solid rgb(88, 55, 112);
    color: #fff;
    margin-right: 2em;
    border-radius: 5px;
    padding: 20px;
    font: 150%/1.3 "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans",
    Geneva, Verdana, sans-serif;
  }
</style>

<h1>Library</h1>
<div class="wrapper">
  {#each books as book, i}
    <div class="box">
    <a href="#/books/{i}">
      <div>
        <img src={book.cover} alt={book.title + ' by ' +book.author} />
      </div>
      <div>
        <p>
          {book.title}
          <span>({book.year})</span>
        </p>
        <p>{book.author}</p>
      </div>
    </a>
    </div>
  {/each}
</div>

<script>
import books from '../books'
</script>
