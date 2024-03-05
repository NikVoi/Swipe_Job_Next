'use client'

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useTransition } from 'react'
import { GoArrowSwitch } from 'react-icons/go'

import styles from './LanguageSwitcher.module.scss'

export default function LanguageSwitcher() {
	const [isPending, startTransition] = useTransition()
	const router = useRouter()
	const localeActive = useLocale()

	const OnSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const nextLocale = e.target.value

		startTransition(() => {
			router.replace(`/${nextLocale}`)
		})
	}

	return (
		<section className={styles.lang}>
			<select
				defaultValue={localeActive}
				onChange={OnSelectChange}
				className={styles.select}
			>
				<option value='en'>English</option>
				<option value='ru'>Русский</option>
			</select>
			<GoArrowSwitch className={styles.ico} />
		</section>
	)
}
