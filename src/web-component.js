import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import reactToWebComponent from 'react-to-webcomponent'; 

import './index.css';
import '@mantine/core/styles.css';

const SCRIPT_NAME = 'dialog-window';

const WebComponentConfig = () => {
	return (
		<MantineProvider>
			<App />
		</MantineProvider>
	);
}

// Converting the React component (WebComponentConfig) into a Web Component
const WebComponent = reactToWebComponent(WebComponentConfig, React, ReactDOM);

// Registering the web component with a custom element name
window.customElements.define(SCRIPT_NAME, WebComponent);

export default WebComponent; // Exporting the web component for use elsewhere
