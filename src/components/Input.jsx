const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  icon,
}) => (
  <div className="mb-4 w-full">
    <label className="block text-sm font-semibold mb-1 text-zinc-800">
      {label}
    </label>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-500 rounded-lg"
      />
      {icon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
          {icon}
        </div>
      )}
    </div>
  </div>
);

export default Input;
