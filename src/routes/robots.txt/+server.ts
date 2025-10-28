export async function GET() {
	const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://cyshirc.org/sitemap.xml`;

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=86400'
		}
	});
}
