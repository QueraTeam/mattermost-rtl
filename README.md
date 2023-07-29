# Mattermost RTL

This plugin [adds RTL (right-to-left) support to Mattermost](https://mattermost.com/blog/adding-rtl-support-to-mattermost/).
It applies automatic text direction to messages and text inputs.

To use Vazirmatn font, please install [mattermost-vazirmatn](https://github.com/QueraTeam/mattermost-vazirmatn) plugin.

**Before** enabling the plugin:

![before](screenshots/screenshot1.png)

**After** enabling the plugin:

![after](screenshots/screenshot2.png)

This repository is based on
[mattermost-plugin-starter-template](https://github.com/mattermost/mattermost-plugin-starter-template).

## Installation

Download the plugin file (`ir.quera.mattermost-rtl-*.tar.gz`) from the
[Releases](https://github.com/QueraTeam/mattermost-rtl/releases)
page and upload to your Mattermost server via **System Console**.

## Other Plugins

- [mattermost-vazirmatn](https://github.com/QueraTeam/mattermost-vazirmatn)
- [mattermost-chat-ui](https://github.com/QueraTeam/mattermost-chat-ui)

## Development, Build

    make
