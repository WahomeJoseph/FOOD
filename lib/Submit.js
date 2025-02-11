'use server'
export async function submitMeal(formData){
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