export default function Header() {
    return (
      <header className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-xl">☰</button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold text-sm">
            Preview
          </button>
          <button>⚙️</button>
          <button>Export →</button>
        </div>
      </header>
    )
  }