// Import Svelte components
import Home from './components/Home.svelte'
import CheckerProjects from './components/checker/CheckerProjects.svelte'
import CheckerProject from './components/checker/CheckerProject.svelte'
import ToDos from './components/ToDos.svelte'
import Images from './components/Images.svelte'
import StaticImages from './components/StaticImages.svelte'
import Login from './components/Login.svelte'
import NotFound from './components/NotFound.svelte'

// Route dictionary
export default {
    '/': Home,
    '/projects': CheckerProjects,
    '/projects/:id': CheckerProject,
    '/images': Images,
    '/static-images': StaticImages,
    '/todos': ToDos,
    '/login': Login,
    // Catch-all route, must be last
    '*': NotFound
}


/*
import Home from './components/Home.svelte';
import Lorem from './routes/Lorem.svelte';
import Book from './routes/Book.svelte'
import Books from './routes/Books.svelte'
import Dogs from './routes/Dogs.svelte'
import Book from './components/Book.svelte'
import List from './components/List.svelte'

export default {
    '/': Home,
    '/dogs': Dogs,
    '/books': Books,
    '/books/:id': Book,
    '/lorem/:repeat': Lorem,
    // The catch-all route must always be last
    '*': NotFound
};
*/
