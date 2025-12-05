import * as React from 'react';

const BetaUpload: React.FC = () => {
	const [dragActive, setDragActive] = React.useState(false);

	const handleDrag = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	return (
		<div className="pilet-container">
			<div className="pilet-header">
				<span className="pilet-badge pilet-badge--beta">Beta</span>
				<h2 className="pilet-title">CV Upload</h2>
			</div>
			<div className="pilet-content">
				<div className="pilet-section">
					<h3>Upload een CV</h3>
					<p>
						Sleep een CV bestand hierheen of klik om te uploaden.
						Ondersteunde formaten: PDF, DOCX, DOC
					</p>
				</div>

				<div 
					className={`upload-zone ${dragActive ? 'upload-zone--active' : ''}`}
					onDragEnter={handleDrag}
					onDragLeave={handleDrag}
					onDragOver={handleDrag}
					style={{
						border: '2px dashed var(--hero-blue-soft)',
						borderRadius: 'var(--radius-lg)',
						padding: 'var(--space-2xl)',
						textAlign: 'center',
						background: dragActive ? 'var(--hero-blue-hairline)' : 'white',
						cursor: 'pointer',
						transition: 'all var(--transition-fast)',
					}}
				>
					<div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>📄</div>
					<p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-sm)' }}>
						Sleep je CV hier naartoe
					</p>
					<p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
						of klik om een bestand te selecteren
					</p>
					<button 
						style={{
							marginTop: 'var(--space-lg)',
							padding: 'var(--space-sm) var(--space-lg)',
							background: 'var(--hero-orange)',
							color: 'white',
							border: 'none',
							borderRadius: 'var(--radius-md)',
							cursor: 'pointer',
							fontWeight: 500,
						}}
					>
						Bestand Selecteren
					</button>
				</div>

				<div className="pilet-section" style={{ marginTop: 'var(--space-xl)' }}>
					<h3>Recente Uploads</h3>
					<ul>
						<li>jan_jansen_cv.pdf - 3 dec 2024, 14:32</li>
						<li>maria_de_vries.docx - 3 dec 2024, 11:15</li>
						<li>peter_bakker_resume.pdf - 2 dec 2024, 16:48</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BetaUpload;

