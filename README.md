# Sweepa the Palworld Database ([gaming.tools/palworld](https://gaming.tools/palworld)) Discord bot

> [!WARNING]
> This project is still in development and not ready for production use, contributions are welcome (contact us [here](https://gaming.tools/discord)).


[![License](https://img.shields.io/github/license/glazk0/sweepa)](LICENSE)
[![Contributors](https://img.shields.io/github/contributors/glazk0/sweepa.svg)](https://gitHub.com/glazk0/sweepa/graphs/contributors/)

A simple & user-friendly Discord bot integration of [gaming.tools/palworld](https://gaming.tools/palworld) for Palia.

## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [Localization](#localization)
- [Self-Hosting](#self-hosting)
- [Issues](#issues)
- [License](#license)

## Usage

1. Invite the bot to your Discord server and ensure it has the necessary permissions.
2. Make sure the .env file is configured correctly. (*Only if you are self-hosting*)
3. Start the bot using the installation instructions. (*Only if you are self-hosting*)

## Installation

> [!NOTE]  
> We recommend using our hosted version of sweepa cause API access is not guaranteed for self-hosted instances.

To get started, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/glazk0/sweepa.git
```

2. Install dependencies

```bash
pnpm install
```

3. Copy the example config file and fill in the values

```bash
cp .env.example .env
```

4. Sart the bot (using Docker)

```bash
pnpm docker:up
```

## Contributing

We welcome contributions from the community. If you have ideas for improvements or find issues, please open a pull request or submit an issue.

<a href="https://github.com/glazk0/sweepa/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=glazk0/sweepa" />
</a>

## Localization

Sweepa is currently available in the following languages:

- English

If you would like to contribute to the localization of Sweepa, please refer to the [localization](.github/LOCALIZATION.md) guide.

## Self-Hosting

The inclusion of the bot's source code herein is primarily intended to foster transparency and facilitate other developers in incorporating similar functionalities into their respective projects.

Given the inherent simplicity of the bot, utilizing the publicly-hosted version is generally sufficient for the majority of users. It is strongly recommended to employ the public version, unless specific reasons necessitate an alternative approach, such as for experimental purposes.

While users are granted the autonomy to host the bot on their own servers, it is imperative to note that support for self-hosted instances will not be provided. Undertaking self-hosting is at the sole risk and responsibility of the user. Moreover, any attempts to monetize the hosted bot are expressly prohibited. The bot is designed to serve the community and self hosted instances are prohibited from monetization.

## Issues

If you find a bug or have a feature request, please [open an issue](https://github.com/glazk0/sweepa/issues/new/choose) on GitHub.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
