import manifest from './manifest';
import './style.css';

function fixDirections() {
  const selector = '#post_textbox, #edit_textbox, #reply_textbox, #searchBox, '
    + '.post-message__text > p, .post-message__text > ul, .post-message__text > ol';
  document.querySelectorAll(selector).forEach((element) => {
    element.setAttribute('dir', 'auto');
  });

  // In Mattermost 5.34, this CSS rule exists:
  //
  //     .post-message__text > ul { direction: ltr }
  //
  // We need to cancel its effect. Overriding CSS does not work.
  // We wrap the <ul> element in a <div>, so the CSS selector does not match it anymore.
  document.querySelectorAll('.post-message__text > ul').forEach((element) => {
    // eslint-disable-next-line no-param-reassign
    element.outerHTML = `<div>${element.outerHTML}</div>`;
  });
}

class MattermostRTLPlugin {
  initialize() {
    fixDirections();
    this.interval = setInterval(fixDirections, 5000);
  }

  uninitialize() {
    clearInterval(this.interval);
  }
}

window.registerPlugin(manifest.id, new MattermostRTLPlugin());
