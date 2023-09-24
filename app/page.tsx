import Header from '@/components/header'
import TopBar from '@/components/top-bar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCheck } from 'lucide-react'

export default function Home() {
	return (
		<main className=''>
			<TopBar />
			<Header />
			{/* Hero Section */}
			<section className='container mt-16'>
				<div className='flex items-center justify-between'>
					{/* Lado esquerdo */}
					<div>
						<Badge className='mb-3'>o melhor para seu evento</Badge>
						<h1 className='font-bold text-5xl leading-[55px] max-w-[512px] mb-6'>
							Planeje seu evento com facilidade
						</h1>
						<p className='text-lg  text-[#979AA0] max-w-[512px] mb-8'>
							A Evenix é a ferramenta perfeita para organizadores de eventos de todos os
							tamanhos. Nossa IA inteligente pode ajudá-lo a planejar eventos de forma
							rápida e fácil, sem comprometer a qualidade.
						</p>
						<div className='flex gap-6'>
							<Button>Planeje seu evento</Button>
							<Button variant={'secondary'}>
								Contato <ArrowRight className='ml-2' size={16} />
							</Button>
						</div>
					</div>
					{/* Lado direito */}
					<div className='pr-16'>
						<picture>
							<img src='/images/card.svg' alt='Card' />
						</picture>
					</div>
				</div>
			</section>
			{/* Details Section */}
			<section className='bg-primary mt-16'>
				<div className='container py-16'>
					<div className='grid grid-cols-2 gap-12 max-w-[702px]'>
						<div>
							<CheckCheck size={16} />
							<h2 className='font-bold text-xl mb-2 mt-4'>Compromisso</h2>
							<p className='text-[#D3E7FF]'>
								Nossa IA inteligente pode criar uma agenda que se adapta às suas
								necessidades e às de seus participantes.
							</p>
						</div>
						<div>
							<CheckCheck size={16} />
							<h2 className='font-bold text-xl mb-2 mt-4'>Compromisso</h2>
							<p className='text-[#D3E7FF]'>
								Nossa IA inteligente pode criar uma agenda que se adapta às suas
								necessidades e às de seus participantes.
							</p>
						</div>
						<div>
							<CheckCheck size={16} />
							<h2 className='font-bold text-xl mb-2 mt-4'>Compromisso</h2>
							<p className='text-[#D3E7FF]'>
								Nossa IA inteligente pode criar uma agenda que se adapta às suas
								necessidades e às de seus participantes.
							</p>
						</div>
						<div>
							<CheckCheck size={16} />
							<h2 className='font-bold text-xl mb-2 mt-4'>Compromisso</h2>
							<p className='text-[#D3E7FF]'>
								Nossa IA inteligente pode criar uma agenda que se adapta às suas
								necessidades e às de seus participantes.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
