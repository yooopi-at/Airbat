<script lang="ts">
	import { company } from '#lib/content/company.ts';
</script>

<p>
	Information pursuant to § 5 E-Commerce Act (ECG), § 14 Commercial Code (UGB) and § 25 Media Act
	(MedienG).
</p>

<h2>Company</h2>
<p>
	{company.legalName}<br />
	{company.street}<br />
	{company.postalCode}
	{company.city}, Czechia
</p>

<h2>Contact</h2>
<p>
	Phone: <a href="tel:{company.phoneE164}">{company.phone}</a><br />
	Email: <a href="mailto:{company.email}">{company.email}</a>
</p>

<h2>Company details</h2>
<ul>
	<li>Managing director: {company.managingDirector}</li>
	<li>Company register number: {company.registerNumber}</li>
	<li>Register court: {company.registerCourt}</li>
	<li>VAT ID: {company.vatId}</li>
	<li>
		Business purpose: wholesale distribution of prepaid telecommunication and digital products
	</li>
	<li>Supervisory authority / chamber: [to be completed]</li>
</ul>

<h2>Media owner and editorial line</h2>
<p>
	Media owner and publisher is {company.legalName}. This website informs business customers about
	the products and services of {company.name}.
</p>

<h2>Online dispute resolution</h2>
<p>
	Consumers can submit complaints to the EU online dispute resolution platform:
	<a href="https://ec.europa.eu/consumers/odr" rel="noopener noreferrer"
		>ec.europa.eu/consumers/odr</a
	>. Our services are aimed exclusively at businesses.
</p>

<h2>Liability for content and links</h2>
<p>
	We prepare the content of this website with care but cannot guarantee that it is complete,
	accurate or up to date. We are not responsible for the content of external websites linked from
	here; if we become aware of unlawful content on a linked site we will remove the link.
</p>
