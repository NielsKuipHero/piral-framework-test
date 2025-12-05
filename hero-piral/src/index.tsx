import * as React from 'react';
import { createInstance, Piral, createStandardApi } from 'piral-core';
import { createDashboardApi } from 'piral-dashboard';
import { createMenuApi } from 'piral-menu';
import { Layout } from './Layout';
import './style.scss';

// Define the pilet API type
declare module 'piral-core/lib/types/custom' {
	interface PiletCustomApi extends PiletDashboardApi, PiletMenuApi {}
}

import type { PiletDashboardApi } from 'piral-dashboard';
import type { PiletMenuApi } from 'piral-menu';

const instance = createInstance({
	state: {
		components: {
			Layout,
			LoadingIndicator: () => <div className="loading"><div className="loading__spinner" /><p>Laden...</p></div>,
			ErrorInfo: ({ error }) => <div className="error">Er is een fout opgetreden: {error?.message}</div>,
		},
	},
	plugins: [
		...createStandardApi(),
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
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container!);
root.render(app);

