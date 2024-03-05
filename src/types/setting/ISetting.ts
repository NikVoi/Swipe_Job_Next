export interface DataItem {
	ico: JSX.Element
	value: string
}

export interface NavigationProps {
	activeItem: string
	onItemClick: (item: string) => void
	data: DataItem[]
}
