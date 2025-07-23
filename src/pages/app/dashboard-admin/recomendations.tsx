import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Professional {
  name: string
  role: string
  description: string
  image?: string
}

const professionals: Professional[] = [
  {
    name: "Carlos Silva",
    role: "Backend Developer | NestJS, PostgreSQL",
    description: "Especialista em arquitetura de APIs e microsserviços escaláveis.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Juliana Gomes",
    role: "UI/UX Designer | Figma, Adobe XD",
    description: "Cria interfaces intuitivas e centradas no usuário.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "André Fernando",
    role: "Mobile Developer | React Native, Flutter",
    description: "Apps performáticos com foco em experiência mobile.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Tatiana Rocha",
    role: "QA Engineer | Cypress, Playwright",
    description: "Garantia de qualidade e automação de testes ponta-a-ponta.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
]

export function RecommendedProfessionals() {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-6 text-center">
        Recomendações Profissionais 
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {professionals.map((pro, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-4 bg-white dark:bg-zinc-900 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center text-center gap-3">
              <Avatar className="w-16 h-16">
                <AvatarImage src={pro.image} alt={pro.name} />
                <AvatarFallback>{pro.name[0]}</AvatarFallback>
              </Avatar>

              <div>
                <h3 className="text-sm font-bold text-zinc-800 dark:text-white">{pro.name}</h3>
                <p className="text-xs text-muted-foreground">{pro.role}</p>
              </div>

              <p className="text-xs text-muted-foreground mt-2">{pro.description}</p>

              <Button variant="outline" size="sm" className="mt-2 text-xs">
                Ver Perfil
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
