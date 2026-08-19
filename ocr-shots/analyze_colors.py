"""Analyze screenshot colors: dominant palette + WCAG contrast of key pairs.

Outputs palette histogram and contrast ratios between the most common
text-ish colors and background colors found in the screenshots.
"""
from collections import Counter
from pathlib import Path

from PIL import Image

SHOTS = Path(__file__).parent


def srgb_to_lin(c: float) -> float:
    c /= 255.0
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def luminance(rgb) -> float:
    r, g, b = (srgb_to_lin(x) for x in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast(a, b) -> float:
    la, lb = luminance(a), luminance(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


def rgb_str(c):
    return "#%02X%02X%02X" % c


for png in sorted(SHOTS.glob("*.png")):
    img = Image.open(png).convert("RGB")
    w, h = img.size
    img_small = img.resize((max(1, w // 4), max(1, h // 4)))
    px = list(img_small.getdata())
    # quantize to reduce noise: round channels to nearest 16
    quant = Counter((r // 16 * 16, g // 16 * 16, b // 16 * 16) for r, g, b in px)
    top = quant.most_common(8)
    total = sum(c for _, c in top)
    print(f"\n=== {png.name} ({w}x{h}) ===")
    for color, count in top:
        pct = count / total * 100
        print(f"  {rgb_str(color)}  {pct:5.1f}%  luminance={luminance(color):.3f}")

# Key contrast pairs based on dominant colors seen in screenshots
pairs = [
    ("white-on-black", (255, 255, 255), (0, 0, 0)),
    ("black-on-white", (0, 0, 0), (255, 255, 255)),
    ("white-on-gray16", (255, 255, 255), (16, 16, 16)),
    ("gray144-on-gray16", (144, 144, 144), (16, 16, 16)),
    ("gray128-on-white", (128, 128, 128), (255, 255, 255)),
    ("gray96-on-gray16", (96, 96, 96), (16, 16, 16)),
    ("white-on-gray32", (255, 255, 255), (32, 32, 32)),
]
print("\n=== CONTRAST RATIOS (WCAG AA text needs 4.5:1, large text 3:1) ===")
for name, fg, bg in pairs:
    r = contrast(fg, bg)
    aa = "PASS" if r >= 4.5 else ("LARGE-ONLY" if r >= 3.0 else "FAIL")
    print(f"  {name:28s} {r:5.2f}:1  {aa}")
