import { fireEvent, getAllByLabelText, getByText, render, screen, waitFor, within } from '@testing-library/react';
import user from '@testing-library/user-event'
import App from './App';

test('renders form propely', () => {
  const { getByTestId, getByLabelText, getByText} = render(<App/>);

  const  FirstNameLabel = getByText(/First Name:/i);
  const  LastNameLabel = getByText(/Last Name:/i);

  expect(FirstNameLabel).toBeInTheDocument();
  expect(LastNameLabel).toBeInTheDocument();
  expect(getByTestId("submit-new-employee")).toBeTruthy

  const input = getByLabelText(/First Name/i);
  expect(input).toHaveAttribute('type', 'text');
})

describe("Submit Button", () => {
  describe("With invalidate filds", () => {
    it("does not trigger the submit function", () => {
      const submitInformation = jest.fn();
      const {getByTestId} = render(<App submitInformation={submitInformation}/>);
      fireEvent.click(getByTestId('submit-new-employee'));
      expect(submitInformation).not.toHaveBeenCalled;
    })
  })
})

describe('Form', () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    render(<App onSubmit={onSubmit}/>)
  })

  it('onSubmit is called when all fields pass validation', () => {
    const dropdown = screen.getByRole('combobox', {
      name: /country:/i
    })
    // user.selectOptions(dropdown, within(dropdown.getByRole('option', {name: "Brazil"})));
    user.type(getFirstName(), "FistName");
    user.type(getLastName(), "LastName");
    user.type(getDataofBirth(), "textbox");
    user.type(getHolidayAllowance(), "spinbutton");

    user.click(screen.getByRole('button', {name: /Submit/i}));

    waitFor(()=> {
      expect(onSubmit).toHaveBeenCalled(1)
    })
  })
}) 

const getFirstName = () => {
  return screen.getByRole('textbox', {
    name:/First Name/i
  });
}

const getLastName = () => {
  return screen.getByRole('textbox', {
    name:/Last Name/i
  });
}

const getDataofBirth = () => {
  return screen.getByLabelText(/data of birth:/i);
}

const getHolidayAllowance  = () => {
  return screen.getByRole('spinbutton', {
    name:/Holiday Allowance/i
  });
}