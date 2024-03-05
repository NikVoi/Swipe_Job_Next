import Image from 'next/image'
import styles from './AuthSlider.module.scss'

import sliderPic from '@/assets/slider/slider-2.jpg'

export default function AuthSlider() {
	return (
		<section className={styles.slider}>
			<Image src={sliderPic} alt='slide' />
		</section>
	)
}
