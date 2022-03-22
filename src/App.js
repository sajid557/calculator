import React, { useState, useEffect } from "react";
import "./css/App.css";

function App() {
  const [inputText, setInputText] = useState(" ");
  const [calculate, setCalculate] = useState([]);
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const backHanlder = (e) => {
    // let calc = inputText - e.target.value;
    setInputText((prevState) => prevState);
  };
  const btnHandler = (e) => {
    // let calc = inputText + e.target.value;
    setInputText((prevState) => prevState + e.target.value);
    // setCalculate(e.target.value);
    // console.log(e.target.value);
    // console.log(...calculate, calculate);
  };
  const evalHandler = () => {
    let eql = eval(inputText);
    console.log(eql);
    setInputText(eql);
  };
  const clearHandler = () => {
    setInputText(" ");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="circle"></div>

        <div className="calc-container">
          <div className="calc">
            <div className="input-group d-flex">
              <div className="qual" onClick={evalHandler}>
                <span>=</span>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  value={inputText}
                  id=""
                  onChange={inputHandler}
                />
              </div>
            </div>
            <div className="keyboard d-flex">
              <div className="btn-div">
                <div className="btn-group line-bg d-flex">
                  <div>
                    <input type="button" onClick={clearHandler} value="AC" />
                  </div>
                  <div>
                    <input type="button" onClick={backHanlder} value="<" />
                  </div>
                  <div>
                    <input type="button" onClick={btnHandler} value="%" />
                  </div>
                </div>
                <div className="btn-group d-flex">
                  <div>
                    <input type="button" onClick={btnHandler} value="7" />
                  </div>
                  <div>
                    <input type="button" onClick={btnHandler} value="8" />
                  </div>
                  <div>
                    <input type="button" onClick={btnHandler} value="9" />
                  </div>
                </div>
                <div className="btn-group d-flex">
                  <div>
                    <input type="button" onClick={btnHandler} value="4" />
                  </div>
                  <div>
                    <input type="button" onClick={btnHandler} value="5" />
                  </div>
                  <div>
                    <input type="button" onClick={btnHandler} value="6" />
                  </div>
                </div>
                <div className="btn-group d-flex">
                  <div>
                    <input type="button" onClick={btnHandler} value="3" />
                  </div>
                  <div>
                    <input type="button" onClick={btnHandler} value="2" />
                  </div>
                  <div>
                    <input type="button" onClick={btnHandler} value="1" />
                  </div>
                </div>
                <div className="btn-group d-flex">
                  <div>
                    <input type="button" onClick={btnHandler} value="." />
                  </div>
                  <div>
                    <input type="button" onClick={btnHandler} value="0" />
                  </div>
                  <div>
                    <input type="button" onClick={btnHandler} value="00" />
                  </div>
                </div>
              </div>
              <div className="col-btn-group line-bg">
                <div>
                  <input type="button" onClick={btnHandler} value="/" />
                </div>
                <div>
                  <input type="button" onClick={btnHandler} value="*" />
                </div>
                <div>
                  <input type="button" onClick={btnHandler} value="-" />
                </div>
                <div>
                  <input type="button" onClick={btnHandler} value="+" />
                </div>
                <div className="equalto">
                  <input type="button" onClick={evalHandler} value="=" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
