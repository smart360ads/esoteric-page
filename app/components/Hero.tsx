import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center text-center px-4">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}
      />
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Descubre los Secretos del Universo</h1>
        <p className="text-lg md:text-xl mb-8">Explora el mundo de lo oculto y desbloquea tu potencial espiritual</p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full md:w-auto">
          Comienza Tu Viaje
        </Button>
      </div>
    </section>
  )
}

