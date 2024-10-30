import React from "react";
import { MessageSquare } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full p-6 space-y-8">
        <div className="flex justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-GfEqqdIdMRnAPjbRjYzxv23Etl8Lgs.jpg"
            alt="Prathamesh Balache Kapade Logo"
            className="rounded-lg"
            style={{ width: '400px', height: '400px' }}
          />
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Coming Soon!</h1>
          <p className="text-xl text-gray-800">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
        </div>

        <div className="flex justify-center gap-6 pt-4">
          <a
            href="https://wa.me/9833368284"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-900 hover:text-gray-700"
          >
            <MessageSquare className="w-5 h-5" />
            <span>9833368284</span>
          </a>
          <a
            href="https://wa.me/9833757843"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-900 hover:text-gray-700"
          >
            <MessageSquare className="w-5 h-5" />
            <span>9833757843</span>
          </a>
        </div>

        <div className="text-center text-sm text-gray-900">
          <p>Follow us on social media:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="https://www.instagram.com/Kharutaai1999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              @Kharutaai1999
            </a>
            <a
              href="https://www.instagram.com/PrathameshBalacheKapade"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              @PrathameshBalacheKapade
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
