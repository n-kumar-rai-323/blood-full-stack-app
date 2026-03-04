export interface ICardComponentProps{
    data:string,
    className?:string
}

export const  CardComponent =(props:Readonly<ICardComponentProps>)=>{
    return(
        <>
        <div className="flex w-full bg-slate-800 text-white">
            {props.data}
        </div>
        </>
    )
}