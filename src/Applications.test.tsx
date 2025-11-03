import { render, screen } from "@testing-library/react";
import Applications from "./Applications";
import { getSingleApplicationFixture } from "./__fixtures__/applications.fixture";

test("renders loading state when isLoading is true", () => {
  render(<Applications data={[]} isLoading={true} />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test("renders application items when data is provided", () => {
  const mockData = getSingleApplicationFixture;
  render(<Applications data={mockData} isLoading={false} />);

  screen.logTestingPlaygroundURL();
  const company = screen.getByText(/company/i);
  const companyName = screen.getByText("Qnekt");

  expect(companyName).toBeInTheDocument();
  expect(company).toBeInTheDocument();

  const user = screen.getByText(/name/i);
  const userName = screen.getByText("Miles Espinoza");

  expect(user).toBeInTheDocument();
  expect(userName).toBeInTheDocument();

  const email = screen.getByText(/email/i);
  const emailName = screen.getByText(/milesespinoza@qnekt\.com/i);

  expect(email).toBeInTheDocument();
  expect(emailName).toBeInTheDocument();

  const loan = screen.getByText(/loan amount/i);
  const loanName = screen.getByText(/£37,597/i);

  expect(loan).toBeInTheDocument();
  expect(loanName).toBeInTheDocument();

  const applicationDate = screen.getByText(/application date/i);
  const applicationDateValue = screen.getByText(/10-08-2021/i);

  expect(applicationDate).toBeInTheDocument();
  expect(applicationDateValue).toBeInTheDocument();

  const expiryDate = screen.getByText(/expiry date/i);
  const expiryDateValue = screen.getByText(/02-12-2021/i);

  expect(expiryDate).toBeInTheDocument();
  expect(expiryDateValue).toBeInTheDocument();
});
