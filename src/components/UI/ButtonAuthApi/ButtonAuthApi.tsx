import { FC, MouseEventHandler, ReactNode } from 'react'
import styles from './ButtonAuthApi.module.scss'

type Props = {
	onClick: MouseEventHandler<HTMLButtonElement>
	icon: ReactNode
}

const ButtonAuthApi: FC<Props> = ({ onClick, icon }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{icon}
		</button>
	)
}

export default ButtonAuthApi
