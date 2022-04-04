import { setGenderFormat } from './gender-formatter';
import { render, screen } from '@testing-library/react';

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

describe('testing formatter returning as a react component', () => {
  it('should have an element class', () => {
    const utils = render(setGenderFormat());

    expect(utils.container.firstChild).toHaveClass("family-app__gender-highlight");
  });

  it('should contain the same text as the first argument', () => {
    render(setGenderFormat("Bigender"));
    // screen.debug();

    expect(screen.getByText("Bigender")).toBeInTheDocument();    // explicit assertion
    screen.getByText("Bigender");   // implicit assertion with getBy
  });

  it('should have an element class', () => {
    render(setGenderFormat("Female"));

    expect(screen.getByText("Female")).toHaveClass("family-app__gender-highlight");
  });
});
