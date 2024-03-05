import { FaHandshake, FaPenNib, FaPhotoVideo } from 'react-icons/fa'
import { FaHandHoldingDollar } from 'react-icons/fa6'
import { IoFolderOutline } from 'react-icons/io5'
import { MdOutlineDesignServices } from 'react-icons/md'
import { PiDevices } from 'react-icons/pi'
import { VscAccount } from 'react-icons/vsc'

interface DataItem {
	ico: JSX.Element
	value: string
}

export const data: DataItem[] = [
	{ ico: <VscAccount />, value: 'Marketing & Communication' },
	{ ico: <FaPenNib />, value: 'UI/UX Design' },
	{ ico: <FaHandHoldingDollar />, value: 'Finance Management' },
	{ ico: <PiDevices />, value: 'Web Developer' },
	{ ico: <IoFolderOutline />, value: 'Project Management' },
	{ ico: <FaHandshake />, value: 'Business & Consulting' },
	{ ico: <MdOutlineDesignServices />, value: 'Graphic Designer' },
	{ ico: <FaPhotoVideo />, value: 'Video Editor' },
]
