import { useState, useEffect } from "react";
import NumberFormat from "react-number-format";

const Calculator = function () {
  const [iniState, setIniState] = useState("");
  const [curState, setCurState] = useState("");
  const [userInput, setUserInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(false);

  const handleNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (result) {
      setIniState("");
    }

    curState
      ? setCurState((prev) => prev + e.target.innerText)
      : setCurState(e.target.innerText);
    setResult(false);
  };

  useEffect(() => {
    setUserInput(curState);
  }, [curState]);

  useEffect(() => {
    setUserInput("0");
  }, []);
  const operatorType = (e) => {
    setResult(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (iniState !== "") {
      equals();
    } else {
      setIniState(curState);
      setCurState("");
    }
  };

  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setResult(true);
    }
    let calc;
    switch (operator) {
      case "/":
        calc = String(parseFloat(iniState) / parseFloat(curState));
        break;
      case "X":
        calc = String(parseFloat(iniState) * parseFloat(curState));
        break;
      case "-":
        calc = String(parseFloat(iniState) - parseFloat(curState));
        break;
      case "+":
        calc = String(parseFloat(iniState) + parseFloat(curState));
        break;
      default:
        return;
    }
    setUserInput("");
    setIniState(calc);
    setCurState("");
  };

  const del = () => {
    setCurState(curState.substring(0, curState.length - 1));
  };

  const percent = () => {
    iniState
      ? setCurState(String((parseFloat(curState) / 100) * iniState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  const reset = () => {
    setIniState("");
    setCurState("");
    setUserInput("0");
  };

  return (
    <div>
      <table className="calculator">
        <tbody>
          <tr>
            <td className="display-box" colSpan="4">
              {userInput !== "" || userInput === "0" ? (
                <NumberFormat
                  value={userInput}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              ) : (
                <NumberFormat
                  value={iniState}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              )}
            </td>
          </tr>
          <tr>
            <td>
              <button className="calc-button" onClick={reset}>
                C
              </button>
            </td>
            <td>
              <button className="calc-button" onClick={del}>
                Del
              </button>
            </td>
            <td>
              <button className="calc-button" onClick={percent}>
                %
              </button>
            </td>
            <td>
              <button className="calc-button" onClick={operatorType}>
                /
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="calc-button" onClick={handleNum}>
                7
              </button>
            </td>
            <td>
              <button className="calc-button" onClick={handleNum}>
                8
              </button>
            </td>
            <td>
              <button className="calc-button" onClick={handleNum}>
                9
              </button>
            </td>
            <td>
              <button className="calc-button" onClick={operatorType}>
                X
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="calc-button" onClick={handleNum}>
                4
              </button>
            </td>
            <td>
              <button className="calc-button" onClick={handleNum}>
                5
              </button>
            </td>
            <td>
              <button className="calc-button" onClick={handleNum}>
                6
              </button>
            </td>
            <td>
              <button className="calc-button" onClick={operatorType}>
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="calc-button" onClick={handleNum}>
                1
              </button>
            </td>
            <td>
              <button className="calc-button" onClick={handleNum}>
                2
              </button>
            </td>
            <td>
              <button className="calc-button" onClick={handleNum}>
                3
              </button>
            </td>
            <td>
              <button className="calc-button" onClick={operatorType}>
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="calc-button" onClick={handleNum}>
                .
              </button>
            </td>
            <td>
              <button className="calc-button" onClick={handleNum}>
                0
              </button>
            </td>
            <td>
              <button className="calc-button" onClick={equals}>
                =
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
