let apiUrl = 'http://localhost:8080/api/'
if (process.env.NODE_ENV === 'production') {
    apiUrl = process.env.REACT_APP_URL
}
export default apiUrl
