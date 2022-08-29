import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/random?apiKey=bae96180cd93409aa123517ee0f4b2a7'
});

