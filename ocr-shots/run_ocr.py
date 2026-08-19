"""OCR every screenshot in ocr-shots/ with RapidOCR and emit per-image text files.

Output per image: <name>.txt containing lines sorted top-to-bottom,
each prefixed with [y] and x-offset so layout can be reconstructed.
"""
import sys
from pathlib import Path

from PIL import Image
from rapidocr_onnxruntime import RapidOCR

SHOTS_DIR = Path(__file__).parent

engine = RapidOCR()

pngs = sorted(SHOTS_DIR.glob("*.png"))
if not pngs:
    print("No PNG files found in", SHOTS_DIR)
    sys.exit(1)

for png in pngs:
    out = png.with_suffix(".ocr.txt")
    img = Image.open(png)
    result, _ = engine(str(png))
    lines = []
    if result:
        for box, text, score in result:
            # box: 4 corners; top-left y and x used for layout sorting
            xs = [p[0] for p in box]
            ys = [p[1] for p in box]
            y = min(ys)
            x = min(xs)
            if float(score) >= 0.5:
                lines.append((round(y), round(x), str(text), round(float(score), 2)))
    lines.sort(key=lambda t: (t[0] // 25, t[0]))
    with open(out, "w", encoding="utf-8") as f:
        f.write(f"# OCR of {png.name}  ({img.width}x{img.height})\n")
        for y, x, text, score in lines:
            f.write(f"[y={y:>5} x={x:>5}] ({score}) {text}\n")
    print(f"OK {png.name}: {len(lines)} text lines -> {out.name}")

print("DONE")
