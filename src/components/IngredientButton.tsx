import React from 'react';
import { Ingredient } from '../types';

interface IngredientButtonProps {
    ingredient: Ingredient;
    onAdd: (ingredient: Ingredient) => void;
}

const IngredientButton: React.FC<IngredientButtonProps> = ({ ingredient, onAdd }) => {
    return (
        <button onClick={() => onAdd(ingredient)}>
            <img src={ingredient.image} alt={ingredient.name} />
            {ingredient.name}
        </button>
    );
};

export default IngredientButton;
