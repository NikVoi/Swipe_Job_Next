'use client'

import Select from '@/components/UI/Select/Select'
import classNames from 'classnames'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

import styles from './FormSingIn.module.scss'
const options = [
	{ value: 'worker', label: "I'm looking for a job" },
	{ value: 'employer', label: "I'm looking for an employee" },
]

export default function FormSingIn() {
	const locale = useLocale()

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>
				Welcome! <span>User</span>
			</h2>
			<h3 className={styles.description}>Enter your details</h3>

			<div className={styles.form}>
				<input
					type='text'
					className={styles.input}
					placeholder='Ivan Ivanov Ivanovich'
				/>

				<input
					type='email'
					className={styles.input}
					placeholder='example@mail.com'
				/>

				<Select options={options} defaultValue={'worker'} onChange={() => {}} />

				<div className={styles.join}>
					<input
						type='password'
						className={classNames(styles.input, styles.mb)}
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
