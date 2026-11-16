<script lang="ts">
	import { company } from '#lib/content/company.ts';
</script>

<p>
	Informationen gemäß § 5 E-Commerce-Gesetz (ECG), § 14 Unternehmensgesetzbuch (UGB) und § 25
	Mediengesetz (MedienG).
</p>

<h2>Unternehmen</h2>
<p>
	{company.legalName}<br />
	{company.street}<br />
	{company.postalCode}
	{company.city}, {company.country}
</p>

<h2>Kontakt</h2>
<p>
	Telefon: <a href="tel:{company.phoneE164}">{company.phone}</a><br />
	E-Mail: <a href="mailto:{company.email}">{company.email}</a>
</p>

<h2>Unternehmensangaben</h2>
<ul>
	<li>Geschäftsführung: {company.managingDirector}</li>
	<li>Firmenbuchnummer: {company.registerNumber}</li>
	<li>Firmenbuchgericht: {company.registerCourt}</li>
	<li>UID-Nummer: {company.vatId}</li>
	<li>Unternehmensgegenstand: Großhandel mit Prepaid-Telekommunikations- und Digitalprodukten</li>
	<li>Aufsichtsbehörde / Kammerzugehörigkeit: [zu ergänzen]</li>
</ul>

<h2>Medieninhaber und Blattlinie</h2>
<p>
	Medieninhaber und Herausgeber ist die {company.legalName}. Diese Website informiert
	Geschäftskund:innen über die Produkte und Leistungen von {company.name}.
</p>

<h2>Online-Streitbeilegung</h2>
<p>
	Verbraucher:innen können Beschwerden an die Online-Streitbeilegungsplattform der EU richten:
	<a href="https://ec.europa.eu/consumers/odr" rel="noopener noreferrer"
		>ec.europa.eu/consumers/odr</a
	>. Unser Angebot richtet sich ausschließlich an Unternehmen.
</p>

<h2>Haftung für Inhalte und Links</h2>
<p>
	Wir erstellen die Inhalte dieser Website mit Sorgfalt, übernehmen jedoch keine Gewähr für
	Vollständigkeit, Richtigkeit und Aktualität. Für Inhalte externer Websites, auf die wir verlinken,
	sind wir nicht verantwortlich; werden uns rechtswidrige Inhalte bekannt, entfernen wir den Link.
</p>
