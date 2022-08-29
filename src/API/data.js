import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/random?apiKey=1f07cf1909964d859a12b07ef33b30c1'
});

