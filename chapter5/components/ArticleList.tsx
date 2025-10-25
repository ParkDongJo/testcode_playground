import { ArticleItem } from "./ArticleItem"
import type { Props as ItemProps } from "./ArticleItem";

type Props = {
  items: ItemProps[];
}

export function ArticleList({ items }: Props) {
  return (
    <div>
      <h2>목록</h2>
      {items.length === 0 ? (
        <p>목록이 없습니다.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <ArticleItem key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>

  )
}