import ImagePicker from '@/components/meals/Meals-Picker';
import classes from './page.module.css';

export default function ShareMealPage() {
    // 
    const submitMeal = async (formData) => {
        'use server'
        const meal = {
            title: formData.get('title'),
            image: formData.get('image'),
            creator_email: formData.get('email'),
            creator: formData.get('creator'),
            summary: formData.get('summary'),
            instructions: formData.get('instructions'),
        }
        console.log(meal)
    }
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Share your <span className={classes.highlight}>Favorite Meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={submitMeal}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Meal Title:</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Summary:</label>
                        <input type="text" id="summary" name="summary" required />
                    </p>
                    <p>
                        <label htmlFor="instructions">Cooking Instructions:</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows="10"
                            required
                        ></textarea>
                    </p>
                    <ImagePicker label='Meal-image' name='image'/>
                    <p className={classes.actions}>
                        <button type="submit">Share Meal</button>
                    </p>
                </form>
            </main>
        </>
    );
}