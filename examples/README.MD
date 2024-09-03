# NEAR AI Cookbook Examples

This repository contains examples demonstrating the integration of various AI technologies with NEAR blockchain. Each example showcases how to leverage decentralized AI capabilities in conjunction with NEAR's smart contract platform.

## Hyperbolic Example

This example demonstrates the integration of Hyperbolic AI with NEAR AI, showcasing a powerful combination of decentralized AI technologies. It utilizes both text generation and image generation capabilities to illustrate the value of decentralized inference.

### Overview

The Hyperbolic example leverages the [CharacterCodex dataset](https://huggingface.co/datasets/NousResearch/CharacterCodex) from Nous Research, a comprehensive collection of popular characters from various media types and genres. This dataset provides rich, detailed information about characters, their media sources, and unique scenarios involving them.

The example performs the following steps:
1. Selects a random character from the CharacterCodex dataset.
2. Generates a short narrative about the character using Hyperbolic AI's text generation model (Hermes-3-Llama-3.1-70B).
3. Creates an image based on the generated narrative using Hyperbolic AI's image generation model (FLUX.1-dev).

This process demonstrates how decentralized AI can be used for creative tasks, synthetic data generation, and multimedia content creation. The CharacterCodex dataset, which is continuously updated and maintained by the community, provides a rich source of inspiration for these AI-generated stories and images.

### Prerequisites

- Python 3.7+
- NEAR account
- Hyperbolic AI API key

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/near-ai-cookbook.git
   cd near-ai-cookbook/examples
   ```

2. Install dependencies:

   ```
   pip install -r ../requirements.txt
   ```

3. Set up your Hyperbolic AI API key:

   ```
   cp .env.example .env
   ```
   Then edit the `.env` file to include your Hyperbolic AI API key.

### Usage

Run the example:
