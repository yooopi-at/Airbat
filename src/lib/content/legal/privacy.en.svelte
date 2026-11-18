<script lang="ts">
	import { company } from '#lib/content/company.ts';
	import { m } from '#lib/paraglide/messages.js';
</script>

<p>{m.legal_updated({ date: '[date]' })}</p>

<p>
	Protecting your personal data matters to us. This policy explains which data {company.legalName}
	("we") processes when you visit this website or contact us, why we do so, and which rights you have
	under the General Data Protection Regulation (GDPR).
</p>

<h2>1. Controller</h2>
<p>
	{company.legalName}, {company.street}, {company.postalCode}
	{company.city}, Czechia,
	<a href="mailto:{company.email}">{company.email}</a>
</p>

<h2>2. Data we process</h2>
<ul>
	<li>
		<strong>Server logs:</strong> IP address, date and time, requested page and browser information, needed
		to deliver the website securely (Art. 6(1)(f) GDPR).
	</li>
	<li>
		<strong>Contact and sign-up forms:</strong> name, work email, company, phone number, expected volume
		and your message, used to answer your request and prepare a business relationship (Art. 6(1)(b) and
		(a) GDPR).
	</li>
	<li>
		<strong>Newsletter:</strong> your email address, based on your consent (Art. 6(1)(a) GDPR).
	</li>
</ul>

<h2>3. Recipients and processors</h2>
<p>
	Form submissions are delivered to us by email through our email service provider, acting as a
	processor under Art. 28 GDPR. Our hosting provider processes server logs on our behalf. We do not
	sell personal data. [List the actual providers and any transfers outside the EU.]
</p>

<h2>4. Retention</h2>
<p>
	We keep enquiries for as long as needed to handle them and for any statutory retention periods
	(e.g. seven years for business correspondence under Austrian law). Newsletter data is kept until
	you unsubscribe. Server logs are deleted after [x] days.
</p>

<h2>5. Cookies and analytics</h2>
<p>
	This website only uses technically necessary storage, such as a cookie that remembers your
	language. We do not use analytics or advertising trackers.
</p>

<h2>6. Your rights</h2>
<p>You have the right to:</p>
<ul>
	<li>access the data we hold about you (Art. 15 GDPR)</li>
	<li>have inaccurate data corrected (Art. 16 GDPR)</li>
	<li>have data deleted (Art. 17 GDPR)</li>
	<li>restrict processing (Art. 18 GDPR)</li>
	<li>data portability (Art. 20 GDPR)</li>
	<li>object to processing based on legitimate interests (Art. 21 GDPR)</li>
	<li>withdraw consent at any time with effect for the future (Art. 7(3) GDPR)</li>
</ul>
<p>
	To exercise these rights, email <a href="mailto:{company.email}">{company.email}</a>. We may ask
	you to confirm your identity. We will answer within one month. You may also lodge a complaint with
	the Austrian Data Protection Authority (dsb.gv.at).
</p>

<h2>7. Changes</h2>
<p>We will update this policy when our services or legal requirements change.</p>
