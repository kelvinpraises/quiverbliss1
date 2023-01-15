/**
 * Wraps a promise so it can be used with React Suspense
 * @param {Promise} promise The promise to process
 * @returns {Object} A response object compatible with Suspense
 */
export default function wrapPromise(promise: Promise<any>) {
  let status = "pending";
  let result: any;
  let suspender = promise.then(
    (r: any) => {
      status = "success";
      result = r;
    },
    (e: any) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}