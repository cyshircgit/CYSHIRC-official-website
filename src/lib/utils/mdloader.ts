import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import { error } from '@sveltejs/kit';

const CONTENT_DIR = path.resolve('static/handouts');

// Custom extension for ==highlight== syntax
const VALID_HIGHLIGHT_COLORS = new Set(['blue', 'purple', 'green', 'orange', 'pink']);

const escapeHtml = (value: string) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');

const highlightExtension = {
	name: 'highlight',
	level: 'inline' as const,
	start(src: string) {
		return src.indexOf('==');
	},
	tokenizer(src: string) {
		if (!src.startsWith('==')) {
			return undefined;
		}

		const colorRule = /^==([a-zA-Z]+):(.*?)==/s;
		const match = colorRule.exec(src);
		if (match) {
			const color = match[1].toLowerCase();
			const text = match[2].trim();

			return {
				type: 'highlight',
				raw: match[0],
				text,
				color: VALID_HIGHLIGHT_COLORS.has(color) ? color : 'default'
			};
		}

		const simpleRule = /^==(.*?)==/s;
		const simpleMatch = simpleRule.exec(src);
		if (simpleMatch) {
			return {
				type: 'highlight',
				raw: simpleMatch[0],
				text: simpleMatch[1].trim(),
				color: 'default'
			};
		}
	},
	renderer(token: { text: string; color: string }) {
		const content = escapeHtml(token.text);
		if (token.color === 'default') {
			return `<mark class="theme-highlight">${content}</mark>`;
		}
		return `<mark class="highlight-${token.color}">${content}</mark>`;
	}
};

// Configure marked with syntax highlighting and custom extensions
marked.use(
	markedHighlight({
		langPrefix: 'hljs language-',
		highlight(code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		}
	})
);

marked.use({ extensions: [highlightExtension] });

function isPathInsideDir(filePath: string, dir: string): boolean {
	const relative = path.relative(dir, filePath);
	return !!relative && !relative.startsWith('..') && !path.isAbsolute(relative);
}

const load = async ({ params }: { params: { slug: string } }) => {
	const filename = `${params.slug}.md`;

	if (!/^[a-zA-Z0-9_-]+\.md$/.test(filename)) {
		throw error(400, 'Invalid filename');
	}

	const filePath = path.resolve(CONTENT_DIR, filename);

	if (!isPathInsideDir(filePath, CONTENT_DIR)) {
		throw error(403, 'Access denied');
	}

	try {
		const mdContent = await fs.readFile(filePath, 'utf-8');
		const htmlContent = await marked(mdContent);

		// Extract title from first heading
		const titleMatch = mdContent.match(/^#\s+(.+)$/m);
		const title = titleMatch ? titleMatch[1] : params.slug;

		return { title, content: htmlContent };
	} catch {
		throw error(404, 'File not found or read error');
	}
};

export default load;
