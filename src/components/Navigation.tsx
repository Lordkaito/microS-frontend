const Navigation = () => {
  return (
    <nav className="flex-grow bg-slate-400 sm:flex-grow-0 sm:w-60">
      <h2>
        Navigation
      </h2>
      <ul>
        <li>
          <a href="#" className="text-red-700">Home</a>
        </li>
        <li>
          <a href="#" className="text-red-700">About</a>
        </li>
        <li>
          <a href="#" className="text-red-700">Something</a>
        </li>
        <li>
          <a href="#" className="text-red-700">Another</a>
        </li>
        <li>
          <a href="#" className="text-red-700">Quit</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;