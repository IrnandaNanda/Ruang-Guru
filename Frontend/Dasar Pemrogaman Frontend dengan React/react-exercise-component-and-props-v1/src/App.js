const App = () => {
  return (
    <>
      <div>
        <Student name={"Djarot Purnomo"} isStudent={true} />
      </div>
      <div>
        <Student name={"Agusman Laia"} isStudent={false} />
      </div>
    </>
  );
};

function Student({ name, isStudent }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>First name: {name.split(" ")[0]}</p>
      <p>Status: {isStudent ? "Student" : "Not student"}</p>
    </>
  );
}

export default App;
export { Student };
