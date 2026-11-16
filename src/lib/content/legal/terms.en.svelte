<script lang="ts">
	import { company } from '#lib/content/company.ts';
	import { m } from '#lib/paraglide/messages.js';

	const sections: { title: string; text: string }[] = [
		{
			title: 'Scope',
			text: `These terms govern all services that ${company.legalName} ("Airbat", "we") provides to business customers ("you") through its platform, API and portal. Conflicting terms of the customer do not apply unless we agree to them in writing.`
		},
		{
			title: 'About us',
			text: `${company.legalName}, ${company.street}, ${company.postalCode} ${company.city}, Austria, registered under ${company.registerNumber}.`
		},
		{
			title: 'Eligibility and registration',
			text: 'Our services are available only to companies registered in the European Union. Before activation we verify your company and its beneficial owners (KYC/KYB). You must provide accurate information and keep it up to date. We may decline an application without giving reasons.'
		},
		{
			title: 'Customer data',
			text: 'We process personal data in accordance with our Privacy Policy. You are responsible for having a lawful basis for any end-customer data you transmit to us.'
		},
		{
			title: 'Services and prices',
			text: 'We provide wholesale access to prepaid airtime, data, bundles and digital vouchers from third-party operators. The available catalogue, prices and fees are shown in the portal or agreed individually and may change as operators change their offers.'
		},
		{
			title: 'Orders and instructions',
			text: 'Each top-up or voucher request you submit is a binding instruction. You are responsible for the accuracy of phone numbers and product selections. Completed top-ups generally cannot be reversed.'
		},
		{
			title: 'Funding and payment',
			text: 'Transactions are paid from a prepaid balance or under agreed credit terms. We may suspend processing if your balance is insufficient or invoices are overdue.'
		},
		{
			title: 'Automatic top-ups',
			text: 'Where you configure recurring or automatic top-ups, you remain responsible for monitoring and cancelling them.'
		},
		{
			title: 'Promotions',
			text: 'Operator promotions are passed on as provided by the operator and may end or change at short notice.'
		},
		{
			title: 'Your obligations',
			text: 'You must use the services lawfully, protect your access credentials, comply with sanctions and anti-money-laundering rules, and inform us immediately of any misuse.'
		},
		{
			title: 'Third-party services',
			text: 'Products are delivered by mobile operators and other third parties. Their own terms may apply to end users. We are not responsible for the quality of the operator network.'
		},
		{
			title: 'Changes to and withdrawal of services',
			text: 'We may add, change or withdraw products or markets, in particular where an operator changes its offer or a legal requirement applies.'
		},
		{
			title: 'Changes to these terms',
			text: 'We will notify you of changes in writing at least 30 days in advance. If you do not object within that period, the changes are deemed accepted.'
		},
		{
			title: 'Intellectual property',
			text: 'All rights in the platform, software, documentation and brand remain with Airbat or its licensors. You receive a non-exclusive right to use them for the duration of the contract.'
		},
		{
			title: 'Suspension and termination',
			text: 'Either party may terminate the contract with 30 days notice. We may suspend or terminate immediately for good cause, such as suspected fraud, breach of these terms or regulatory requirements.'
		},
		{
			title: 'Force majeure',
			text: 'Neither party is liable for delays or failures caused by events beyond its reasonable control, including operator outages.'
		},
		{
			title: 'Availability and security',
			text: 'We aim for high availability but do not guarantee uninterrupted service. Maintenance will be announced in advance where possible.'
		},
		{
			title: 'Limitation of liability',
			text: 'We are liable without limitation for intent and gross negligence. For slight negligence our liability is excluded, except for personal injury. Liability for indirect damage and lost profit is excluded to the extent permitted by law.'
		},
		{
			title: 'Assignment',
			text: 'You may not assign rights under this contract without our prior written consent.'
		},
		{
			title: 'Governing law and jurisdiction',
			text: `Austrian law applies, excluding its conflict-of-laws rules and the UN Convention on Contracts for the International Sale of Goods. The competent court in ${company.city} has exclusive jurisdiction.`
		},
		{
			title: 'Severability and waiver',
			text: 'If a provision is invalid, the remaining provisions remain in force. Failure to enforce a right does not constitute a waiver of it.'
		},
		{
			title: 'Contact',
			text: `Questions about these terms: ${company.email}.`
		}
	];
</script>

<p>{m.legal_updated({ date: '[date]' })}</p>

{#each sections as section, index (section.title)}
	<h2>{index + 1}. {section.title}</h2>
	<p>{section.text}</p>
{/each}
