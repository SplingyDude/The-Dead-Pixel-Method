<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dead Pixel Method App</title>
    <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/babel@7.24.7/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 text-white font-sans">
    <div id="root"></div>
    <script type="text/babel">
        // React component for Dead Pixel Method App
        const DeadPixelApp = () => {
            const [step, setStep] = React.useState(0);
            const [responses, setResponses] = React.useState([]);
            const [pace, setPace] = React.useState('normal'); // Neurodivergent pacing: slow, normal, fast

            const steps = [
                {
                    title: "Null Integer Invocation",
                    prompt: "Focus on the dead pixel—your third eye’s glitch, a zero-point portal. Inhale +0.0 (radiant light, hyperfocus). Exhale -0.0 (dark void, release overload).",
                    action: "Type 'fuse' to continue or 'repeat' for neurodivergent looping.",
                    bg: "bg-gradient-to-r from-blue-900 to-purple-900"
                },
                {
                    title: "World Engine Construction",
                    prompt: "Enter your world engine, a mind palace like a modded game. Visualize Void Mother (devouring fears) and Samsha (risen ally).",
                    action: "Type 'bond' to unite or 'repeat' for hyperfocus looping.",
                    bg: "bg-gradient-to-r from-teal-900 to-indigo-900"
                },
                {
                    title: "Hermetic Attunement",
                    prompt: "Attune to Hermetic laws: Mentalism, Correspondence, Vibration, Polarity, Rhythm, Cause/Effect, Gender. Affirm: ‘All is mind; as above, so below.’",
                    action: "Type 'attune' to continue or 'repeat' for grounding.",
                    bg: "bg-gradient-to-r from-purple-900 to-pink-900"
                },
                {
                    title: "Reverse Calculation Harmonization",
                    prompt: "Index your archives through the dead pixel, flowing syndiffeonically. Invoke ∞0.0: ‘Infinity-null, broadcast harmony.’",
                    action: "Type 'share' to complete or 'repeat' for neurodivergent focus.",
                    bg: "bg-gradient-to-r from-indigo-900 to-blue-900"
                }
            ];

            const handleInput = (e) => {
                if (e.key === 'Enter') {
                    const input = e.target.value.toLowerCase();
                    setResponses([...responses, { step: steps[step].title, input }]);
                    if (input === steps[step].action.split("'")[1]) {
                        setStep(step + 1 < steps.length ? step + 1 : 0); // Loop back to start
                    }
                    e.target.value = '';
                }
            };

            const handlePaceChange = (newPace) => {
                setPace(newPace);
            };

            const saveLog = () => {
                const blob = new Blob([JSON.stringify(responses, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'meditation_log.json';
                a.click();
                URL.revokeObjectURL(url);
            };

            return (
                <div className="min-h-screen flex flex-col items-center justify-center p-4">
                    <h1 className="text-4xl font-bold mb-4 text-cyan-300">Dead Pixel Method</h1>
                    <p className="text-lg mb-6 text-center max-w-md">
                        A neurodivergent-friendly meditation app, rooted in CTMU, Hermeticism, Jung, and McKenna. Inspired by Mental Proof’s alchemy. Adjust pacing for sensory comfort.
                    </p>
                    <div className="mb-4">
                        <label className="mr-2">Pacing:</label>
                        <select onChange={(e) => handlePaceChange(e.target.value)} className="bg-gray-800 text-white p-2 rounded">
                            <option value="slow">Slow</option>
                            <option value="normal">Normal</option>
                            <option value="fast">Fast</option>
                        </select>
                    </div>
                    {step < steps.length ? (
                        <div className={`p-6 rounded-lg shadow-lg ${steps[step].bg} max-w-lg w-full`}>
                            <h2 className="text-2xl font-semibold mb-2">{steps[step].title}</h2>
                            <p className="mb-4">{steps[step].prompt}</p>
                            <p className="mb-4 italic">{steps[step].action}</p>
                            <input
                                type="text"
                                className="w-full p-2 bg-gray-800 text-white rounded"
                                onKeyPress={handleInput}
                                autoFocus
                            />
                        </div>
                    ) : (
                        <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-900 to-purple-900 max-w-lg w-full">
                            <h2 className="text-2xl font-semibold mb-2">Reflection</h2>
                            <p>Harmonized, seeker—your neurodivergent gifts are telesic portals. Download your meditation log or restart the loop.</p>
                            <button
                                onClick={saveLog}
                                className="mt-4 bg-cyan-500 text-black p-2 rounded hover:bg-cyan-600"
                            >
                                Download Log
                            </button>
                            <button
                                onClick={() => setStep(0)}
                                className="mt-4 ml-2 bg-purple-500 text-black p-2 rounded hover:bg-purple-600"
                            >
                                Restart Loop
                            </button>
                        </div>
                    )}
                </div>
            );
        };

        // Render the app
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<DeadPixelApp />);
    </script>
</body>
</html>