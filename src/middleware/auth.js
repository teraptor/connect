export default function ({ store, redirect }) {
    return async (to) => {
        if (!store.state.auth.isAuthenticated && !['/login'].includes(to.path)) {
        return redirect('/login');
        }
    };
}