export default function Layouts({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="bg-cyan-500 w-1/5">Aside</aside>
      <div>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </div>
    </div>
  );
}
