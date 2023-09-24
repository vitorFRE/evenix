import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Header = () => {
	return (
		<div className='border-b border-zinc-800'>
			<header className='container h-14 flex items-center justify-between'>
				<div className='flex gap-12 items-center'>
					<picture>
						<img
							className='w-24 cursor-pointer'
							src='/images/evenix.svg'
							alt='Logo Evenix'
						/>
					</picture>
					<div className='flex gap-6'>
						<Link href={'/'}>Inicio</Link>
						<Link href={'/'}>Recursos</Link>
						<Link href={'/'}>Planos</Link>
					</div>
				</div>
				<div className='flex items-center gap-4'>
					<Link href={'/'}>Cadastre-se</Link>
					<Button>
						Entre <ArrowRight className='ml-2' size={16} />
					</Button>
				</div>
			</header>
		</div>
	)
}

export default Header
