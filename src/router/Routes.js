import Books from "../views/Books";
import Categores from "../views/Categories";

export const Routes = [
    {
        path: '/',
        component: Books,
    },
    {
        path: '/books',
        component: Books,
    },
    {
        path: '/categories',
        component: Categores,
    },
];