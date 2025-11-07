'use client'
import { useState } from 'react'

export default function Sidebar({ title }: { title: string }) {
  return (
    <aside className="w-80 bg-gray-300 border-r border-gray-400 p-4 overflow-y-auto min-h-screen">
      <div className="flex items-center gap-3 mb-6">
        <button className="text-xl">←</button>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>

      {title === 'Hero' && (
        <div className="space-y-4">
          <div className="bg-gray-200 rounded-lg p-4">
            <h2 className="font-bold text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit!</h2>
            <p className="text-xs text-gray-700 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis elit tellus. Nullam tristique ex quis</p>
            <div className="flex gap-2">
              <button className="bg-black text-white px-3 py-1 text-xs rounded">Button</button>
              <button className="border border-black px-3 py-1 text-xs rounded">Button</button>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg p-4 flex gap-3">
            <div className="flex-1">
              <h3 className="font-bold text-sm mb-2">Lorem ipsum dolor sit amet, consectetur!</h3>
              <p className="text-xs text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex gap-2">
                <button className="bg-black text-white px-2 py-1 text-xs rounded">Button</button>
                <button className="border border-black px-2 py-1 text-xs rounded">Button</button>
              </div>
            </div>
            <div className="w-16 h-16 bg-gray-400 rounded flex-shrink-0"></div>
          </div>

          <div className="bg-gray-200 rounded-lg p-4 text-center">
            <h3 className="font-bold text-sm mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit!</h3>
            <div className="flex justify-center gap-3">
              <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
              <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
              <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          <div className="bg-gray-400 rounded-lg p-4 text-white">
            <h3 className="font-bold text-sm mb-2">Lorem ipsum dolor sit amet, consectetur!</h3>
            <p className="text-xs mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex gap-2">
              <button className="bg-black text-white px-3 py-1 text-xs rounded">Button</button>
              <button className="border border-white text-white px-3 py-1 text-xs rounded">Button</button>
            </div>
          </div>
        </div>
      )}

      {title === 'About' && (
        <div className="space-y-4">
          <div className="bg-gray-200 rounded-lg p-4 text-center">
            <h2 className="font-bold mb-2">Lorem ipsum</h2>
            <p className="text-xs text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis elit tellus. Nullam tristique ex quis quam. Lorem id ipsum blandit sagittis. Nullam ut turpis bibendum, auctor erat eget, feugiat leo.</p>
          </div>

          <div className="bg-gray-200 rounded-lg p-4 flex gap-3">
            <div className="flex-1">
              <h3 className="font-bold text-sm mb-2">Lorem ipsum</h3>
              <p className="text-xs text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis elit tellus. Nullam tristique ex quis nisl molestie, at hendrerit neque feugiat.</p>
            </div>
            <div className="w-16 h-16 bg-gray-400 rounded flex-shrink-0"></div>
          </div>

          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">Lorem ipsum</h3>
            <p className="text-xs text-gray-700 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis elit tellus.</p>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gray-400 rounded-full flex-shrink-0"></div>
                  <span className="text-xs">Lorem ipsum sit</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-400 rounded p-2 text-center">
                <div className="w-full h-12 bg-gray-400 rounded mb-2 flex items-center justify-center">👤</div>
                <p className="text-xs text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {title === 'Contact' && (
        <div className="space-y-4">
          <div className="bg-gray-200 rounded-lg p-4">
            <div className="grid grid-cols-3 gap-3 text-xs">
              {['Support', 'Support', 'Support'].map((col, i) => (
                <div key={i}>
                  <h3 className="font-bold mb-2">{col}</h3>
                  <div className="space-y-1">
                    <p>Getting started</p>
                    <p>Help center</p>
                    <p>Server status</p>
                    <p>Report a bug</p>
                    <p>Chat support</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-3">Contact Us</h3>
            <div className="flex gap-2">
              {['f', '𝕏', '📷', 'in', '▶'].map((icon, i) => (
                <button key={i} className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center text-xs">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-3">Contact Us</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span>f</span>
                <span>Facebook</span>
              </div>
              <div className="flex items-center gap-2">
                <span>𝕏</span>
                <span>Twitter</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📷</span>
                <span>Instagram</span>
              </div>
              <div className="flex items-center gap-2">
                <span>in</span>
                <span>LinkedIn</span>
              </div>
              <div className="flex items-center gap-2">
                <span>▶</span>
                <span>YouTube</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-300 rounded-lg p-4">
            <p className="text-xs text-gray-700 mb-3">Lorem ipsum consectetur adipiscing elit. Curabitur quis elit tellus. Nullam</p>
            <button className="bg-black text-white px-3 py-2 text-xs rounded flex items-center gap-1 mb-3">
              ▶ Send Message
            </button>
            <div className="flex gap-2">
              {['f', '𝕏', '📷', 'in'].map((icon, i) => (
                <button key={i} className="w-6 h-6 bg-white rounded flex items-center justify-center text-xs">
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}