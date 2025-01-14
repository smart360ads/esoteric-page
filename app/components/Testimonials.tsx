import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "María L.",
    avatar: "/placeholder.svg?height=100&width=100",
    content: "La lectura de tarot cambió mi vida. Ahora tengo una nueva perspectiva y claridad en mis decisiones."
  },
  {
    name: "Carlos R.",
    avatar: "/placeholder.svg?height=100&width=100",
    content: "La sanación con cristales me ayudó a superar un momento difícil. Me siento renovado y lleno de energía."
  },
  {
    name: "Ana S.",
    avatar: "/placeholder.svg?height=100&width=100",
    content: "Mi carta astral personalizada me dio insights increíbles sobre mi carrera y relaciones. ¡Altamente recomendado!"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-purple-500">
              <CardHeader className="flex flex-col items-center">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent>
                <p className="italic text-center">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter>
                <p className="font-semibold text-center w-full">{testimonial.name}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

