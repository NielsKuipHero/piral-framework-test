import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'hero-piral';

// Lazy load pages
const GammaOpdrachten = React.lazy(() => import('./pages/GammaOpdrachten'));
const GammaMatching = React.lazy(() => import('./pages/GammaMatching'));
const GammaSettings = React.lazy(() => import('./pages/GammaSettings'));

export function setup(api: PiletApi) {
	// Register pages
	api.registerPage('/gamma', GammaOpdrachten);
	api.registerPage('/gamma/matching', GammaMatching);
	api.registerPage('/gamma/settings', GammaSettings);

	// Register menu items
	api.registerMenu(() => (
		<Link to="/gamma" className="pilet-menu-item">
			🔍 Hero Scraping
		</Link>
	), { type: 'general' });

	// Register a tile
	api.registerTile(() => (
		<div className="metric-card metric-card--yellow">
			<div className="metric-card__title">Hero Scraping</div>
			<div className="metric-card__value">Gamma</div>
			<div className="metric-card__subtitle">Module geladen</div>
		</div>
	), {
		initialColumns: 1,
		initialRows: 1,
	});

	console.log('Pilet Gamma (Hero Scraping) loaded');
}

