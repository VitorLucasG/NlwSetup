import Fastify from "fastify"
import cors from '@fastify/cors'
import { appRoutes } from "./routes"

const app = Fastify()
/** 
 * Método HTTP : Get(Buscar), Post(Crias), Put(Atualizar), Patch(Atualizar informação especifica), Delete -explicativo
*/

app.register(cors)
app.register(appRoutes)


app.listen({
  port: 3333,
  host:'0.0.0.0'
}).then((response) => {
  console.log('HTTP server running on ' + response)
})