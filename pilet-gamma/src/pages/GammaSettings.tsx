import * as React from 'react';

const GammaSettings: React.FC = () => {
	return (
		<div className="pilet-container">
			<div className="pilet-header">
				<span className="pilet-badge pilet-badge--gamma">Gamma</span>
				<h2 className="pilet-title">Instellingen</h2>
			</div>
			<div className="pilet-content">
				<div className="pilet-section">
					<h3>Scraper Configuratie</h3>
					<p>
						Configureer de scraper instellingen voor het automatisch ophalen van opdrachten.
					</p>
				</div>

				<div style={{ marginTop: 'var(--space-lg)' }}>
					<div style={{
						background: 'var(--hero-blue-hairline)',
						padding: 'var(--space-lg)',
						borderRadius: 'var(--radius-lg)',
						marginBottom: 'var(--space-md)',
					}}>
						<label style={{ display: 'block', marginBottom: 'var(--space-sm)', fontWeight: 500, color: 'var(--hero-blue)' }}>
							Scrape Interval
						</label>
						<select style={{
							width: '100%',
							padding: 'var(--space-sm)',
							borderRadius: 'var(--radius-md)',
							border: '1px solid var(--color-border)',
							fontSize: 'var(--text-sm)',
						}}>
							<option>Elk uur</option>
							<option>Elke 2 uur</option>
							<option>Elke 4 uur</option>
							<option>Dagelijks</option>
						</select>
					</div>

					<div style={{
						background: 'var(--hero-blue-hairline)',
						padding: 'var(--space-lg)',
						borderRadius: 'var(--radius-lg)',
						marginBottom: 'var(--space-md)',
					}}>
						<label style={{ display: 'block', marginBottom: 'var(--space-sm)', fontWeight: 500, color: 'var(--hero-blue)' }}>
							Minimum Uurtarief
						</label>
						<input 
							type="number" 
							defaultValue={75}
							style={{
								width: '100%',
								padding: 'var(--space-sm)',
								borderRadius: 'var(--radius-md)',
								border: '1px solid var(--color-border)',
								fontSize: 'var(--text-sm)',
							}}
						/>
					</div>

					<div style={{
						background: 'var(--hero-blue-hairline)',
						padding: 'var(--space-lg)',
						borderRadius: 'var(--radius-lg)',
					}}>
						<label style={{ display: 'block', marginBottom: 'var(--space-sm)', fontWeight: 500, color: 'var(--hero-blue)' }}>
							Locatie Filter
						</label>
						<input 
							type="text" 
							defaultValue="Amsterdam, Utrecht, Rotterdam"
							style={{
								width: '100%',
								padding: 'var(--space-sm)',
								borderRadius: 'var(--radius-md)',
								border: '1px solid var(--color-border)',
								fontSize: 'var(--text-sm)',
							}}
						/>
					</div>
				</div>

				<div className="pilet-section" style={{ marginTop: 'var(--space-xl)' }}>
					<h3>Bronnen</h3>
					<ul>
						<li>Indeed.nl - Actief ✓</li>
						<li>LinkedIn Jobs - Actief ✓</li>
						<li>Intermediair - Actief ✓</li>
						<li>Freelance.nl - Inactief</li>
					</ul>
				</div>

				<button style={{
					marginTop: 'var(--space-lg)',
					padding: 'var(--space-sm) var(--space-xl)',
					background: 'var(--hero-orange)',
					color: 'white',
					border: 'none',
					borderRadius: 'var(--radius-md)',
					cursor: 'pointer',
					fontWeight: 500,
				}}>
					Instellingen Opslaan
				</button>
			</div>
		</div>
	);
};

export default GammaSettings;

