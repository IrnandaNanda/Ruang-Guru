import Title from "./components/Title";
import Button from "./components/Button"
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
        <Footer/>
      </div>
    </>
  );
}

export default App;
