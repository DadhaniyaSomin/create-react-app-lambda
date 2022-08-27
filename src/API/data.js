import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/random?apiKey=98b372a72de443cb9b0d59fd84776ec1'
});

