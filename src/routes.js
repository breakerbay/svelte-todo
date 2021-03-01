// Import Svelte components
import Book from './components/Book.svelte'
import List from './components/List.svelte'
import NotFound from './components/NotFound.svelte'

// Route dictionary
export default {
    '/': List,
    '/book/:id': Book,
    // Catch-all route, must be last
    '*': NotFound
}


import Home from './routes/Home.svelte';
import Lorem from './routes/Lorem.svelte';
import Book from './routes/Book.svelte'
import Books from './routes/Books.svelte'
import Dogs from './routes/Dogs.svelte'
import Images from './routes/Images.svelte'
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Home,
    '/dogs': Dogs,
    '/books': Books,
    '/books/:id': Book,
    '/lorem/:repeat': Lorem,
    '/images': Images,
    // The catch-all route must always be last
    '*': NotFound
};
