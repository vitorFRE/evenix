'use client'

import { Github } from 'lucide-react'
import { IntegrationCard } from '../utils/integration-card'
import Marquee from 'react-fast-marquee'

const integrations = [
	{
		icon: <Github size={45} className='text-primary' />,
		title: 'Google Drive',
		description: 'Acesse seus arquivos do Google Drive diretamente do Trello.'
	},
	{
		icon: <Github size={45} className='text-primary' />,
		title: 'Google Drive',
		description: 'Acesse seus arquivos do Google Drive diretamente do Trello.'
	},
	{
		icon: <Github size={45} className='text-primary' />,
		title: 'Google Drive',
		description: 'Acesse seus arquivos do Google Drive diretamente do Trello.'
	},
	{
		icon: <Github size={45} className='text-primary' />,
		title: 'Google Drive',
		description: 'Acesse seus arquivos do Google Drive diretamente do Trello.'
	},
	{
		icon: <Github size={45} className='text-primary' />,
		title: 'Google Drive',
		description: 'Acesse seus arquivos do Google Drive diretamente do Trello.'
	},
	{
		icon: <Github size={45} className='text-primary' />,
		title: 'Google Drive',
		description: 'Acesse seus arquivos do Google Drive diretamente do Trello.'
	},
	{
		icon: <Github size={45} className='text-primary' />,
		title: 'Slack',
		description: 'Comunique-se com sua equipe no Slack sobre as tarefas do Trello.'
	}
]

const MarqueeSaction = () => {
	return (
		<div className='mt-32'>
			<div className='container flex flex-col md:justify-center md:items-center'>
				<span className='text-primary font-semibold mb-2'>Integrações</span>
				<h2 className='font-bold text-4xl mb-4'>
					Escolha as integrações que se ajustam ao seu gosto
				</h2>
			</div>
			<div className='overflow-hidden w-full flex mt-11'>
				<Marquee pauseOnHover>
					{integrations.map((integration, index) => (
						<IntegrationCard
							key={index}
							icon={integration.icon}
							title={integration.title}
							description={integration.description}
						/>
					))}
				</Marquee>
			</div>
		</div>
	)
}

export default MarqueeSaction