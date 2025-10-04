const Button = ({ BtnName, BtnColor, textColor, BtnHandle, font }) => {
  return (
    <button
      onClick={BtnHandle}
      style={{ backgroundColor: BtnColor, color: textColor, fontSize: font}}
      className="px-4 py-2 m-1 rounded-lg shadow "
    >
      {BtnName}
    </button>
  )
}

export default Button