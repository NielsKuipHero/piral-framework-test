import * as React from 'react';
import { Link } from 'react-router-dom';

// Simple test component
const TestPage = () => (
	<div style={{ padding: '20px', background: 'white', borderRadius: '12px' }}>
		<h1 style={{ color: '#073889' }}>Alpha Dashboard</h1>
		<p>Dit is de Alpha module - succesvol geladen!</p>
	</div>
);

export function setup(api: any) {
	// Register a simple test page first
	api.registerPage('/alpha', TestPage);

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

