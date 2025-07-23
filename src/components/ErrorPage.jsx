import { Link } from "react-router";
import errorIcon from "../assets/rocket-icon.png";

const ErrorPage = ({
  message = "Sorry, this page is not avoilable!"
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen space-y-5">
      <img src={errorIcon} alt="" />
      <h1 className="text-4xl font-bold to-grey-700">{message}</h1>
      <p className="sm:w-3/5 mx-auto">
        A link adds a parameter to the URL and you only see the modal when the
        URL has that parameter When modal is closed, the page will scroll to the
        top because of the anchor link. Anchor links might not work well on some
        SPA frameworks. If there are problems, use the other methods.
      </p>
      <Link to="/" className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition">Go to Home</Link>
    </div>
  );
};

export default ErrorPage;
