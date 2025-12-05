import * as React from 'react';

const BetaResults: React.FC = () => {
	return (
		<div className="pilet-container">
			<div className="pilet-header">
				<span className="pilet-badge pilet-badge--beta">Beta</span>
				<h2 className="pilet-title">Parse Results</h2>
			</div>
			<div className="pilet-content">
				<div className="pilet-section">
					<h3>Parsing Resultaten</h3>
					<p>
						Bekijk de resultaten van geparseerde CV's. De AI heeft automatisch
						de belangrijkste informatie geëxtraheerd.
					</p>
				</div>

				<div className="pilet-section">
					<h3>Laatste Parsed CV</h3>
					<div style={{
						background: 'var(--hero-blue-hairline)',
						padding: 'var(--space-lg)',
						borderRadius: 'var(--radius-lg)',
						marginTop: 'var(--space-md)',
					}}>
						<p><strong>Naam:</strong> Jan Jansen</p>
						<p><strong>Functie:</strong> Senior Software Developer</p>
						<p><strong>Ervaring:</strong> 8 jaar</p>
						<p><strong>Skills:</strong> React, TypeScript, Node.js, Python</p>
						<p><strong>Opleiding:</strong> MSc Computer Science</p>
					</div>
				</div>

				<div className="pilet-section">
					<h3>Extraction Accuracy</h3>
					<ul>
						<li>Persoonlijke gegevens: 98%</li>
						<li>Werkervaring: 94%</li>
						<li>Skills: 96%</li>
						<li>Opleiding: 97%</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BetaResults;

