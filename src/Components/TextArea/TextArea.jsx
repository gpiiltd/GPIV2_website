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
        className=" p-2 mb-2 border-b-2 border-2 text-black placeholder:text-black w-full outline-none lg:mb-11"
      >

      </textarea>
    </div>
  );
};

export default TextArea;
