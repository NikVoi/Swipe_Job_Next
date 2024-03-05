import classNames from 'classnames'
import { data } from './nav.data'

import styles from './Navigation.module.scss'

export default function Navigation() {
	return (
		<section className={styles.navigation}>
			<div className={styles.title}>Setting</div>

			<nav>
				{data.map(item => (
					<div key={item.value} className={classNames(styles.item)}>
						<span>{item.ico}</span>
						<span>{item.value}</span>
					</div>
				))}
			</nav>
		</section>
	)
}
