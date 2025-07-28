import { useState } from "react";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("unknown");

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
			<div className="container mx-auto px-4 py-12">
				{/* Header Section */}
				<div className="text-center mb-12">
					<div className="flex justify-center items-center gap-8 mb-8">
						<a href="https://vite.dev" target="_blank" rel="noopener">
							<img 
								src={viteLogo} 
								className="logo h-20 w-20 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_2em_#646cffaa]" 
								alt="Vite logo" 
							/>
						</a>
						<a href="https://react.dev" target="_blank" rel="noopener">
							<img 
								src={reactLogo} 
								className="logo h-20 w-20 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_2em_#61dafbaa]" 
								alt="React logo" 
							/>
						</a>
						<a href="https://workers.cloudflare.com/" target="_blank" rel="noopener">
							<img 
								src={cloudflareLogo} 
								className="logo h-20 w-20 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_2em_#f6821faa]" 
								alt="Cloudflare logo" 
							/>
						</a>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
						Vite + React + Cloudflare
					</h1>
					<p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
						Modern web development stack with lightning-fast builds and global edge deployment
					</p>
				</div>

				{/* Cards Container */}
				<div className="max-w-6xl mx-auto grid gap-8 grid-cols-2">
					{/* Counter Card */}
					<div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
						<div className="text-center">
							<h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
								Interactive Counter
							</h2>
							<button 
								type="button" 
								onClick={() => setCount((count) => count + 1)} 
								aria-label="increment"
								className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl mb-6"
							>
								Count: {count}
							</button>
							<p className="text-slate-600 dark:text-slate-400 text-sm">
								Edit <code className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-2 py-1 rounded-md font-mono text-xs">src/App.tsx</code> and save to test HMR
							</p>
						</div>
					</div>

					{/* API Card */}
					<div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
						<div className="text-center">
							<h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
								API Integration
							</h2>
							<button
								type="button"
								onClick={() => {
									fetch("/api/")
										.then((res) => res.json() as Promise<{ name: string }>)
										.then((data) => setName(data.name));
								}}
								aria-label="get name"
								className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl mb-6"
							>
								Name: {name}
							</button>
							<p className="text-slate-600 dark:text-slate-400 text-sm">
								Edit <code className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-2 py-1 rounded-md font-mono text-xs">worker/index.ts</code> to change the name
							</p>
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className="text-center mt-16">
					<p className="text-slate-500 dark:text-slate-400">
						Click on the logos to learn more about each technology
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
