from PIL import Image
import numpy as np
import json

image_path = 'public/phil_face.png' 
threshold = 80
min_dot_size = 4
max_dot_size = 12

im = Image.open(image_path).convert('L')
arr = np.array(im)
height, width = arr.shape

visited = np.zeros_like(arr, dtype=bool)
dots = []

def find_dot(x, y):
    stack = [(x, y)]
    pixels = []
    while stack:
        cx, cy = stack.pop()
        if (0 <= cx < width and 0 <= cy < height and
            not visited[cy, cx] and arr[cy, cx] < threshold):
            visited[cy, cx] = True
            pixels.append((cx, cy))
            for dx in [-1, 0, 1]:
                for dy in [-1, 0, 1]:
                    if dx != 0 or dy != 0:
                        stack.append((cx + dx, cy + dy))
    return pixels

for y in range(height):
    for x in range(width):
        if arr[y, x] < threshold and not visited[y, x]:
            pixels = find_dot(x, y)
            if min_dot_size**2 < len(pixels) < max_dot_size**2:
                xs, ys = zip(*pixels)
                cx = int(np.mean(xs))
                cy = int(np.mean(ys))
                brightness = 1.0 - arr[cy, cx] / 255.0
                dots.append({'x': cx - width // 2, 'y': cy - height // 2, 'brightness': round(brightness, 2)})

with open('face_dots.json', 'w') as f:
    json.dump(dots, f)
print(f'Generated {len(dots)} dots.')