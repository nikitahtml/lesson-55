import React, { useState } from 'react';
import Burger from './components/Burger';
import IngredientButton from './components/IngredientButton';
import { INGREDIENTS } from './ingredients';
import { Ingredient } from './types';
import './App.css';

const BASE_PRICE = 30;

const App: React.FC = () => {
    const [burgerIngredients, setBurgerIngredients] = useState<Ingredient[]>([]);

    const addIngredient = (ingredient: Ingredient) => {
        setBurgerIngredients([...burgerIngredients, ingredient]);
    };

    const removeIngredient = () => {
        setBurgerIngredients(burgerIngredients.slice(0, -1));
    };

    const calculatePrice = () => {
        return burgerIngredients.reduce((total, ingredient) => total + ingredient.price, BASE_PRICE);
    };

    return (
        <div className="App">
            <h1>Burger Builder</h1>
            <div className="ingredient-buttons">
                {INGREDIENTS.map((ingredient) => (
                    <IngredientButton key={ingredient.name} ingredient={ingredient} onAdd={addIngredient} />
                ))}
            </div>
            <Burger ingredients={burgerIngredients} />
            <button onClick={removeIngredient}>Remove Last Ingredient</button>
            <h2>Total Price: {calculatePrice()} сом</h2>
        </div>
    );
};

export default App;

