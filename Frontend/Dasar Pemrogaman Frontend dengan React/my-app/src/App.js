import Title from "./components/Title";
import {Button, CustomButton}  from "./components/Button"
import { Footer, Paragraph } from "./components/Paragraph";

function App() {
  return (
    <>
      <div>
        <Title/>
        <Paragraph paragraph="Paragraph 3 yang menggunakan Props"/>
        <Button name='Button menggunakan component & Props'/>
        <br/>
        <Button/>
        <div>
          <CustomButton textButton='Edit'/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
