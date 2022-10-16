const OutputRow = (props) => {
  return (
    <tr>
      <td colSpan="4">
        <input
          className="display-box"
          type="text"
          id="result"
          value="0"
          readOnly
        />
      </td>
    </tr>
  );
};

export default OutputRow;
