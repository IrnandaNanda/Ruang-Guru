function CustomButton(Props) {
  return <button>{Props.textButton}</button>;
}

function Button(Props) {
  // Destruciring
  const { name = "Button Menggunakan Default Props" } = Props;

  return (
    <>
      <button id="button1" onClick={() => alert("Button Clicked")}>
        {name}
        <div>{Props.children}</div>
      </button>
    </>
  );
}

export { Button, CustomButton };
