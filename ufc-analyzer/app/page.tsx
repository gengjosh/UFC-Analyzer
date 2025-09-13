import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center mb-8">
        <h1>Powered by Google Gemini and Tapology</h1>
        <h1>UFC Analyzer</h1>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <p>Enter Tapology Wesbite for Fighter 1</p>
        <input className="text-center" placeholder="Enter" />
        <p>Enter Tapology Wesbite for Fighter 2</p>
        <input className="text-center" placeholder="Enter" />
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Analyze Fight</button>
      </div>
    </main>
  );
}
