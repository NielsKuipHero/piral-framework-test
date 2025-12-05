import * as React from 'react';

const GammaMatching: React.FC = () => {
	const matches = [
		{ candidate: 'Jan Jansen', opdracht: 'Senior React Developer', score: 94, status: 'Nieuw' },
		{ candidate: 'Maria de Vries', opdracht: 'Full Stack Developer', score: 89, status: 'In behandeling' },
		{ candidate: 'Peter Bakker', opdracht: 'DevOps Engineer', score: 87, status: 'Nieuw' },
		{ candidate: 'Anna Smit', opdracht: 'Data Engineer', score: 82, status: 'Gecontacteerd' },
	];

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'Nieuw': return 'var(--hero-blue)';
			case 'In behandeling': return 'var(--hero-orange)';
			case 'Gecontacteerd': return 'var(--hero-green)';
			default: return 'var(--color-text-secondary)';
		}
	};

	return (
		<div className="pilet-container">
			<div className="pilet-header">
				<span className="pilet-badge pilet-badge--gamma">Gamma</span>
				<h2 className="pilet-title">Matching</h2>
			</div>
			<div className="pilet-content">
				<div className="pilet-section">
					<h3>Recente Matches</h3>
					<p>
						Bekijk de beste matches tussen kandidaten en opdrachten.
						De AI heeft automatisch de compatibiliteit berekend.
					</p>
				</div>

				<div style={{ marginTop: 'var(--space-lg)' }}>
					<table style={{ width: '100%', borderCollapse: 'collapse' }}>
						<thead>
							<tr style={{ borderBottom: '2px solid var(--color-border)' }}>
								<th style={{ textAlign: 'left', padding: 'var(--space-md)', color: 'var(--hero-blue)' }}>Kandidaat</th>
								<th style={{ textAlign: 'left', padding: 'var(--space-md)', color: 'var(--hero-blue)' }}>Opdracht</th>
								<th style={{ textAlign: 'center', padding: 'var(--space-md)', color: 'var(--hero-blue)' }}>Match Score</th>
								<th style={{ textAlign: 'center', padding: 'var(--space-md)', color: 'var(--hero-blue)' }}>Status</th>
							</tr>
						</thead>
						<tbody>
							{matches.map((match, index) => (
								<tr 
									key={index}
									style={{ 
										borderBottom: '1px solid var(--color-border-light)',
										background: index % 2 === 0 ? 'white' : 'var(--hero-blue-hairline)',
									}}
								>
									<td style={{ padding: 'var(--space-md)' }}>{match.candidate}</td>
									<td style={{ padding: 'var(--space-md)', color: 'var(--color-text-secondary)' }}>{match.opdracht}</td>
									<td style={{ padding: 'var(--space-md)', textAlign: 'center' }}>
										<span style={{
											background: match.score >= 90 ? 'var(--hero-green)' : match.score >= 80 ? 'var(--hero-orange)' : 'var(--hero-gray-regular)',
											color: 'white',
											padding: 'var(--space-xs) var(--space-sm)',
											borderRadius: 'var(--radius-sm)',
											fontWeight: 600,
											fontSize: 'var(--text-sm)',
										}}>
											{match.score}%
										</span>
									</td>
									<td style={{ padding: 'var(--space-md)', textAlign: 'center' }}>
										<span style={{ color: getStatusColor(match.status), fontWeight: 500 }}>
											{match.status}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className="pilet-section" style={{ marginTop: 'var(--space-xl)' }}>
					<h3>Matching Statistieken</h3>
					<ul>
						<li>Totaal matches deze week: 47</li>
						<li>Gemiddelde match score: 84%</li>
						<li>Succesvolle plaatsingen: 12</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default GammaMatching;

