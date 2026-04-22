import imageio
import os

def convert_webp_to_mp4(input_path, output_path):
    print(f"Converting {input_path} to {output_path}...")
    reader = imageio.get_reader(input_path)
    fps = reader.get_meta_data().get('fps', 10) # default to 10 if not found
    
    writer = imageio.get_writer(output_path, format='FFMPEG', mode='I', fps=fps, codec='libx264', pixelformat='yuv420p', quality=8)
    
    for frame in reader:
        writer.append_data(frame)
    
    writer.close()
    print("Conversion complete!")

# File paths
base_dir = r"C:\Users\Utente\.gemini\antigravity\brain\4ba1df83-9e2b-4dc0-947a-dddc6323066f"
file1 = os.path.join(base_dir, "geniotto_demo_final_fluid_1774714193305.webp")
file2 = os.path.join(base_dir, "geniotto_demo_fluida_v4_1774714775765.webp")

out1 = os.path.join(base_dir, "Geniotto_Demo_Parte1_Final.mp4")
out2 = os.path.join(base_dir, "Geniotto_Demo_Parte2_Final.mp4")

try:
    convert_webp_to_mp4(file1, out1)
    convert_webp_to_mp4(file2, out2)
except Exception as e:
    print(f"Error during conversion: {e}")
