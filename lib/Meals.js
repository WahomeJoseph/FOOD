import sql from 'better-sqlite3'
const db = sql('meals.db')

// .all Fetch all data from the columns
// .get Get all data from a single row
// .run Insert data into db
export function getMeals() {
        // await new Promise((resolve) => setTimeout(resolve, 2000))
        return db.prepare('SELECT * FROM meals').all()

}

export function getMeal(slug) {
        return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}