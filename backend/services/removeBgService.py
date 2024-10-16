import io
import numpy as np
import rembg
from PIL import Image
from fastapi.responses import StreamingResponse

def removeBgService(file: bytes):
    input_file = Image.open(io.BytesIO(file))
    input_array = np.array(input_file)
    output_array = rembg.remove(input_array)
    output_image = Image.fromarray(output_array)
    # Save the image into a BytesIO object
    # BytesIO is a temporary "file" stored in memory, 
    # where you can read and write bytes just like a regular file on disk.
    buffered = io.BytesIO()
    output_image.save(buffered, format="PNG")  # Save the image (in memory) as PNG
    # This ensures that when you read from buffered, you get the full image data from the beginning.
    buffered.seek(0)  # Move to the beginning of the buffer
    # Encode the image in base64 to send it as a JSON response
    # img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')

    return StreamingResponse(buffered, media_type="image/png")