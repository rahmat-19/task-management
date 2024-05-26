import { useRouter } from "next/navigation";
import Errors from "../components/errors";

const errorMessages = {
  400: "The server could not understand the request due to invalid syntax.",
  401: "You must be authenticated to access this resource.",
  403: "You do not have the necessary permissions to access this resource.",
  404: "The requested resource could not be found on the server.",
  500: "The server encountered an internal error and could not complete your request.",
  // Add more status codes and messages as needed
};

function Error({ statusCode }) {
  const defaultMessage = statusCode
    ? `An error ${statusCode} occurred on server`
    : "An error occurred on client";
  const message =
    statusCode && errorMessages[statusCode]
      ? errorMessages[statusCode]
      : defaultMessage;

  const route = useRouter();
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            <span className="sr-only">Error</span>
            {statusCode}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But dont worry, {message}
          </p>
          <button
            onClick={() => route.back()}
            className="px-8 py-3 font-semibold rounded bg-violet-600 "
          >
            Back to homepage
          </button>
        </div>
      </div>
    </section>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
