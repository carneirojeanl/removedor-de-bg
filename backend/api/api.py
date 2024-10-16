from fastapi import FastAPI, File, UploadFile
from backend.config.cors_config import configure_cors
from backend.services.removeBgService import removeBgService

app = FastAPI()

configure_cors(app)

@app.post('/upload-image')
async def upload_image(file: UploadFile = File()):
    try:
        image_input = await file.read()
        image_output = removeBgService(image_input)
        return image_output
    except Exception as e:
        return {'error': str(e)}