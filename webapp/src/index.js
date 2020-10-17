import manifest from "./manifest";
import "./style.css"

class MattermostRTLPlugin {
    initialize(registry, store) {
        console.info("Hi! Mattermost RTL plugin initialized...");
        setInterval(this.autoDirection, 5000);
    }

    autoDirection() {
        const selector = "#post_textbox, #edit_textbox, #reply_textbox, #searchBox, " +
            ".post-message__text > p, .post-message__text > ul, .post-message__text > ol";
        for(const element of document.querySelectorAll(selector)) {
            element.setAttribute("dir", "auto")
        }
    }
}

window.registerPlugin(manifest.id, new MattermostRTLPlugin());