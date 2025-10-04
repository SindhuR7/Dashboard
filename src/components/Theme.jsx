

const Theme = ({setTheme}) => {

  return (
    <>
    <h1>Theme Picker</h1>
    <select onChange={(e) => setTheme(e.target.value)}>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Yellow">Yellow</option>
        <option value="Blue">Blue</option>
        <option value="Orange">Orange</option>
        <option value="Black">Black</option>
    </select>
    </>
  )
}

export default Theme