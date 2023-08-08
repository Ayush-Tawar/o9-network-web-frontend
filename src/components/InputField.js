const InputField = (props) => {
  const { type, className, placeholder, options, error, ...rest } = props;

  const errorIndicator = (
    <div className="text-xs md:text-base font-medium mt-[1px] text-red-400 min-h-[18px]">
      {error ? error : ""}
    </div>
  );
  let commonClassName = `px-2 py-[1px] w-[100%] ${
    error
      ? "border-red-400 focus:border-white"
      : "border-white border-b-[0.5px] focus:border-emerald-400"
  }  outline-none border-b-2 bg-transparent`;
  if (type === "select") {
    return (
      <div className="mt-2">
        <select className={`select ${commonClassName}`} {...rest}>
          <option value="">Select</option>
          {options.map((opt) => {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          })}
        </select>
        {errorIndicator}
      </div>
    );
  }

  if (type === "textArea") {
    return (
      <div className="mt-2 md:col-span-2">
        <textarea
          placeholder={placeholder}
          rows={1}
          className={`min-h-[30px] md:min-h-[40px] ${commonClassName} `}
          {...rest}
        />
        {errorIndicator}
      </div>
    );
  }

  if (type === "date") {
    return (
      <div className="mt-2">
        <input
          type="date"
          placeholder={placeholder}
          className={`relative ${commonClassName}`}
          {...rest}
        />
        {errorIndicator}
      </div>
    );
  }
  if (type === "tel") {
    return (
      <div className={`mt-2 ${className}`}>
        <input
          type={type}
          onInput={(a) =>
            (a.target.value = a.target.value
              .replace(/[^0-9.]/g, "")
              .replace(/(\..*)\./g, "$1"))
          }
          placeholder={placeholder}
          className={`${commonClassName}`}
          {...rest}
        />
        {errorIndicator}
      </div>
    );
  }
  return (
    <div className={`mt-2 ${className} `}>
      <input
        type={type}
        placeholder={placeholder}
        className={`${commonClassName}`}
        {...rest}
      />
      {errorIndicator}
    </div>
  );
};

export default InputField;
