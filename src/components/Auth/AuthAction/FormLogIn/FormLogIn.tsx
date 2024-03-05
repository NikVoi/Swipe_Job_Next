import { FaArrowRight } from 'react-icons/fa6'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import styles from './FormLogIn.module.scss'

export default function FormLogIn() {
	const t = useTranslations('MainPage')
	const locale = useLocale()

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>
				Welcome back! <span>User</span>
			</h2>
			<h3 className={styles.description}>Enter your details</h3>

			<div className={styles.form}>
				<input
					type='email'
					className={styles.input}
					placeholder='example@mail.com'
				/>

				<div className={styles.join}>
					<input
						type='password'
						className={styles.input}
						placeholder='••••••••'
					/>

					<Link href={`/${locale}/setting`}>
						<button className={styles.authButton}>
							<FaArrowRight />
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
