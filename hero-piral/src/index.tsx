import * as React from 'react';
import { createInstance, Piral } from 'piral-core';
import { createDashboardApi } from 'piral-dashboard';
import { createMenuApi } from 'piral-menu';
import { createRoot } from 'react-dom/client';
import { Layout } from './Layout';
import './style.css';

const instance = createInstance({
	state: {
		components: {
			Layout,
			LoadingIndicator: () => <div className="loading"><div className="loading__spinner" /><p>Laden...</p></div>,
			ErrorInfo: ({ error }: { error?: Error }) => <div className="error">Er is een fout opgetreden: {error?.message}</div>,
		},
	},
	plugins: [
		createDashboardApi(),
		createMenuApi(),
	],
	requestPilets() {
		// For development, load pilets from local feed
		// In production, this would fetch from a pilet feed service
		return fetch('/pilets')
			.then(res => res.json())
			.catch(() => []);
	},
});

const app = <Piral instance={instance} />;

// Render to DOM
const container = document.getElementById('app');
const root = createRoot(container!);
root.render(app);

