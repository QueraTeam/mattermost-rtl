import manifest from './manifest';
import "./style.css"

class MattermostRTLPlugin {
    initialize(registry, store) {
        console.info('Hi! Mattermost RTL plugin initialized...');
    }
}

window.registerPlugin(manifest.id, new MattermostRTLPlugin());