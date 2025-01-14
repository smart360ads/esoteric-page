import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TrelloIcon as Tarot, SnowflakeIcon as Crystal, Sparkles } from 'lucide-react'

const services = [
  {
    title: "Lectura de Tarot",
    description: "Descubre tu futuro y obtén orientación con nuestras expertas lecturas de tarot.",
    icon: Tarot
  },
  {
    title: "Sanación con Cristales",
    description: "Equilibra tu energía y mejora tu bienestar con nuestras terapias de cristales.",
    icon: Crystal
  },
  {
    title: "Astrología Personalizada",
    description: "Comprende tu destino y potencial con cartas astrales detalladas.",
    icon: Sparkles
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Nuestros Servicios Esotéricos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-700 border-purple-500">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <service.icon className="h-12 w-12 text-purple-500" />
                </div>
                <CardTitle className="text-center">{service.title}</CardTitle>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

