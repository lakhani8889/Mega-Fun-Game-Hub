
export default function App() {
  const categories = [
    "Action",
    "Adventure",
    "Racing",
    "Puzzle",
    "Sports",
    "Arcade",
    "Shooting",
    "Multiplayer",
    "Strategy",
    "Kids",
  ];

  const games = Array.from({ length: 160 }, (_, i) => ({
    id: i + 1,
    title: `Super Game ${i + 1}`,
    category: categories[i % categories.length],
    players: Math.floor(Math.random() * 5000) + 100,
    image: `https://picsum.photos/400/250?random=${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/70 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Mega Fun Game Hub
          </h1>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-cyan-500/10 to-yellow-500/20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-6xl font-black leading-tight mb-6">
            150+ Amazing Games 🎮
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Action, Racing, Adventure, Puzzle, Multiplayer ane ghani badhi mast games ekaj website par.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="group rounded-[30px] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 hover:border-pink-500 transition-all duration-300 shadow-2xl hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full">
                    {game.category}
                  </span>

                  <span className="text-sm text-gray-400">
                    👥 {game.players}
                  </span>
                </div>

                <h4 className="text-2xl font-bold mb-4 line-clamp-1">
                  {game.title}
                </h4>

                <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 font-bold hover:opacity-90 transition">
                  Play Game
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
