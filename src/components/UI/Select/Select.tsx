import { ChangeEvent, FC, useState } from 'react'
import { GoArrowSwitch } from 'react-icons/go'
import styles from './Select.module.scss'

type Option = {
	label: string
	value: string
}

type Props = {
	options: Option[]
	defaultValue: string
	onChange: (value: string) => void
}

const Select: FC<Props> = ({ options, defaultValue, onChange }) => {
	const [selectedOption, setSelectedOption] = useState<string>(defaultValue)

	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value
		setSelectedOption(selectedValue)
		onChange(selectedValue)
	}

	return (
		<div className={styles.wrapper}>
			<select
				value={selectedOption}
				onChange={handleSelectChange}
				className={styles.select}
			>
				{options.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{selectedOption && <GoArrowSwitch className={styles.icon} />}
		</div>
	)
}

export default Select
