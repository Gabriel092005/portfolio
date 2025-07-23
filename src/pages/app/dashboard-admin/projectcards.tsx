import { motion } from "framer-motion"
import { Eye } from "lucide-react"

export function ProjectCard({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: true }}
      className=" rounded-xl shadow-md overflow-hidden group bg-white dark:bg-zinc-900"
    >
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-zinc-800 dark:text-white">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-2 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-xs transition"
        >
          <Eye className="w-4 h-4" />
          Ver Projeto
        </motion.button>
      </div>

      {/* Overlay animado opcional */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-medium">
        Clique para visualizar
      </div>
    </motion.div>
  )
}
