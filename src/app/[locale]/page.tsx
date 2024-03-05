'use client'

import DarkThemeButton from '@/components/DarkThemeButton/DarkThemeButton'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import About from '@/components/Home/About/About'
import ChoseCategory from '@/components/Home/ChoseCategory/ChoseCategory'
import CreateAccount from '@/components/Home/CreateAccount/CreateAccount'
import HowItWork from '@/components/Home/HowItWork/HowItWork'
import { useDarkModeContext } from '@/context/DarkModeContext'

export default function Home() {
	const { isDarkMode } = useDarkModeContext()

	return (
		<main
			className={`relative flex flex-col h-full ${isDarkMode ? 'dark' : ''} `}
		>
			<Header />
			<section className='flex-auto'>
				<About />
				<ChoseCategory />
				<CreateAccount />
				<HowItWork />
			</section>
			<Footer />

			<DarkThemeButton />
		</main>
	)
}
