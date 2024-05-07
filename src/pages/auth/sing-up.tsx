import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"
import {useForm} from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"

const singUpForm = z.object({
  restaurantName: z.string(),
  menagerName: z.string(),
  phone: z.string(),
  email:z.string().email()

})

type SingUpForm = z.infer<typeof singUpForm>

export function SingUp() {

const navigate = useNavigate()

  const {register, handleSubmit, formState:{isSubmitting}} = useForm<SingUpForm>()


  async function handleSingUp(data: SingUpForm){
    try{
      console.log(data)
      if(data.email === ''){
        throw new Error()
      }
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Restaurante cadastrado com sucesso!',{
        action:{
          label: 'Login',
          onClick: () => navigate('/sing-in')
        }
      })
    }catch{
      toast.error('Credenciais inválidas',{
        action:{
          label: 'Reenviar',
          onClick: () => handleSingUp(data)
        }
      })
    }
    
  }
 
  return (
    <>
      <Helmet title="Cadastro"/>
      <div className="p-8">
      <Button asChild className="absolute right-4 top-8" variant="outline">
          <Link to="/sing-in" >
            Fazer login
          </Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl">Criar conta grátis</h1>
            <p className="text-sm text-muted-foreground">Seja um parceiro e comece suas vendas!</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSingUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input type="text" id="restaurantName" {...register('restaurantName')} />
            </div> 
            <div className="space-y-2">
              <Label htmlFor="menagerName">Seu Nome</Label>
              <Input type="text" id="menagerName" {...register('menagerName')} />
            </div> 
            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input type="tel" id="phone" {...register('phone')} />
            </div> 
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input type="email" id="email" {...register('email')} />
            </div> 
            <Button type="submit" className="w-full" disabled={isSubmitting}>Finalizar cadastro</Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos <a href="" className="underline underline-offset-4"> Termos de serviço </a> e{' '} <a href="" className="underline underline-offset-4">políticas de privacidade</a> .
            </p>
          </form>
        </div>
      </div> 
    </>
)
}
