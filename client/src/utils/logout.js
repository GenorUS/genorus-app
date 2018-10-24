export default {
    logout: function() {
        localStorage.removeItem('jwtToken');
    }
}