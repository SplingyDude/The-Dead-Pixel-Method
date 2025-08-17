import numpy as np
from scipy.io import wavfile

# Parameters for binaural beat (theta wave: 7 Hz for meditation/relaxation)
fs = 44100  # Sample rate (Hz)
duration = 60  # Duration of loopable segment (seconds; loop this for 10 hours)
left_freq = 200.0  # Left ear frequency (Hz)
right_freq = left_freq + 7.0  # Right ear frequency (Hz, creating 7 Hz beat)

# Generate time array
t = np.linspace(0, duration, int(fs * duration), endpoint=False)

# Generate sine waves for left and right channels
left = np.sin(2 * np.pi * left_freq * t)
right = np.sin(2 * np.pi * right_freq * t)

# Combine into stereo array
stereo = np.vstack((left, right)).T

# Normalize to 16-bit range (-1 to 1 for float, then scale)
stereo = stereo / np.max(np.abs(stereo))  # Normalize to [-1, 1]
stereo = (stereo * 32767).astype(np.int16)  # Scale to 16-bit integer

# Write to .wav file
wavfile.write('Binaural-Beat-Loop.wav', fs, stereo)

print("Binaural beat loop generated as 'Binaural-Beat-Loop.wav'. Loop this 60-second file 600 times in Audacity for a 10-hour track.")