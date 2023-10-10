import { CalendarCheck, User2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export const About = () => {
	return (
		<section className='container mt-16'>
			<div className='flex flex-col gap-4 md:flex-row justify-between'>
				<div>
					<span className='text-primary font-semibold mb-2'>Poupe tempo</span>
					<h2 className='font-bold text-4xl max-w-[250px] mb-4'>
						Por que nossa plataforma
					</h2>
					<p className='max-w-[520px] md:text-lg text-slate-400'>
						Com a nossa plataforma de planejamento de eventos, você não apenas economiza
						tempo, mas também maximiza a eficiência em cada etapa do processo. Utilizando
						a mais recente tecnologia de IA, nossa solução simplifica tarefas complexas,
						como gerenciamento de convidados, logística e promoção.
					</p>
				</div>
				<div className='bg-white rounded-md max-w-full md:max-w-[320px] lg:max-w-[520px] pt-6 pl-10 pb-6 md:pb-12 overflow-hidden'>
					<CalendarCheck className='text-primary mb-5' size={46} />
					<h3 className='text-lg font-semibold text-slate-900 mb-4'>Agenda</h3>
					<p className='text-slate-600 pr-4 mb-6'>
						Simplificamos o processo para que você possa se concentrar no que realmente
						importa.
					</p>

					<div className='flex gap-6'>
						<div className='min-w-[305px] bg-primary/20 rounded px-4 py-3'>
							<div className='border-l-4 border-primary pl-2'>
								<h4 className='font-medium text-slate-700'>Provar Bolos</h4>
								<time className='text-lg text-slate-600'>10:00 AM - 11:30 AM</time>
							</div>
						</div>
						<div className='min-w-[305px] bg-red-600/20 rounded px-4 py-3'>
							<div className='border-l-4 border-red-600 pl-2'>
								<h4 className='font-medium text-slate-700'>Consulta de Compras</h4>
								<time className='text-lg text-slate-600'>03:00 PM - 04:30 AM</time>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col-reverse gap-4 md:flex-row justify-between mt-8'>
				<div className='bg-white rounded-md max-w-full md:max-w-[320px] lg:max-w-[520px] pt-6 pl-10 pb-6 md:pb-12 overflow-hidden'>
					<User2 className='text-primary mb-5' size={46} />
					<h3 className='text-lg font-semibold text-slate-900 mb-4'>Gerencie</h3>
					<p className='text-slate-600 pr-4 mb-6'>
						Gerencie com excelência todos os detalhes do seu evento.
					</p>

					<div className='flex gap-6'>
						<Avatar>
							<AvatarImage src='https://github.com/vitorfre.png' />
							<AvatarFallback>VT</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarImage src='https://github.com/vitorfre.png' />
							<AvatarFallback>VT</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarImage src='https://github.com/vitorfre.png' />
							<AvatarFallback>VT</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarImage src='https://github.com/vitorfre.png' />
							<AvatarFallback>VT</AvatarFallback>
						</Avatar>
					</div>
				</div>

				<div>
					<span className='text-primary font-semibold mb-2'>É facil</span>
					<h2 className='font-bold text-4xl max-w-[260px] mb-4'>
						Simplificando a Organização
					</h2>
					<p className='max-w-[520px] md:text-lg text-slate-400'>
						Simplificar a organização de eventos é essencial para garantir o sucesso e a
						eficiência em cada etapa do processo. Com nossa plataforma de planejamento de
						eventos, tornamos simples o gerenciamento de convidados, logística e promoção.
						Você economiza tempo, reduz o estresse e garante que seu evento seja um
						triunfo em todos os aspectos.
					</p>
				</div>
			</div>
		</section>
	)
}
