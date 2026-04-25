from PIL import Image

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        # 如果像素接近白色或浅灰色（棋盘格色）
        # 阈值设为 180，因为背景棋盘格颜色通常在 200-255 之间
        if item[0] > 200 and item[1] > 200 and item[2] > 200:
            new_data.append((255, 255, 255, 0)) # 透明
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_background("characters_sheet.png", "characters_sheet_transparent.png")
