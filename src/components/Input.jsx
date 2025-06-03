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
    <label className="block text-sm font-semibold mb-1 text-gray-700 ">
      {label}
    </label>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 outline-none text-gray-800 py-2 border-[2px] border-gray-300 rounded-lg"
      />
      {icon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400">
          {icon}
        </div>
      )}
    </div>
  </div>
);

export default Input;
