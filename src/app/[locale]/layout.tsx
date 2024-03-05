import { NextIntlClientProvider, useMessages } from 'next-intl'

import { DarkModeProvider } from '@/context/DarkModeContext'
import '../globals.css'

interface RootLayoutProps {
	children: React.ReactNode
	params: {
		locale: string
	}
}

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<RootLayoutProps>) {
	const messages = useMessages()

	return (
		<html lang={locale}>
			<NextIntlClientProvider messages={messages} locale={locale}>
				<DarkModeProvider>
					<body className={``}>{children}</body>
				</DarkModeProvider>
			</NextIntlClientProvider>
		</html>
	)
}
