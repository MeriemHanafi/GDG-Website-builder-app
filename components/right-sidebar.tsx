export default function RightSidebar() {
    return (
      <aside className="w-64 bg-white border-l border-gray-200 p-4 overflow-y-auto min-h-screen">
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-sm">• Lorem Ipsum</span>
              <button className="text-gray-400">⋮</button>
            </div>
            <div className="space-y-2 ml-4">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                <span>Lorem Ipsum</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                <span>Lorem Ipsum</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                <span>Lorem Ipsum</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                <span>Lorem Ipsum</span>
              </label>
            </div>
          </div>
        </div>
  
        <div className="fixed bottom-4 right-4 bg-white border border-gray-400 rounded-lg px-4 py-2 flex items-center gap-3">
          <span>←</span>
          <span>👆</span>
          <span>∨</span>
        </div>
      </aside>
    )
  }