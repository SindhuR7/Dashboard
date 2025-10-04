

const Theme = ({setTheme}) => {

  return (
    <>
    <div className="bg-white p-5  rounded-2xl flex flex-col  items-start h-[150px] w-[270px] shadow-2xl">
    <h1 className="text-2xl font-bold mb-4">Theme Picker</h1>
    <select onChange={(e) => setTheme(e.target.value)} className="border bg-transparent px-2 py-1 text-xl rounded-2xl outline-none">
        <option aria-readonly >--Select any Color--</option>
        <option value="Red">Red</option>
        <option value="Chartreuse">Chartreuse</option>
        <option value="Chocolate">Chocolate</option>
        <option value="Blue">Blue</option>
        <option value="Orange">Orange</option>
        <option value="Purple">Purple</option>
        <option value="Violet">Violet</option>
        <option value="GreenYellow">GreenYellow</option>
    </select>
    </div>
    </>
  )
}

export default Theme