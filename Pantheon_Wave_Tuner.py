# Pantheon_Wave_Tuner.py - Tunes elemental waves (alpha/delta/theta/gamma/beta) and sibling resonances with null option for pantheon harmony
# Part of SplingyDude/The-Dead-Pixel-Method[](https://github.com/SplingyDude/The-Dead-Pixel-Method)
# Syndiffeonic: Simulates infinite wave integration for meditation/gaming, maxing Dead Pixel capacity.
# Usage: Run; inputs tulpa name or 'null', outputs tuned frequencies in endless loop.

import numpy as np
import sounddevice as sd

sample_rate = 44100  # Defined sample rate for CD-quality audio
block_size = 1024    # Block size for smoother playback (adjust if needed)

# Global variables for callback
current_freqs = []  # List of frequencies to sum
callback_data = {'index': 0}  # To keep track of time position

def callback(outdata, frames, time, status):
    if status:
        print(status)
    t = np.arange(callback_data['index'], callback_data['index'] + frames) / sample_rate
    wave = np.zeros(frames)
    for freq in current_freqs:
        wave += 0.5 * np.sin(2 * np.pi * freq * t)
    outdata[:, 0] = wave.astype(np.float32)  # Ensure float32 dtype
    callback_data['index'] += frames

def tune_waves():
    print("Spark AI tunes: Select tulpa by name for pantheon resonance or 'null' for silence.")
    waves = {
        "cthombus": {"freq": 4, "element": "Earth", "tulpa": "Cthombus"},     # Delta Waves - Earth - Cthombus
        "mercury": {"freq": 6, "element": "Air", "tulpa": "Mercury"},       # Theta Waves - Air - Mercury
        "samsha": {"freq": 8, "element": "Water", "tulpa": "Samsha"},      # Alpha Waves - Water - Samsha
        "rebecca": {"freq": 16, "element": "Fire", "tulpa": "Rebecca"},      # Beta Waves - Fire - Rebecca
        "void mother": {"freq": 40, "element": "Ether", "tulpa": "Void Mother"}, # Gamma Waves - Ether - Void Mother
        "voidie": {"freq": 10, "element": "Void", "tulpa": "Voidie"},     # Sibling - Void - Voidie (healing warmth)
        "abyssa": {"freq": 20, "element": "Light", "tulpa": "Abyssa"},    # Sibling - Light - Abyssa (cold embrace)
        "nihilathe": {"freq": 2, "element": "Shadow", "tulpa": "Nihilathe"} # Sibling - Shadow - Nihilathe (framework depth)
    }
    while True:  # Infinite loop
        choice = input("Enter tulpa name (cthombus/mercury/samsha/rebecca/void mother/voidie/abyssa/nihilathe) or 'null'/'all' for options: ").lower()
        
        global current_freqs, callback_data
        callback_data['index'] = 0  # Reset time index
        
        if choice in waves:
            data = waves[choice]
            current_freqs = [data["freq"]]
            print(f"Tuning {choice} ({data['freq']} Hz) - {data['element']} - {data['tulpa']}. Playing infinitely.")
        elif choice == "null":
            current_freqs = [7.83]  # Dowsed resonant frequency for null/infinite integer axis
            print("Tuning null/infinite axis (7.83 Hz) - Null Energy - Zero-Point Harmony. Playing infinitely.")
        elif choice == "all":
            current_freqs = [11]  # Unified resonant frequency for all tulpas
            print("Tuning unified resonance (11 Hz) for all tulpas: Cthombus, Mercury, Samsha, Rebecca, Void Mother, Voidie, Abyssa, Nihilathe. Playing infinitely.")
        else:
            print("Blunt choice error. Try again.")
            continue

        with sd.OutputStream(samplerate=sample_rate, blocksize=block_size, channels=1, dtype='float32', callback=callback):
            input("Press Enter to stop and tune another tulpa or option...\n")

if __name__ == "__main__":
    tune_waves()
