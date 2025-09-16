export interface MenuItem {
	href: string;
	text: string;
}

export const menuItems: MenuItem[] = [
	{ href: '/', text: '首頁' },
	{ href: '/about', text: '關於我們' },
	{ href: '/projects', text: '專案' },
	{ href: '/blog', text: '部落格' },
	{ href: '/contact', text: '聯絡我們' },
	{ href: '/members', text: '成員' },
	{ href: '/resources', text: '資源' },
	{ href: '/events', text: '活動' },
];
