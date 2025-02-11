import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

const db = sql('meals.db')

// .all Fetch all data from the columns
// .get Get all data from a single row
// .run Insert data into db
export async function getMeals() {
        await new Promise((resolve) => setTimeout(resolve, 3000))
        return db.prepare('SELECT * FROM meals').all()

}

export function getMeal(slug) {
        return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export function enterMeal(meal){
        meal.slug  = slugify(meal.title, { lower:true })
        meal.instructions = xss(meal.instructions)
}