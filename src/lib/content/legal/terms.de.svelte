<script lang="ts">
	import { company } from '#lib/content/company.ts';
	import { m } from '#lib/paraglide/messages.js';

	const sections: { title: string; text: string }[] = [
		{
			title: 'Geltungsbereich',
			text: `Diese AGB gelten für alle Leistungen, die die ${company.legalName} („Airbat“, „wir“) Geschäftskund:innen („Sie“) über ihre Plattform, API und ihr Portal erbringt. Abweichende Bedingungen der Kund:innen gelten nur bei schriftlicher Zustimmung.`
		},
		{
			title: 'Über uns',
			text: `${company.legalName}, ${company.street}, ${company.postalCode} ${company.city}, ${company.country}, eingetragen unter ${company.registerNumber}.`
		},
		{
			title: 'Voraussetzungen und Registrierung',
			text: 'Unsere Leistungen stehen nur in der Europäischen Union registrierten Unternehmen offen. Vor der Freischaltung prüfen wir Ihr Unternehmen und die wirtschaftlich Berechtigten (KYC/KYB). Ihre Angaben müssen richtig und aktuell sein. Wir können Anträge ohne Angabe von Gründen ablehnen.'
		},
		{
			title: 'Kundendaten',
			text: 'Wir verarbeiten personenbezogene Daten gemäß unserer Datenschutzerklärung. Für Daten von Endkund:innen, die Sie an uns übermitteln, benötigen Sie eine eigene Rechtsgrundlage.'
		},
		{
			title: 'Leistungen und Preise',
			text: 'Wir bieten Großhandelszugang zu Prepaid-Guthaben, Datenpaketen, Kombi-Paketen und digitalen Gutscheinen von Drittanbietern. Katalog, Preise und Gebühren sind im Portal ersichtlich oder werden individuell vereinbart und können sich mit den Angeboten der Betreiber ändern.'
		},
		{
			title: 'Aufträge',
			text: 'Jede übermittelte Aufladung oder Gutscheinanforderung ist ein verbindlicher Auftrag. Sie sind für die Richtigkeit von Rufnummern und Produktauswahl verantwortlich. Durchgeführte Aufladungen können in der Regel nicht rückgängig gemacht werden.'
		},
		{
			title: 'Guthaben und Zahlung',
			text: 'Transaktionen werden aus einem Prepaid-Guthaben oder nach vereinbarten Zahlungszielen bezahlt. Bei unzureichendem Guthaben oder offenen Rechnungen können wir die Abwicklung aussetzen.'
		},
		{
			title: 'Automatische Aufladungen',
			text: 'Wenn Sie wiederkehrende oder automatische Aufladungen einrichten, bleiben Sie für deren Überwachung und Beendigung verantwortlich.'
		},
		{
			title: 'Aktionen',
			text: 'Betreiber-Aktionen werden so weitergegeben, wie der Betreiber sie bereitstellt, und können kurzfristig enden oder sich ändern.'
		},
		{
			title: 'Ihre Pflichten',
			text: 'Sie nutzen die Leistungen rechtmäßig, schützen Ihre Zugangsdaten, halten Sanktions- und Geldwäschebestimmungen ein und melden uns jeden Missbrauch unverzüglich.'
		},
		{
			title: 'Leistungen Dritter',
			text: 'Produkte werden von Mobilfunkbetreibern und anderen Dritten erbracht, deren Bedingungen für Endnutzer:innen gelten können. Für die Netzqualität der Betreiber sind wir nicht verantwortlich.'
		},
		{
			title: 'Änderung und Einstellung von Leistungen',
			text: 'Wir können Produkte oder Märkte ergänzen, ändern oder einstellen, insbesondere wenn ein Betreiber sein Angebot ändert oder rechtliche Vorgaben dies erfordern.'
		},
		{
			title: 'Änderungen dieser AGB',
			text: 'Änderungen teilen wir Ihnen mindestens 30 Tage im Voraus schriftlich mit. Widersprechen Sie nicht innerhalb dieser Frist, gelten sie als angenommen.'
		},
		{
			title: 'Geistiges Eigentum',
			text: 'Alle Rechte an Plattform, Software, Dokumentation und Marke verbleiben bei Airbat oder ihren Lizenzgebern. Sie erhalten für die Vertragsdauer ein nicht ausschließliches Nutzungsrecht.'
		},
		{
			title: 'Sperre und Kündigung',
			text: 'Beide Parteien können den Vertrag mit einer Frist von 30 Tagen kündigen. Aus wichtigem Grund, etwa bei Betrugsverdacht, Verstoß gegen diese AGB oder regulatorischen Vorgaben, können wir sofort sperren oder kündigen.'
		},
		{
			title: 'Höhere Gewalt',
			text: 'Keine Partei haftet für Verzögerungen oder Ausfälle durch Ereignisse außerhalb ihres zumutbaren Einflusses, einschließlich Ausfällen bei Betreibern.'
		},
		{
			title: 'Verfügbarkeit und Sicherheit',
			text: 'Wir streben eine hohe Verfügbarkeit an, garantieren aber keinen unterbrechungsfreien Betrieb. Wartungen kündigen wir nach Möglichkeit an.'
		},
		{
			title: 'Haftung',
			text: 'Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, ausgenommen Personenschäden. Die Haftung für mittelbare Schäden und entgangenen Gewinn ist ausgeschlossen, soweit gesetzlich zulässig.'
		},
		{
			title: 'Abtretung',
			text: 'Sie dürfen Rechte aus diesem Vertrag nur mit unserer vorherigen schriftlichen Zustimmung abtreten.'
		},
		{
			title: 'Anwendbares Recht und Gerichtsstand',
			text: `Es gilt österreichisches Recht unter Ausschluss der Verweisungsnormen und des UN-Kaufrechts. Ausschließlicher Gerichtsstand ist das sachlich zuständige Gericht in ${company.city}.`
		},
		{
			title: 'Salvatorische Klausel und Verzicht',
			text: 'Ist eine Bestimmung unwirksam, bleiben die übrigen wirksam. Die Nichtdurchsetzung eines Rechts bedeutet keinen Verzicht darauf.'
		},
		{
			title: 'Kontakt',
			text: `Fragen zu diesen AGB: ${company.email}.`
		}
	];
</script>

<p>{m.legal_updated({ date: '[Datum]' })}</p>

{#each sections as section, index (section.title)}
	<h2>{index + 1}. {section.title}</h2>
	<p>{section.text}</p>
{/each}
