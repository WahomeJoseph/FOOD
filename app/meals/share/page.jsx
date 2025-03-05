'use client'
import ImagePicker from '@/components/meals/Meals-Picker';
import classes from './page.module.css';
import { submitMeal } from '@/lib/Submit';
import SubmitMeals from '@/components/meals/SubmitMeals';
import { useActionState } from 'react';

export const generatemetadata = () => {
    return {
        title: 'Share Ur Cuisine To Foodies',
        description: 'Delicious meals, shared by a food-loving community.',
    };
};

export default function ShareMealPage() {
    const [state, formAction] = useActionState(submitMeal, {message: null})

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Share your <span className={classes.highlight}>Favorite Meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={formAction}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="creator"/>
                        </p>
                        <p>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email"/>
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Meal Title:</label>
                        <input type="text" id="title" name="title"/>
                    </p>
                    <p>
                        <label htmlFor="summary">Summary:</label>
                        <input type="text" id="summary" name="summary"/>
                    </p>
                    <p>
                        <label htmlFor="instructions">Cooking Instructions:</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows="10"
                            
                        ></textarea>
                    </p>
                    <ImagePicker label='Meal-image' name='image'/>
                    {state.message && <p>{state.message}</p>}
                    <p className={classes.actions}>
                        <SubmitMeals />
                    </p>
                </form>
            </main>
        </>
    );
}