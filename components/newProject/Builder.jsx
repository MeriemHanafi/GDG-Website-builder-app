'use client';

import { DndContext } from '@dnd-kit/core';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import FloatingTool from './FloatingTool';

export default function BuilderPage() {
  const [canvasItems, setCanvasItems] = useState([]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && over.id === 'canvas') {
      // Ajouter un nouvel élément au canvas
      setCanvasItems((prev) => [...prev, { id: active.id, label: active.data.current.label }]);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex h-screen">
        <Sidebar />
        <Canvas items={canvasItems} />
        <FloatingTool />
      </div>
    </DndContext>
  );
}
