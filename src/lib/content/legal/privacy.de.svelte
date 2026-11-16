<script lang="ts">
	import { company } from '#lib/content/company.ts';
	import { m } from '#lib/paraglide/messages.js';
</script>

<p>{m.legal_updated({ date: '[Datum]' })}</p>

<p>
	Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese Erklärung beschreibt, welche Daten
	die {company.legalName} („wir“) verarbeitet, wenn Sie diese Website besuchen oder uns kontaktieren,
	zu welchem Zweck, und welche Rechte Ihnen nach der Datenschutz-Grundverordnung (DSGVO) zustehen.
</p>

<h2>1. Verantwortlicher</h2>
<p>
	{company.legalName}, {company.street}, {company.postalCode}
	{company.city}, {company.country},
	<a href="mailto:{company.email}">{company.email}</a>
</p>

<h2>2. Verarbeitete Daten</h2>
<ul>
	<li>
		<strong>Server-Logfiles:</strong> IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und Browserinformationen,
		erforderlich für die sichere Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO).
	</li>
	<li>
		<strong>Kontakt- und Anfrageformulare:</strong> Name, geschäftliche E-Mail, Unternehmen, Telefonnummer,
		erwartetes Volumen und Ihre Nachricht, zur Beantwortung Ihrer Anfrage und Anbahnung einer Geschäftsbeziehung
		(Art. 6 Abs. 1 lit. b und a DSGVO).
	</li>
	<li>
		<strong>Newsletter:</strong> Ihre E-Mail-Adresse auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit.
		a DSGVO).
	</li>
</ul>

<h2>3. Empfänger und Auftragsverarbeiter</h2>
<p>
	Formulareingaben werden uns per E-Mail über unseren E-Mail-Dienstleister als Auftragsverarbeiter
	gemäß Art. 28 DSGVO zugestellt. Unser Hosting-Anbieter verarbeitet Server-Logfiles in unserem
	Auftrag. Wir verkaufen keine personenbezogenen Daten. [Konkrete Anbieter und allfällige
	Drittlandübermittlungen ergänzen.]
</p>

<h2>4. Speicherdauer</h2>
<p>
	Anfragen speichern wir, solange es für ihre Bearbeitung erforderlich ist, sowie für gesetzliche
	Aufbewahrungsfristen (z. B. sieben Jahre für Geschäftskorrespondenz nach österreichischem Recht).
	Newsletter-Daten bis zur Abmeldung. Server-Logfiles werden nach [x] Tagen gelöscht.
</p>

<h2>5. Cookies und Analyse</h2>
<p>
	Diese Website verwendet nur technisch notwendige Speicherungen, etwa ein Cookie für Ihre
	Spracheinstellung. Analyse- oder Werbe-Tracker setzen wir nicht ein.
</p>

<h2>6. Ihre Rechte</h2>
<p>Sie haben das Recht auf:</p>
<ul>
	<li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
	<li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
	<li>Löschung (Art. 17 DSGVO)</li>
	<li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
	<li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
	<li>Widerspruch gegen Verarbeitungen aufgrund berechtigter Interessen (Art. 21 DSGVO)</li>
	<li>
		jederzeitigen Widerruf einer Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)
	</li>
</ul>
<p>
	Zur Ausübung Ihrer Rechte schreiben Sie an <a href="mailto:{company.email}">{company.email}</a>.
	Wir können Sie bitten, Ihre Identität zu bestätigen, und antworten innerhalb eines Monats. Sie
	können sich außerdem bei der Österreichischen Datenschutzbehörde (dsb.gv.at) beschweren.
</p>

<h2>7. Änderungen</h2>
<p>Wir passen diese Erklärung an, wenn sich unsere Leistungen oder rechtliche Vorgaben ändern.</p>
