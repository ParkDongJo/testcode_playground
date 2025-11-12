import { useId, useState } from "react";
import { ArticleList } from "./ArticleList";

type Props = {
  name: string;
  onSubmit: (data: React.FormEvent<HTMLFormElement>) => void;
}

export function Form({ name, onSubmit }: Props) {
  const headingId = useId();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  }
  return (
    <form onSubmit={handleSubmit} aria-labelledby={headingId}>
      <h2 id={headingId}>계정 정보</h2>
      <input type="text" name={name} />
      <button type="submit">수정</button>
    </form>
  )
}