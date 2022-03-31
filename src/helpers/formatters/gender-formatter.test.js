import { setGenderFormat } from './gender-formatter';

describe('gender formatter testing', () => {
  it('should return a div', () => {
    const result = setGenderFormat();

    expect(result.type).toBe('div');
  });

  it('should return a div with male modificator and key=2', () => {
    const result = setGenderFormat("Male", 2);

    expect(result).toStrictEqual(<div className="family-app__gender-highlight family-app__gender-highlight_male" key="2">{"Male"}</div>);
  });

  it('should return a div with agender modificator and key=100', () => {
    const result = setGenderFormat("Agender", 100);

    expect(result).toStrictEqual(<div className="family-app__gender-highlight family-app__gender-highlight_agender" key="100">{"Agender"}</div>);
  });

  it('should return a div without key and modificator', () => {
    const result = setGenderFormat();

    expect(result).toStrictEqual(<div className="family-app__gender-highlight">{""}</div>);
  });
});
