import classes from './loading.module.css'
import Image from 'next/image'
import loading from '@/assets/icons/loading.png'

export default function MealsLoadingPage() {
  return (
    <div>
      <p className={classes.loading}>
        <Image src={loading} alt='Loading meals' width={50} height={50} />
      </p>
    </div>
  )
}
