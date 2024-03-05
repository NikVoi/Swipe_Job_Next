'use client'

import classNames from 'classnames'

import { NavigationProps } from '@/types/setting/ISetting'
import styles from './Navigation.module.scss'

const Navigation: React.FC<NavigationProps> = ({
	activeItem,
	onItemClick,
	data,
}) => {
	return (
		<section className={styles.navigation}>
			<div className={styles.title}>Setting</div>
			<nav>
				{data.map(item => (
					<div
						key={item.value}
						className={classNames(styles.item, {
							[styles.active]: item.value === activeItem,
						})}
						onClick={() => onItemClick(item.value)}
					>
						<span>{item.ico}</span>
						<span>{item.value}</span>
					</div>
				))}
			</nav>
		</section>
	)
}

export default Navigation
