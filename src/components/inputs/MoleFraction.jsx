import React from "react";

function MoleFraction({ params, setParams }) {
  return (
    <div className="input">
      <label htmlFor="mole">Mole Fraction</label>
      <input
        id="mole"
        type="number"
        defaultValue={params.species[0].mole_fraction}
        onClick={(e) => setParams({ ...params, mole_fraction: e.target.value })}
      ></input>
    </div>
  );
}

export default MoleFraction;
