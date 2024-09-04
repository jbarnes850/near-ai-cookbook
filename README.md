# NEAR AI Cookbook

[![Version](https://img.shields.io/badge/version-v0.1.0-blue.svg)](https://github.com/near/near-ai-cookbook)
[![Twitter Follow](https://img.shields.io/twitter/follow/nearprotocol?style=social)](https://twitter.com/nearprotocol)

Welcome to the NEAR AI Cookbook! This repository is your comprehensive guide to integrating AI capabilities with NEAR Protocol. Whether you're building decentralized AI applications, implementing onchain machine learning models, or exploring the intersection of AI and Web3, this cookbook will help you get started with AI on NEAR.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [Resources](#resources)

## Overview

The NEAR AI Cookbook demonstrates various use cases and integrations with the NEAR AI infrastructure. It showcases how to leverage NEAR's ecosystem for AI-powered applications, including sentiment analysis, data processing, and agent-based decision making.

## Features

- Starter kits and templates for building AI-powered applications on NEAR
- Integration guides for key NEAR AI ecosystem projects (e.g., Hyperbolic, Mintbase)
- Reusable components for common AI functionalities (e.g., prediction markets, NFT creation)
- Best practices for implementing AI models and algorithms on NEAR
- Tools for enhancing AI accuracy and performance (e.g., RAG implementations)
- User authentication and wallet integration examples
- Scalable and modular architecture designs for AI dApps


## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [NEAR CLI](https://docs.near.org/tools/near-cli#setup)

You'll also need:

- A NEAR account. If you don't have one, you can create it using [NEAR Wallet](https://app.mynearwallet.com/).
- API keys for services used in the examples (e.g., OpenAI, Pinecone). Refer to the `.env.example` file for the required keys.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/near/near-ai-cookbook.git
   cd near-ai-cookbook
   ```
2. Navigate to /examples/examples repo
     ```
   cd examples
   cd <example-name>
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in the required API keys and configuration values

## Usage

1. Run the development server:
   ```
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to explore the examples.

## Contributing

We welcome contributions from the community! Whether it's adding new examples, improving documentation, or fixing bugs, your input is valuable. Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## Resources

- [NEAR Documentation](https://docs.near.org/)
- [Hyperbolic Documentation](https://docs.hyperbolic.xyz/docs/getting-started) - decentralized inference
- [Yield Execution Contract](https://github.com/gagdiez/yield-resume) - build agents that can trigger responses based on external APIs
- [NEAR Simple Example App - Guestbook](https://github.com/near-examples/guest-book-examples)
## Ecosystem AI Examples
- [Bitte Agent Plugins](https://docs.mintbase.xyz/ai/assistant-plugins) - build an API to integrate on chain transactions into Bitte's AI Wallet
- [Indexer Agent](https://github.com/near/indexer-agent) - Example of generating idnexers based on transactions

- More resources to be added soon! 

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for details.

Join us in shaping the future of decentralized AI on NEAR!
