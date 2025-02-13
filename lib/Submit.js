'use server'
import { redirect } from "next/navigation"
import { uploadMeal } from "./Meals"
import { revalidatePath } from "next/cache"

function isValidText(text) {
    return !text || text.trim() === ''
}
export async function submitMeal(prevState, formData){
    
    const meal = {
        title: formData.get('title'),
        creator: formData.get('creator'),
        creator_email: formData.get('email'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
    }
    console.log(meal)

    if (isValidText(meal.title) || 
        isValidText(meal.creator) || 
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
    revalidatePath('/meals') //
    redirect('/meals')
}