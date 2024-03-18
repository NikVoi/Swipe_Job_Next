import styles from './Vacations.module.scss'

export default function Vacations() {
	return (
		<section className={styles.vacations}>
			<ul>
				<li>
					<div className={styles.wrapper}>
						<div className={styles.companyName}>Amazon </div>
						<div className={styles.vacation}>Senior UI/UX Designer</div>

						<div className={styles.keyWord}>
							<div className={styles.item}>Company</div>
							<div className={styles.item}>Home Work</div>
							<div className={styles.item}>Front-end</div>
							<div className={styles.item}>soft</div>
						</div>
					</div>

					<div>
						<div className={styles.salary}>$250/hr</div>
						<div className={styles.place}>Minsk</div>
					</div>
				</li>

				<li>
					<div className={styles.wrapper}>
						<div className={styles.companyName}>Amazon </div>
						<div className={styles.vacation}>Senior UI/UX Designer</div>

						<div className={styles.keyWord}>
							<div className={styles.item}>Company</div>
							<div className={styles.item}>Home Work</div>
							<div className={styles.item}>Front-end</div>
							<div className={styles.item}>soft</div>
						</div>
					</div>

					<div>
						<div className={styles.salary}>$250/hr</div>
						<div className={styles.place}>Minsk</div>
					</div>
				</li>

				<li>
					<div className={styles.wrapper}>
						<div className={styles.companyName}>Amazon </div>
						<div className={styles.vacation}>Senior UI/UX Designer</div>

						<div className={styles.keyWord}>
							<div className={styles.item}>Company</div>
							<div className={styles.item}>Home Work</div>
							<div className={styles.item}>Home Work</div>
							<div className={styles.item}>Home Work</div>
							<div className={styles.item}>Front-end</div>
							<div className={styles.item}>soft</div>
						</div>
					</div>

					<div>
						<div className={styles.salary}>$250/hr</div>
						<div className={styles.place}>Minsk</div>
					</div>
				</li>
			</ul>

			{/* <div className={styles.notFound}>There are no active vacancies</div> */}
		</section>
	)
}
