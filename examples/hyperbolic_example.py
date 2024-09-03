import os
import requests
from datasets import load_dataset
import random
from examples.image_generation import save_image_data

# Load environment variables
HYPERBOLIC_API_KEY = os.getenv('HYPERBOLIC_API_KEY')
if not HYPERBOLIC_API_KEY:
    raise ValueError("Please set the HYPERBOLIC_API_KEY environment variable.")

# Hyperbolic API endpoints
TEXT_URL = "https://api.hyperbolic.xyz/v1/chat/completions"
IMAGE_URL = "https://api.hyperbolic.xyz/v1/image/generation"

# Headers for API requests
HEADERS = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {HYPERBOLIC_API_KEY}"
}

def generate_text(prompt):
    """Generate text using Hyperbolic AI's Hermes model."""
    data = {
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ],
        "model": "NousResearch/Hermes-3-Llama-3.1-70B",
        "max_tokens": 2048,
        "temperature": 0.7,
        "top_p": 0.9
    }
    
    response = requests.post(TEXT_URL, headers=HEADERS, json=data)
    return response.json()['choices'][0]['message']['content']

def generate_image(prompt):
    """Generate an image using Hyperbolic AI's Flux model."""
    data = {
        "model_name": "FLUX.1-dev",
        "prompt": prompt,
        "steps": 30,
        "cfg_scale": 5,
        "enable_refiner": False,
        "height": 1024,
        "width": 1024,
        "backend": "auto"
    }
    
    response = requests.post(IMAGE_URL, headers=HEADERS, json=data)
    return response.json()['images'][0]['image']  # This will be a base64 encoded image

def main():
    # Load the CharacterCodex dataset
    ds = load_dataset("NousResearch/CharacterCodex")
    
    # Select a random character
    character = random.choice(ds['train'])
    
    print(f"Selected character: {character['name']} from {character['source']}")
    
    # Example prompts based on the context:

    # 1. Superhero scenario
    narrative_prompt = f"Create a short story featuring {character['name']} from {character['source']} in a modern-day setting. Use the following description as inspiration: {character['description']}. The story should involve the character unexpectedly discovering a new superpower and using it to solve a city-wide crisis."

    # 2. Time travel adventure
    narrative_prompt = f"Write a brief tale about {character['name']} from {character['source']} accidentally traveling through time. Use this description for context: {character['description']}. The story should involve the character trying to return to their own time while avoiding changing historical events."

    # 3. Crossover event
    narrative_prompt = f"Craft a short crossover story where {character['name']} from {character['source']} meets a character from a different franchise. Consider this description: {character['description']}. The story should focus on how their unique abilities and personalities interact in an unexpected situation."

    # 4. Everyday life scenario
    narrative_prompt = f"Compose a slice-of-life story featuring {character['name']} from {character['source']} dealing with a mundane, everyday problem. Use this description for background: {character['description']}. The story should highlight how the character's unique traits influence their approach to solving an ordinary issue."

    # Generate the narrative using one of the above prompts
    narrative = generate_text(narrative_prompt)
    print("\nGenerated Narrative:")
    print(narrative)
    
    # Generate an image based on the narrative
    image_prompt = f"Create a vivid, detailed image depicting a key scene from the following story: {narrative[:500]}... The image should capture the essence of {character['name']} from {character['source']}, emphasizing their unique characteristics and the story's atmosphere."

    image_data = generate_image(image_prompt)
    
    # Save the generated image
    image_path = save_image_data(image_data)
    print(f"\nImage generated and saved successfully at: {image_path}")

if __name__ == "__main__":
    main()
