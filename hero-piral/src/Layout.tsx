import * as React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { LayoutProps } from 'piral-core';
import { Menu } from 'piral-menu';

// Icons
function IconMenu() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
			<line x1="3" y1="12" x2="21" y2="12" />
			<line x1="3" y1="6" x2="21" y2="6" />
			<line x1="3" y1="18" x2="21" y2="18" />
		</svg>
	);
}

function IconChevronDown() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="nav-group__chevron">
			<path d="M6 9l6 6 6-6" />
		</svg>
	);
}

// Header Component
const Header: React.FC = () => {
	const location = useLocation();
	
	const getActiveNav = () => {
		if (location.pathname.startsWith('/beta')) return 'CV Parser';
		if (location.pathname.startsWith('/gamma')) return 'Hero Scraping';
		return 'Dashboard';
	};

	const activeNav = getActiveNav();

	return (
		<header className="header">
			<div className="header__left">
				<div className="header__logo">
					<div className="header__logo-icon">H</div>
					<span className="header__logo-text">Hero Platform</span>
				</div>
				<nav className="header__nav">
					<Link
						to="/alpha"
						className={`header__nav-btn ${activeNav === 'Dashboard' ? 'header__nav-btn--active' : ''}`}
					>
						Dashboard
					</Link>
					<Link
						to="/beta"
						className={`header__nav-btn ${activeNav === 'CV Parser' ? 'header__nav-btn--active' : ''}`}
					>
						CV Parser
					</Link>
					<Link
						to="/gamma"
						className={`header__nav-btn ${activeNav === 'Hero Scraping' ? 'header__nav-btn--active' : ''}`}
					>
						Hero Scraping
					</Link>
				</nav>
			</div>
			<div className="header__right">
				<div className="header__user">
					<div className="header__user-avatar">NK</div>
					<span>Niels Kuip</span>
				</div>
			</div>
		</header>
	);
};

// Sidebar Component
const Sidebar: React.FC<{ collapsed: boolean; onToggle: () => void }> = ({ collapsed, onToggle }) => {
	const location = useLocation();
	const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(['dashboard']));

	const toggleGroup = (groupName: string) => {
		setExpandedGroups(prev => {
			const next = new Set(prev);
			if (next.has(groupName)) {
				next.delete(groupName);
			} else {
				next.add(groupName);
			}
			return next;
		});
	};

	const navGroups = [
		{
			id: 'dashboard',
			name: 'Dashboard',
			icon: '📊',
			items: [
				{ path: '/alpha', label: 'Overview' },
				{ path: '/alpha/analytics', label: 'Analytics' },
				{ path: '/alpha/reports', label: 'Reports' },
			],
		},
		{
			id: 'cv-parser',
			name: 'CV Parser',
			icon: '📄',
			items: [
				{ path: '/beta', label: 'Upload CV' },
				{ path: '/beta/results', label: 'Parse Results' },
				{ path: '/beta/stats', label: 'Statistics' },
			],
		},
		{
			id: 'hero-scraping',
			name: 'Hero Scraping',
			icon: '🔍',
			items: [
				{ path: '/gamma', label: 'Interim Opdrachten' },
				{ path: '/gamma/matching', label: 'Matching' },
				{ path: '/gamma/settings', label: 'Instellingen' },
			],
		},
	];

	return (
		<aside className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''}`}>
			<div className="sidebar__header">
				{!collapsed && <span className="sidebar__title">Navigation</span>}
				<button
					className="sidebar__toggle"
					onClick={onToggle}
					aria-label="Toggle sidebar"
				>
					<IconMenu />
				</button>
			</div>

			<nav className="sidebar__nav">
				{navGroups.map((group) => (
					<div
						key={group.id}
						className={`nav-group ${expandedGroups.has(group.id) ? 'nav-group--expanded' : ''}`}
					>
						<div
							className="nav-group__header"
							onClick={() => toggleGroup(group.id)}
						>
							<div className="nav-group__title">
								<span className="nav-group__icon">{group.icon}</span>
								{!collapsed && group.name}
							</div>
							{!collapsed && <IconChevronDown />}
						</div>
						{!collapsed && (
							<div className="nav-group__items">
								{group.items.map((item) => (
									<Link
										key={item.path}
										to={item.path}
										className={`nav-item ${location.pathname === item.path ? 'nav-item--active' : ''}`}
									>
										<span className="nav-item__label">{item.label}</span>
									</Link>
								))}
							</div>
						)}
					</div>
				))}

				{/* Menu items registered by pilets */}
				<Menu type="general" />
			</nav>

			{!collapsed && (
				<div className="sidebar__help">
					<div className="sidebar__help-title">Need Help?</div>
					<p className="sidebar__help-text">
						Heb je vragen of hulp nodig? Neem contact op met support.
					</p>
					<button className="sidebar__help-btn">Contact Support</button>
				</div>
			)}
		</aside>
	);
};

// Default Dashboard Content
const DefaultDashboard: React.FC = () => (
	<div className="dashboard">
		<div className="metrics-grid">
			<div className="metric-card metric-card--blue">
				<div className="metric-card__title">CV's Geparsed</div>
				<div className="metric-card__value">1,234</div>
				<div className="metric-card__subtitle">+12% deze maand</div>
			</div>
			<div className="metric-card metric-card--orange">
				<div className="metric-card__title">Interim Opdrachten</div>
				<div className="metric-card__value">56</div>
				<div className="metric-card__subtitle">8 nieuw vandaag</div>
			</div>
			<div className="metric-card metric-card--green">
				<div className="metric-card__title">Matches</div>
				<div className="metric-card__value">89</div>
				<div className="metric-card__subtitle">Top performer</div>
			</div>
			<div className="metric-card metric-card--yellow">
				<div className="metric-card__title">Actieve Gebruikers</div>
				<div className="metric-card__value">24</div>
				<div className="metric-card__subtitle">Online nu: 8</div>
			</div>
		</div>
		<div className="welcome">
			<h1 className="welcome__title">Welkom bij Hero Platform</h1>
			<p className="welcome__description">
				Dit is het centrale platform voor al je Hero tools en services.
				Selecteer een module in het menu om te beginnen.
			</p>
			<ul className="welcome__list">
				<li><strong>Dashboard:</strong> Bekijk overzichten, analytics en rapportages</li>
				<li><strong>CV Parser:</strong> Upload en parse CV's automatisch</li>
				<li><strong>Hero Scraping:</strong> Vind interim opdrachten en matches</li>
			</ul>
		</div>
	</div>
);

// Main Layout Component
export const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
	const location = useLocation();

	// Show default dashboard on root path or when no content
	const showDefaultDashboard = location.pathname === '/' || !children;

	return (
		<div className="app">
			<Header />
			<div className="app__body">
				<Sidebar
					collapsed={sidebarCollapsed}
					onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
				/>
				<main className={`main ${sidebarCollapsed ? 'main--sidebar-collapsed' : ''}`}>
					<div className="main__content">
						{showDefaultDashboard ? <DefaultDashboard /> : children}
					</div>
				</main>
			</div>
		</div>
	);
};

