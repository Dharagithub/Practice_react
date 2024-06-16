function App1(){
    var name="Aara"
  return(
    <div>
      <h1>Firstname</h1>
      <App2 name={name}></App2>

    </div>
  )
}

function App2(sname){
  return(
    <div>
        <h1>Secondname</h1>
    <App3 name={sname.name}></App3>
    </div>
  )
}

function App3(tname){
    return(
        <div>
            <h1>Thirdname</h1>
        <h2>My name is {tname.name}</h2>
        </div>
    )
}

export default App1;
