import axios from 'axios';

const MEALS_REST_API_URL = "http://localhost:8080/api/allmeals";

class MealService {
    getMeals() {
        return axios.get(MEALS_REST_API_URL);
    }
}

export default new MealService();