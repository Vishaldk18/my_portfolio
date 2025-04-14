export default function ThemeToggle({ darkMode, setDarkMode }) {
    return (
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-4 p-2 bg-blue-500 dark:bg-yellow-400 text-white dark:text-black rounded"
      >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    );
  }