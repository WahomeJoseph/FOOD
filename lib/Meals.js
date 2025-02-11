import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'

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

export async function uploadMeal(meal) {
        meal.slug = slugify(meal.title, { lower: true })
        meal.instructions = xss(meal.instructions)

        // store meal images in the file system
        const extension = meal.image.name.split('.').pop()
        const fileName = `${meal.slug}.${extension}`

        const stream = fs.createWriteStream(`public/images/${fileName}`)
        const bufferedImage = await meal.image.arrayBuffer()

        stream.write(Buffer.from(bufferedImage), (error) => {
                if (error) {
                        throw new Error('Meal Image not Saved!')
                }
        })
        // store the image path to the db
        meal.image = `/images/${fileName}`

        // 
        db.prepare(` 
             INSERT INTO meals (title, creator, creator_email, slug, summary, instructions, image)
             VALUES (@title, @creator, @creator_email, @slug, @summary, @instructions, @image)
        `).run(meal)
}