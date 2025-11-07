'use client';

import { useDroppable } from '@dnd-kit/core';
import { useState } from 'react';

export default function Canvas({ activeId }) {
  const { setNodeRef } = useDroppable({ id: 'canvas' });
  const [items, setItems] = useState([]);

  // When something is dropped, add it
  if (activeId && !items.includes(activeId)) {
    setItems((prev) => [...prev, activeId]);
  }

  return (
    <main
      ref={setNodeRef}
      className="flex-1 h-screen bg-white p-8 overflow-auto"
    >
      <div className="min-h-[80vh] border-2 border-dashed border-gray-300 rounded-lg p-8">
        {items.length === 0 && (
          <p className="text-gray-400 text-center">
            Drag elements here to start building ✨
          </p>
        )}
        {items.map((item, index) => (
          <div key={index} className="mb-4">
            {item === 'title' && (
              <h1 className="text-3xl font-bold">Sample Title</h1>
            )}
            {item === 'paragraph' && (
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            )}
            {item === 'button' && (
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Click me
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
