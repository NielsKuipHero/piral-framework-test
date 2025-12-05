import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'hero-piral';

// Lazy load pages
const BetaUpload = React.lazy(() => import('./pages/BetaUpload'));
const BetaResults = React.lazy(() => import('./pages/BetaResults'));
const BetaStats = React.lazy(() => import('./pages/BetaStats'));

export function setup(api: PiletApi) {
	// Register pages
	api.registerPage('/beta', BetaUpload);
	api.registerPage('/beta/results', BetaResults);
	api.registerPage('/beta/stats', BetaStats);

	// Register menu items
	api.registerMenu(() => (
		<Link to="/beta" className="pilet-menu-item">
			📄 CV Parser
		</Link>
	), { type: 'general' });

	// Register a tile
	api.registerTile(() => (
		<div className="metric-card metric-card--green">
			<div className="metric-card__title">CV Parser</div>
			<div className="metric-card__value">Beta</div>
			<div className="metric-card__subtitle">Module geladen</div>
		</div>
	), {
		initialColumns: 1,
		initialRows: 1,
	});

	console.log('Pilet Beta (CV Parser) loaded');
}

