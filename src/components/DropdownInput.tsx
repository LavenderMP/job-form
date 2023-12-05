import React, { useState } from 'react';
import Select from 'react-select';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];



const DropdownInput: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={(option) => setSelectedOption(option as Option)}
        options={options}
      />
    </div>
  );
};

export default DropdownInput;
