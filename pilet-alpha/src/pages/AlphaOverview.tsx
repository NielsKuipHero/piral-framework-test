import * as React from 'react';

const AlphaOverview: React.FC = () => {
	return (
		<div className="pilet-container">
			<div className="pilet-header">
				<span className="pilet-badge pilet-badge--alpha">Alpha</span>
				<h2 className="pilet-title">Dashboard Overview</h2>
			</div>
			<div className="pilet-content">
				<div className="pilet-section">
					<h3>Welkom bij Dashboard</h3>
					<p>
						Dit is het centrale dashboard voor al je Hero Platform activiteiten.
						Hier vind je een overzicht van de belangrijkste metrics en recente activiteiten.
					</p>
				</div>

				<div className="metrics-grid">
					<div className="metric-card metric-card--blue">
						<div className="metric-card__title">Totaal CV's</div>
						<div className="metric-card__value">1,234</div>
						<div className="metric-card__subtitle">+12% deze maand</div>
					</div>
					<div className="metric-card metric-card--orange">
						<div className="metric-card__title">Actieve Opdrachten</div>
						<div className="metric-card__value">56</div>
						<div className="metric-card__subtitle">8 nieuw vandaag</div>
					</div>
					<div className="metric-card metric-card--green">
						<div className="metric-card__title">Matches</div>
						<div className="metric-card__value">89</div>
						<div className="metric-card__subtitle">Top performer</div>
					</div>
					<div className="metric-card metric-card--yellow">
						<div className="metric-card__title">Gebruikers</div>
						<div className="metric-card__value">24</div>
						<div className="metric-card__subtitle">Online nu: 8</div>
					</div>
				</div>

				<div className="pilet-section">
					<h3>Quick Actions</h3>
					<ul>
						<li>Bekijk recente CV uploads</li>
						<li>Analyseer matching resultaten</li>
						<li>Genereer weekrapportage</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AlphaOverview;

