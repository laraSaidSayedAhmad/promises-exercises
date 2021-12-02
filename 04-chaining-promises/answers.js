/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {function} asyncTransformer
 */
function flatMapPromise(promise, asyncTransformer) {
  return new Promise((resolve, reject) => {
    promise
      .then((res) => {
        resolve(asyncTransformer(res));
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise} firstPromise
 * @param {function} slowAsyncProcess
 */

function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess) {
  return firstPromise.then((res) => {
    return Promise.resolve(slowAsyncProcess(res));
  });
}
/**
 *
 * EXERCISE 3
 *
 * @param {function} getUserById
 * @param {function} getOrganizationById
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
  return function getUserByIdWithOrganization(userId) {
    /* IMPLEMENT ME! */
    return getUserById((userId) =>
      getOrganizationById(user.OrganizationId).then(
        (orgObj) => (user.organization = orgObj)
      )
    );
  };
}

function combinedObject(userId) {
  return function getUserByIdWithOrganization(userId) {
    const user = grtUserById(userId);
    let combinedUserObject = getOrganizationById(user.OrganizationId).then(
      (orgObj) => (user.organization = orgObj)
    );
    return combinedUserObject;
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};
