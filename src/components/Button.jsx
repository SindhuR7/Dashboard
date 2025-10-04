const Button = ({ BtnName, BtnColor, textColor, BtnHandle }) => {
  return (
    <button
      onClick={BtnHandle}
      style={{ backgroundColor: BtnColor, color: textColor }}
      className="px-8 py-3 m-3 rounded-lg shadow"
    >
      {BtnName}
    </button>
  )
}

export default Button