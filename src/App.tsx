import { useState } from "react";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("unknown");

	return (
		<div className="max-w-screen-xl mx-auto p-8 text-center">
			<div className="flex justify-center gap-6 mb-8">
				<a href="https://vite.dev" target="_blank" rel="noopener">
					<img 
						src={viteLogo} 
						className="logo h-24 p-6 will-change-auto transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" 
						alt="Vite logo" 
					/>
				</a>
				<a href="https://react.dev" target="_blank" rel="noopener">
					<img 
						src={reactLogo} 
						className="logo h-24 p-6 will-change-auto transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]" 
						alt="React logo" 
					/>
				</a>
				<a href="https://workers.cloudflare.com/" target="_blank" rel="noopener">
					<img 
						src={cloudflareLogo} 
						className="logo h-24 p-6 will-change-auto transition-all duration-300 hover:drop-shadow-[0_0_2em_#f6821faa]" 
						alt="Cloudflare logo" 
					/>
				</a>
			</div>
			<h1 className="text-3xl font-bold mb-8">Vite + React + Cloudflare</h1>
			<div className="p-8 mb-6">
				<button 
					type="button" 
					onClick={() => setCount((count) => count + 1)} 
					aria-label="increment"
					className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 mb-4"
				>
					count is {count}
				</button>
				<p className="text-gray-600 dark:text-gray-400">
					Edit <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<div className="p-8 mb-6">
				<button
					type="button"
					onClick={() => {
						fetch("/api/")
							.then((res) => res.json() as Promise<{ name: string }>)
							.then((data) => setName(data.name));
					}}
					aria-label="get name"
					className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 mb-4"
				>
					Name from API is: {name}
				</button>
				<p className="text-gray-600 dark:text-gray-400">
					Edit <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">worker/index.ts</code> to change the name
				</p>
			</div>
			<p className="text-gray-500 dark:text-gray-400 text-sm">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
