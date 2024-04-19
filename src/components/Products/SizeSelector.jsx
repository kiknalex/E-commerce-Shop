import ButtonSize from "../Misc/ButtonSize";

const SizeSelector = ({ handleSizeClick, isSizeActive }) => {
  return (
    <div className="filter-sizes">
      <h3>Size</h3>
      <ul className="sizes-list">
        <li>
          <ButtonSize
            className={`btn-size text--gray ${isSizeActive("small")}`}
            onClick={() => handleSizeClick("small")}
          >
            Small
          </ButtonSize>
        </li>
        <li>
          <ButtonSize
            className={`btn-size text--gray ${isSizeActive("medium")}`}
            onClick={() => handleSizeClick("medium")}
          >
            Medium
          </ButtonSize>
        </li>
        <li>
          <ButtonSize
            className={`btn-size text--gray ${isSizeActive("big")}`}
            onClick={() => handleSizeClick("big")}
          >
            Big
          </ButtonSize>
        </li>
      </ul>
    </div>
  );
};

export default SizeSelector;
