import Header from '@/components/header'
import { About } from '@/components/home/about'
import HeroAndDetails from '@/components/home/hero-and-details'
import TopBar from '@/components/top-bar'

export default function Home() {
	return (
		<main className=''>
			<TopBar />
			<Header />
			<HeroAndDetails />
			<About />
		</main>
	)
}
