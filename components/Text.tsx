import styles from "../styles/Text.module.css";

export const Text = ({ text }: { text: any[] }) => {
  if (!text) {
    return null;
  }
  return (
    <>
      {text.map((value, index) => {
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = value;
        return (
          <div
            key={index}
            className={[
              styles.text,
              bold ? styles.bold : "",
              code ? styles.code : "",
              italic ? styles.italic : "",
              strikethrough ? styles.strikethrough : "",
              underline ? styles.underline : "",
            ].join(" ")}
            style={color !== "default" ? { color } : {}}
          >
            {text.link ? (
              <a href={text.link.url}>{text.content}</a>
            ) : (
              text.content
            )}
          </div>
        );
      })}
    </>
  );
};
