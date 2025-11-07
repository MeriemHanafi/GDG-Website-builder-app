'use client';

import { useDraggable } from '@dnd-kit/core';
import { GripVertical, MousePointer2 } from 'lucide-react';

export default function FloatingTool() {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: 'floating-tool',
    data: { label: 'New Element' },
  });

  return (
    <div
      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-white border rounded-xl shadow-lg cursor-grab hover:bg-gray-50 transition">
        <MousePointer2 className="w-4 h-4 mr-2 text-gray-600" />
        {/* Ajouter la main */}
        <GripVertical className="w-4 h-4 ml-2 text-gray-500" />
      </div>
    </div>
  );
}
