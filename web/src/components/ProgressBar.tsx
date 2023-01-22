interface ProgressBarProps {
  progess : number
}

export function ProgressBar(props : ProgressBarProps) {
  const progrssStyles = {
    width :`${props.progess}%`
  }
  
  return(
    <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
    <div 
      role='progressbar'
      aria-label = "Progresso de hábitos competados nesse dia"
      aria-valuenow={props.progess}
      className='h-3 rounded-xl bg-violet-600 transition-all'
      style={{ width :`${props.progess}%`}}
    />
    </div>
  )
}