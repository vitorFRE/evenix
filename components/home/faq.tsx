import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'

export const Faq = () => {
	return (
		<section className='container mt-36'>
			<div className='flex flex-col justify-center md:items-center'>
				<span className='text-primary font-semibold mb-2'>
					Perguntas Frequentes (FAQ)
				</span>
				<h2 className='font-bold text-4xl mb-4'>
					Encontre respostas para as dúvidas mais comuns dos nossos clientes
				</h2>
			</div>
			<Accordion
				type='single'
				collapsible
				className='w-full rounded py-4 px-4 bg-white mt-6'>
				{pr.map((item, i) => {
					return (
						<AccordionItem key={i} value={item.pergunta}>
							<AccordionTrigger className='text-slate-900'>
								{item.pergunta}
							</AccordionTrigger>
							<AccordionContent className='text-slate-600'>
								{item.resposta}
							</AccordionContent>
						</AccordionItem>
					)
				})}
			</Accordion>
		</section>
	)
}

const pr = [
	{
		pergunta: 'O que é um sistema de gerenciamento de eventos?',
		resposta:
			'Um sistema de gerenciamento de eventos é uma plataforma digital que ajuda a planejar, organizar e promover eventos de maneira eficiente. Ele abrange desde o registro de participantes até o acompanhamento pós-evento.'
	},
	{
		pergunta:
			'Quais são os principais benefícios de usar um software de gerenciamento de eventos?',
		resposta:
			'Os principais benefícios incluem economia de tempo, automação de tarefas, análise de dados, melhor engajamento do público, e a capacidade de personalizar a experiência do evento.'
	},
	{
		pergunta:
			'Como um software de gerenciamento de eventos pode ajudar a melhorar a eficiência dos eventos?',
		resposta:
			'Um software de gerenciamento de eventos melhora a eficiência ao automatizar tarefas repetitivas, facilitar o registro de participantes, fornecer análises em tempo real e simplificar a comunicação com os participantes.'
	},
	{
		pergunta: 'Quais recursos um sistema de gerenciamento de eventos deve oferecer?',
		resposta:
			'Um sistema eficaz deve incluir recursos como registro online, gerenciamento de palestrantes, controle de orçamento, divulgação de eventos e ferramentas de análise de desempenho.'
	},
	{
		pergunta:
			'Como posso escolher o software de gerenciamento de eventos certo para as minhas necessidades?',
		resposta:
			'Ao escolher um software, considere suas necessidades específicas, como o tamanho do evento, o orçamento e os recursos desejados. Avalie as opções disponíveis e escolha aquela que melhor atende aos seus requisitos.'
	}
]
