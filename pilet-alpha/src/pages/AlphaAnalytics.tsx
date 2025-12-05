import * as React from 'react';

const AlphaAnalytics: React.FC = () => {
	return (
		<div className="pilet-container">
			<div className="pilet-header">
				<span className="pilet-badge pilet-badge--alpha">Alpha</span>
				<h2 className="pilet-title">Analytics</h2>
			</div>
			<div className="pilet-content">
				<div className="pilet-section">
					<h3>Performance Analytics</h3>
					<p>
						Bekijk gedetailleerde analytics over de prestaties van het platform.
						Analyseer trends, identificeer knelpunten en optimaliseer je workflow.
					</p>
				</div>

				<div className="pilet-section">
					<h3>Key Metrics</h3>
					<ul>
						<li>Gemiddelde verwerkingstijd: 2.3 seconden</li>
						<li>Success rate: 97.8%</li>
						<li>Dagelijkse uploads: 45 CV's</li>
						<li>Actieve gebruikers (7d): 18</li>
					</ul>
				</div>

				<div className="pilet-section">
					<h3>Trends</h3>
					<p>
						De afgelopen maand is er een stijging van 23% in het aantal verwerkte CV's.
						De matching accuracy is verbeterd met 5% door de nieuwe algoritme updates.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AlphaAnalytics;

