export default function ToastInput({
  inputRef,
  id,
  label,
  defaultValue,
  type = "text",
}) {
  return (
    <div className="flex flex-col gap-y-1.5">
      <label className="text-sm" htmlFor={label}>
        {label}
      </label>
      <input
        ref={inputRef}
        className="border rounded-md w-80 px-4 py-2.5"
        id={id}
        defaultValue={defaultValue}
        type={type}
      />
    </div>
  );
}
