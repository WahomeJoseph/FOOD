import sql from 'better-sqlite3'
const db = sql('meals.db')

// .all Fetch all data from the columns
// .get Get all data from a single row
// .run Insert data into db
export async function getMeals() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        return db.prepare('SELECT * FROM meals').all()
    } catch (error) {
        console.error('Error fetching meals:', error.message);
        throw new Error('Failed to fetch meals');
    }
}