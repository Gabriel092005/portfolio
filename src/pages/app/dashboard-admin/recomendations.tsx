import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import MachadoImg from '@/assets/1753191794327.jpg'
import FelisbertoImg from '@/assets/1753191840962.jpg'
import JoaquimImg from '@/assets/1753271624231.jpg'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Professional {
  name: string
  role: string
  description: string
  image?: string
}

const professionals: Professional[] = [
  {
    name: "António Machado",
    role: "Backend Developer | NestJS, PostgreSQL",
    description: "Especialista em arquitetura de APIs e microsserviços escaláveis.",
    image: MachadoImg,
  },
  {
    name: "Felisberto Alberto",
    role: "FullStack Developer | JAVA, NodeJS & ReactJS ",
    description: "Cria projectos completos desde o frontend até o backend.",
    image: FelisbertoImg
  },
  {
    name: "Joaquim Claúdio",
    role: " .Net  | c# , ReactJs",
    description: "Cria Aplicações web fullstack na IZERTIS .",
    image: JoaquimImg
  },
  {
    name: "Felix Sanjala",
    role: "Frontend Developer | Next.Js , ReactJs, NodeJs",
    description: "Cria interfaces elegantes e responsivas.",
    image: "",
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
