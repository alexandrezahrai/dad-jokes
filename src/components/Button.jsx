/* eslint-disable react/prop-types */
export default function Button({
  style = "button-primary",
  onClick,
  label,
  name,
}) {
  return (
    <button className={`${style} whitespace-nowrap`} onClick={onClick}>
      <span className="sr-only">{name}</span>
      {label}
    </button>
  );
}
