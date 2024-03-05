import classNames from 'classnames'
import { FC, MouseEventHandler, ReactNode } from 'react'
import styles from './ButtonAuthLogIn.module.scss'

type Props = {
	text: string
	isActive: boolean
	onClick: MouseEventHandler<HTMLButtonElement>
	icon: ReactNode
}

const ButtonAuthLogIn: FC<Props> = ({ text, isActive, onClick, icon }) => {
	return (
		<button
			className={classNames(styles.button, { [styles.active]: isActive })}
			onClick={onClick}
		>
			{icon} <span>{text}</span>
			<span className={styles.arrow_down}></span>
		</button>
	)
}

export default ButtonAuthLogIn
