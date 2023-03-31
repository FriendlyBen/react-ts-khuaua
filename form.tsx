import * as React from 'react';

const Form = () => {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState(0);
  const [color, setColor] = React.useState('Yellow');
  const [list, setList] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const next_list = [...list];
    next_list.push({
      name,
      age,
      color,
    });

    setList(next_list);
    clear();
  };

  const clear = () => {
    setName('');
    setAge(0);
    setColor('Yellow');
  };

  console.log(list);

  return (
    <div>
      <div>
        <h2>Name</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <h2>Age</h2>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
      </div>
      <div>
        <h2>Favourite Color</h2>
        <input
          type="text"
          placeholder="Enter your favourite color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <select>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
        </select>
      </div>
      <div>
        <button className="Butt" type="submit" onClick={handleSubmit}>
          <b>Submit</b>
        </button>
      </div>
      <button type="reset" className="Butt">
        <b>Clear</b>
      </button>
    </div>
  );
};

export default Form;
