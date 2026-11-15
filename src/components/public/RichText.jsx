// Prikazuje tekst s **podebljanim** dijelovima.
export default function RichText({ text }) {
  const parts = String(text ?? '').split('**');

  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-foreground">{part}</strong>
        ) : (
          part
        )
      )}
    </>
  );
}