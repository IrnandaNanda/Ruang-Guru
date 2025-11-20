import Title from "./components/Title";
import {Button, CustomButton}  from "./components/Button"
import { Footer, Paragraph, Student } from "./components/Paragraph";

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
          <CustomButton textButton='Button menggunakan Props Children'/>
        </div>
        <Student/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
