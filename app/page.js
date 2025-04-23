import Home from "./(routes)/home/page"
export default function Index() {
  return (
    <main className="min-h-screen px-6 py-20 sm:px-20 sm:py-32 flex flex-col items-center justify-center text-center">
      {/* <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#e37d7f]">
        Bienvenid@ a Estudio Creativo
      </h1>
      <p className="text-lg sm:text-xl max-w-xl text-[#fbe5e1]">
        Somos un estudio dedicado al diseño y desarrollo de experiencias digitales únicas.
      </p> */}
      <Home />
    </main>
  )
}
