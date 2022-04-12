import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
 expect(screen.getByText(/Pokemon API React/i)).toBeInTheDocument();
  
});

test.todo(
  'should render a button, checks for href attribute'
)
test ('renders correctly', () => {
    const pokemonAll  = [{id: 1}]
  render(<App allPokemons={pokemonAll}/>)
})
  
/*test("Click", () => {
    const {div} = render(<App />);

    const button = getByTestId(div, 'btn-pokemon');
    fireEvent.click(button);
});*/
test('Click', () => {
    render(<App />);
 
    const btn = screen.getByTestId("btn-poke");
    fireEvent.click(btn);
 
  
  });