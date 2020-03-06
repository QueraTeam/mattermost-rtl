import manifest from './manifest';
import "./style.css"

class MattermostRTLPlugin {
    initialize(registry, store) {
        console.info('Hi! Mattermost RTL plugin initialized...');
        setInterval(this.fixTextInputDirection, 5000);
    }

    fixTextInputDirection() {
        const textInputsSelector = '#post_textbox, #edit_textbox, #reply_textbox, #searchBox';
        for(const textInputElement of document.querySelectorAll(textInputsSelector)) {
            textInputElement.setAttribute('dir', 'auto')
        }
    }
}

window.registerPlugin(manifest.id, new MattermostRTLPlugin());