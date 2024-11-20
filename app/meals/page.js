import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'

export const metadata = {
  title: 'All Meals',
  description: 'Browse Meals created by our community',
}

export default async function MealsPage() {
  const meals = await getMeals()

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created by{' '}
          <span className={classes.highlight}>you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself, It is easy and fun
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  )
}