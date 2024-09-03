import base64
import os
from datetime import datetime

def save_base64_image(base64_string, output_dir="generated_images"):
    """
    Save a base64 encoded image to a file.
    
    Args:
    base64_string (str): The base64 encoded image string.
    output_dir (str): Directory to save the image in.
    
    Returns:
    str: The path to the saved image file.
    """
    # Create the output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Generate a unique filename using timestamp
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"generated_image_{timestamp}.png"
    filepath = os.path.join(output_dir, filename)
    
    # Decode the base64 string and write to file
    with open(filepath, "wb") as image_file:
        image_file.write(base64.b64decode(base64_string))
    
    return filepath

def save_image_data(image_data, output_dir="generated_images"):
    """
    Save image data to a file. This function can be expanded to handle
    different types of image data (e.g., bytes, PIL Image objects).
    
    Args:
    image_data: The image data to save.
    output_dir (str): Directory to save the image in.
    
    Returns:
    str: The path to the saved image file.
    """
    if isinstance(image_data, str):
        # Assume it's a base64 encoded string
        return save_base64_image(image_data, output_dir)
    else:
        # For now, we only handle base64 strings
        raise ValueError("Unsupported image data format")