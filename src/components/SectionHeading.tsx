type Props = { index: string; kicker: string; title: string; description?: string }
export default function SectionHeading({ index, kicker, title, description }: Props) {
  return <div className="section-heading">
    <div className="section-index">{index} <span> / </span> {kicker}</div>
    <div><h2>{title}</h2>{description && <p>{description}</p>}</div>
  </div>
}