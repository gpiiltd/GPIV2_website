const TextArea = (props) => {
  const { handleChange, name, value, placeholder } = props;
  return (
    <div>
      <textarea
        onChange={handleChange}
        name={name}
        rows="4"
        cols="55"
        value={value}
        placeholder={placeholder}
        className=" p-2 mb-11 border-b-2 border-2 placeholder:text-black w-full outline-none"
      ></textarea>
    </div>
  );
};

export default TextArea;
