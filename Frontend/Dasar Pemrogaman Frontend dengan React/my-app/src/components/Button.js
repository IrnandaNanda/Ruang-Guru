function Button(Props) {

  // Destruciring 
  const {name = 'Button Menggunakan Default Props'} = Props

  return (
    <>
      <button id="button1" onClick={() => alert("Button Clicked")}>
        {name}
      </button>
    </>
  );
}

export default Button
