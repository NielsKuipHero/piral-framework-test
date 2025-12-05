import * as React from 'react';

const BetaStats: React.FC = () => {
	return (
		<div className="pilet-container">
			<div className="pilet-header">
				<span className="pilet-badge pilet-badge--beta">Beta</span>
				<h2 className="pilet-title">Statistieken</h2>
			</div>
			<div className="pilet-content">
				<div className="metrics-grid">
					<div className="metric-card metric-card--blue">
						<div className="metric-card__title">Totaal Geparsed</div>
						<div className="metric-card__value">1,847</div>
						<div className="metric-card__subtitle">Alle tijd</div>
					</div>
					<div className="metric-card metric-card--green">
						<div className="metric-card__title">Succes Rate</div>
						<div className="metric-card__value">97.2%</div>
						<div className="metric-card__subtitle">Gemiddeld</div>
					</div>
					<div className="metric-card metric-card--orange">
						<div className="metric-card__title">Vandaag</div>
						<div className="metric-card__value">34</div>
						<div className="metric-card__subtitle">CV's verwerkt</div>
					</div>
					<div className="metric-card metric-card--yellow">
						<div className="metric-card__title">Gem. Tijd</div>
						<div className="metric-card__value">2.1s</div>
						<div className="metric-card__subtitle">Per CV</div>
					</div>
				</div>

				<div className="pilet-section">
					<h3>Populaire Skills (deze maand)</h3>
					<ul>
						<li>JavaScript/TypeScript - 234 CV's</li>
						<li>Python - 189 CV's</li>
						<li>React - 176 CV's</li>
						<li>Java - 145 CV's</li>
						<li>SQL - 134 CV's</li>
					</ul>
				</div>

				<div className="pilet-section">
					<h3>Meest Voorkomende Functietitels</h3>
					<ul>
						<li>Software Developer - 156</li>
						<li>Data Analyst - 89</li>
						<li>Project Manager - 67</li>
						<li>DevOps Engineer - 54</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BetaStats;

