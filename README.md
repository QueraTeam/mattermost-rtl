# Mattermost RTL

This plugin [adds RTL (right-to-left) support to Mattermost](https://mattermost.com/blog/adding-rtl-support-to-mattermost/).
It applies automatic direction for messages and text inputs.

**Before** enabling plugin:

![before](screenshots/screenshot1.png)

**After** enabling plugin:

![after](screenshots/screenshot2.png)

This plugin is also compatible with [mattermost-chat-ui](https://github.com/QueraTeam/mattermost-chat-ui), enabling both will result in:

![after](screenshots/screenshot3.png)

This repository is based on
[mattermost-plugin-starter-template](https://github.com/mattermost/mattermost-plugin-starter-template).

## Installation

Download the plugin file (`ir.quera.mattermost-rtl-*.tar.gz`) from
[Releases](https://github.com/QueraTeam/mattermost-rtl/releases)
page and upload to your Mattermost
server via **System Console**.

## Development, Build

    make
