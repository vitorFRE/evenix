'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Activity, ArrowRight, Award, CheckCheck, PiggyBank, User2 } from 'lucide-react'
import StickyImage from '../utils/scroll-animation'

const HeroAndDetails = () => {
	return (
		<>
			{/* Hero Section */}
			<section className='container mt-16'>
				<div className='sm:flex items-center justify-between'>
					{/* Lado esquerdo */}
					<div>
						<Badge className='mb-3'>o melhor para seu evento</Badge>
						<h1 className='font-bold text-5xl leading-[55px] max-w-[512px] mb-6'>
							Planeje seu evento com facilidade
						</h1>
						<p className='text-lg  text-slate-400 max-w-[512px] mb-8'>
							A Evenix é a ferramenta perfeita para organizadores de eventos de todos os
							tamanhos. Nossa IA inteligente pode ajudá-lo a planejar eventos de forma
							rápida e fácil, sem comprometer a qualidade.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
							<Button>Planeje seu evento</Button>
							<Button variant={'secondary'}>
								Contato <ArrowRight className='ml-2' size={16} />
							</Button>
						</div>
					</div>
					{/* Lado direito */}
					<StickyImage
						className='hidden md:block'
						marginBottom={64}
						src={'/images/card.svg'}
						stopAt={'second-section'}
					/>
				</div>
			</section>
			{/* Details Section */}
			<section id='second-section' className='bg-primary mt-16'>
				<div className='container py-16'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[702px]'>
						<div>
							<Award size={28} />
							<h2 className='font-bold text-xl mb-2 mt-4'>Compromisso</h2>
							<p className='text-[#D3E7FF]'>
								Nossa IA inteligente pode criar uma agenda que se adapta às suas
								necessidades e às de seus participantes.
							</p>
						</div>
						<div>
							<User2 size={28} />
							<h2 className='font-bold text-xl mb-2 mt-4'>Convidados</h2>
							<p className='text-[#D3E7FF]'>
								Acompanhe seus participantes, envie convites e confirme presenças com
								facilidade.
							</p>
						</div>
						<div>
							<PiggyBank size={28} />
							<h2 className='font-bold text-xl mb-2 mt-4'>Finanças</h2>
							<p className='text-[#D3E7FF]'>
								Controle seus gastos e receba pagamentos com facilidade.
							</p>
						</div>
						<div>
							<Activity size={28} />
							<h2 className='font-bold text-xl mb-2 mt-4'>Relatórios</h2>
							<p className='text-[#D3E7FF]'>
								Acompanhe o desempenho do seu evento e obtenha insights valiosos.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default HeroAndDetails
