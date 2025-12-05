import * as React from 'react';

const AlphaReports: React.FC = () => {
	return (
		<div className="pilet-container">
			<div className="pilet-header">
				<span className="pilet-badge pilet-badge--alpha">Alpha</span>
				<h2 className="pilet-title">Rapportages</h2>
			</div>
			<div className="pilet-content">
				<div className="pilet-section">
					<h3>Beschikbare Rapportages</h3>
					<p>
						Genereer en download rapportages voor verschillende doeleinden.
						Kies uit standaard templates of maak een aangepast rapport.
					</p>
				</div>

				<div className="pilet-section">
					<h3>Recente Rapportages</h3>
					<ul>
						<li>Weekrapport - Week 48 (gedownload: 3 dec)</li>
						<li>Maandoverzicht November 2024</li>
						<li>Kwartaalrapport Q3 2024</li>
						<li>Jaaroverzicht 2023</li>
					</ul>
				</div>

				<div className="pilet-section">
					<h3>Rapport Templates</h3>
					<ul>
						<li>CV Verwerking Overzicht</li>
						<li>Matching Performance</li>
						<li>Gebruikers Activiteit</li>
						<li>Systeem Status</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AlphaReports;

