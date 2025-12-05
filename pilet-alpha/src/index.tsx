import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'hero-piral';

// Lazy load pages for better performance
const AlphaOverview = React.lazy(() => import('./pages/AlphaOverview'));
const AlphaAnalytics = React.lazy(() => import('./pages/AlphaAnalytics'));
const AlphaReports = React.lazy(() => import('./pages/AlphaReports'));

export function setup(api: PiletApi) {
	// Register pages
	api.registerPage('/alpha', AlphaOverview);
	api.registerPage('/alpha/analytics', AlphaAnalytics);
	api.registerPage('/alpha/reports', AlphaReports);

	// Register menu items (optional, if shell doesn't have hardcoded menu)
	api.registerMenu(() => (
		<Link to="/alpha" className="pilet-menu-item">
			📊 Dashboard
		</Link>
	), { type: 'general' });

	// Register a tile for the dashboard
	api.registerTile(() => (
		<div className="metric-card metric-card--blue">
			<div className="metric-card__title">Dashboard</div>
			<div className="metric-card__value">Alpha</div>
			<div className="metric-card__subtitle">Module geladen</div>
		</div>
	), {
		initialColumns: 1,
		initialRows: 1,
	});

	console.log('Pilet Alpha (Dashboard) loaded');
}

