'use client';

import Builder from '../components/newProject/Builder';
import Header from '../components/newProject/DashboardHeader';

export default function BuilderPage() {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <Header />
      </header>

      {/* Espace entre le header et le contenu principal */}
      <main className="mt-20">
        <Builder />
      </main>
    </div>
  );
}



