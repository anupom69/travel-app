import Image from "next/image"

interface ButtonProps {
    type: "button" | "submit",
    title: string,
    icon?: string,
    varient?: string
}
export default function Button({type, title, icon, varient="btn_dark_green"}: ButtonProps) {
  return (
    <button className={`flexCenter gap-3 rounded-full border ${varient}`} type={type}>
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}
