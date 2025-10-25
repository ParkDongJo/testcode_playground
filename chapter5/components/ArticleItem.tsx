export type Props = {
  title: string;
  content: string;
}
export function ArticleItem({ title, content }: Props) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  )
}