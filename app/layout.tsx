<div className="flex flex-col min-h-screen">
  <header className="bg-gray-800 text-white p-4">
    <h1 className="text-lg font-bold">My Application</h1>
  </header>
  <main className="flex-grow">
    <div className="container mx-auto p-4">
      {children}
    </div>
  </main>
  <footer className="bg-gray-800 text-white p-4 text-center">
    <p>&copy; 2023 My Application. All rights reserved.</p>
  </footer>
</div>
