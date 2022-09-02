import React from 'react';
import MealService from '../Service/MealService';

class MealComponent extends React.Component {

    constructor(props) {
        console.log("Constructor ran");
        super(props);
        this.state = {
            meals:[]
        }
    }

    // componentDidMount method is invoked imediately after a component is mounted
    componentDidMount() {
        console.log("Component Mounted Response:");
        MealService.getMeals().then((Response) => {
            console.log(Response);
            this.setState({ meals: Response.data });
        });
    }

    render() {
        console.log("Render State: ");
        console.log(this.state);

        return(
            <div>
                <h2 className="text-center">REST Extracted List</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td> Meal Id</td>
                            <td> Meal Name</td>
                            <td> Calories</td>
                            <td> Protein</td>
                            <td> Carbohydrates</td>
                            <td> Fat</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.meals.map(
                                meal => 
                                <tr key= { meal.mealId }>
                                    <td> { meal.mealId }</td>
                                    <td> { meal.name }</td>
                                    <td> { meal.calories }</td>
                                    <td> { meal.protein }g</td>
                                    <td> { meal.carbohydrates }g</td>
                                    <td> { meal.fat }g</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MealComponent;