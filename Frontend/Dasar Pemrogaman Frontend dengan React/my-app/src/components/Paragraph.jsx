// import useState from 'react';
import { useState } from "react";

function Student(){
  const [name, setName] = useState('Ini adalah State');

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("contoh State")}>Change Name</button>
    </div>
  )
}

function Paragraph(props) {
  return (
    <>
      <p>Paragraf 1</p>
      <p>Paragraf 2 from Component</p>
      <p>{props.paragraph}</p>
    </>
  );
}

Paragraph.defaultProps = {
  paragraph: 'Paragraph yang menggunakan default Props'
};

function Footer() {
    return(
        <>
            <h3>Footer from component</h3>
        </>
    )
}

export { Paragraph, Footer, Student }
