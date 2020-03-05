# Mattermost RTL

This plugin adds RTL support to Mattermost and applies some UI customizations.

- Automatic direction for messages
  - Correct direction for `inline codes`
- Changes font to [Vazir](https://github.com/rastikerdar/vazir-font)
- Reduces width of message boxes
- Other minor UI changes

**Before** enabling plugin:

![before](screenshots/before.png)

**After** enabling plugin:

![after](screenshots/after.png)

This repository is based on
[mattermost/mattermost-plugin-starter-template](https://github.com/mattermost/mattermost-plugin-starter-template).

## Installation

Download the plugin file (`ir.quera.mattermost-rtl-*.tar.gz`) from
[Releases](https://github.com/QueraTeam/mattermost-rtl/releases)
page and upload to your Mattermost
server via **System Console**.

## Development, Build

    make
