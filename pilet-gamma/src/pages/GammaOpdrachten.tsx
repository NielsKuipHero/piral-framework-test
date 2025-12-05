import * as React from 'react';

const GammaOpdrachten: React.FC = () => {
	const opdrachten = [
		{ id: 1, title: 'Senior React Developer', company: 'TechCorp BV', location: 'Amsterdam', rate: '€85-95/uur', posted: '2 uur geleden' },
		{ id: 2, title: 'DevOps Engineer', company: 'CloudFirst', location: 'Utrecht', rate: '€90-100/uur', posted: '5 uur geleden' },
		{ id: 3, title: 'Full Stack Developer', company: 'StartupXYZ', location: 'Rotterdam', rate: '€75-85/uur', posted: '1 dag geleden' },
		{ id: 4, title: 'Data Engineer', company: 'DataDriven', location: 'Den Haag', rate: '€80-90/uur', posted: '1 dag geleden' },
		{ id: 5, title: 'Python Developer', company: 'AI Solutions', location: 'Eindhoven', rate: '€85-95/uur', posted: '2 dagen geleden' },
	];

	return (
		<div className="pilet-container">
			<div className="pilet-header">
				<span className="pilet-badge pilet-badge--gamma">Gamma</span>
				<h2 className="pilet-title">Interim Opdrachten</h2>
			</div>
			<div className="pilet-content">
				<div className="pilet-section">
					<h3>Beschikbare Opdrachten ({opdrachten.length})</h3>
					<p>
						Bekijk de laatste interim opdrachten die zijn gevonden door onze scraper.
						Klik op een opdracht voor meer details.
					</p>
				</div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
					{opdrachten.map((opdracht) => (
						<div 
							key={opdracht.id}
							style={{
								background: 'var(--hero-blue-hairline)',
								padding: 'var(--space-lg)',
								borderRadius: 'var(--radius-lg)',
								cursor: 'pointer',
								transition: 'all var(--transition-fast)',
								border: '1px solid var(--color-border-light)',
							}}
						>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
								<div>
									<h4 style={{ color: 'var(--hero-blue)', marginBottom: 'var(--space-xs)' }}>{opdracht.title}</h4>
									<p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
										{opdracht.company} • {opdracht.location}
									</p>
								</div>
								<div style={{ textAlign: 'right' }}>
									<span style={{ 
										color: 'var(--hero-green)', 
										fontWeight: 600,
										fontSize: 'var(--text-sm)',
									}}>{opdracht.rate}</span>
									<p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-xs)' }}>{opdracht.posted}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default GammaOpdrachten;

