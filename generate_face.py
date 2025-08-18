from PIL import Image
import json

image_path = 'public/phil_face.png'
dot_spacing = 8
dot_size = 6 

im = Image.open(image_path).convert('L') 
width, height = im.size

dots = []
for y in range(0, height, dot_spacing):
    for x in range(0, width, dot_spacing):
        brightness = 1.0 - im.getpixel((x, y)) / 255.0
        if brightness > 0.15: 
            dots.append({'x': x - width // 2, 'y': y - height // 2, 'brightness': round(brightness, 2)})

with open('face_dots.json', 'w') as f:
    json.dump(dots, f)
print(f'Generated {len(dots)} dots.')