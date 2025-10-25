type Props = {
  name: string;
  onSubmit: (data: React.FormEvent<HTMLFormElement>) => void;
}

export function Form({ name, onSubmit }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>계정 정보</h2>
      <input type="text" name={name} />
      <button type="submit">수정</button>
    </form>
  )
}