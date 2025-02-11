'use server'
import { redirect } from "next/navigation"
import { uploadMeal } from "./Meals"

function isValidText(text) {
    return !text || text.trim() === ''
}
export async function submitMeal(prevState, formData){
    
    const meal = {
        title: formData.get('title'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
    }

    if (isValidText(meal.title) || 
        isValidText(meal.name) || 
        isValidText(meal.creator_email) || 
        !meal.creator_email.includes('@') ||
        isValidText(meal.summary) || 
        isValidText(meal.instructions) ||
        !meal.image || meal.image.size === 0
    ) {
        return {
            message: 'Oops! Invalid Inputs'
        }
    }
    await uploadMeal(meal)
    redirect('/meals')
}