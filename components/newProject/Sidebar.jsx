'use client';

import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';

// Composant pour éléments draggable (glisser-déposer)
const DraggableItem = ({ id, label }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-grab p-2 bg-white rounded-md shadow-sm border hover:bg-gray-50 transition"
    >
      {label}
    </div>
  );
};

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('content');

  const elements = [
    { id: 'title', label: 'Title (H1)' },
    { id: 'paragraph', label: 'Paragraph' },
    { id: 'button', label: 'Button' },
    { id: 'link', label: 'Link' },
    { id: 'image', label: 'Image' },
  ];

  return (
    <aside className="w-64 bg-white border-r h-screen flex flex-col shadow-sm">
      {/* Onglets Content / Style */}
      <div className="flex border-b">
        <button
          className={`flex-1 py-2 font-medium text-sm ${
            activeTab === 'content'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('content')}
        >
          Content
        </button>
        <button
          className={`flex-1 py-2 font-medium text-sm ${
            activeTab === 'style'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('style')}
        >
          Style
        </button>
      </div>

      {/* Contenu des onglets */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'content' ? (
          <>
            {/* Section TEXT */}
            <details open className="mb-4">
              <summary className="font-semibold cursor-pointer text-gray-800">
                Text
              </summary>
              <div className="mt-2 space-y-3">
                <label className="block">
                  <span className="text-sm text-gray-600">Title 1</span>
                  <input
                    type="text"
                    placeholder="Value"
                    className="w-full mt-1 p-1.5 border rounded-md text-sm"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-gray-600">Title 2</span>
                  <input
                    type="text"
                    placeholder="Value"
                    className="w-full mt-1 p-1.5 border rounded-md text-sm"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-gray-600">Paragraph</span>
                  <textarea
                    placeholder="Value"
                    className="w-full mt-1 p-1.5 border rounded-md text-sm"
                    rows={3}
                  />
                </label>
              </div>
            </details>

            {/* Section BUTTON */}
            <details className="mb-4">
              <summary className="font-semibold cursor-pointer text-gray-800">
                Button
              </summary>
              <div className="mt-2 space-y-3">
                <label className="block">
                  <span className="text-sm text-gray-600">Button 1</span>
                  <input
                    type="text"
                    placeholder="Value"
                    className="w-full mt-1 p-1.5 border rounded-md text-sm"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-gray-600">Button ID</span>
                  <input
                    type="text"
                    placeholder="Value"
                    className="w-full mt-1 p-1.5 border rounded-md text-sm"
                  />
                </label>
              </div>
            </details>

            {/* Section LINK */}
            <details className="mb-4">
              <summary className="font-semibold cursor-pointer text-gray-800">
                Link
              </summary>
              <div className="mt-2 space-y-3">
                <label className="block">
                  <span className="text-sm text-gray-600">Link 1</span>
                  <input
                    type="text"
                    placeholder="Value"
                    className="w-full mt-1 p-1.5 border rounded-md text-sm"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-gray-600">URL</span>
                  <input
                    type="text"
                    placeholder="Value"
                    className="w-full mt-1 p-1.5 border rounded-md text-sm"
                  />
                </label>
              </div>
            </details>

            {/* Section IMAGE */}
            <details>
              <summary className="font-semibold cursor-pointer text-gray-800">
                Image
              </summary>
              <div className="mt-2 space-y-3">
                <label className="block">
                  <span className="text-sm text-gray-600">Image</span>
                  <input
                    type="file"
                    className="w-full mt-1 p-1.5 border rounded-md text-sm"
                  />
                </label>
              </div>
            </details>
          </>
        ) : (
          <div className="text-gray-500 text-sm italic">
            Style options coming soon...
          </div>
        )}
      </div>

      {/* Footer (draggable elements) */}
      <div className="border-t p-2 bg-gray-50">
        <p className="text-xs text-gray-500 text-center mb-2">
          Drag & drop elements below:
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {elements.map((el) => (
            <DraggableItem key={el.id} {...el} />
          ))}
        </div>
      </div>
    </aside>
  );
}
