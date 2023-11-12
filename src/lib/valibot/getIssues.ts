export function getIssues(state: any) {
  return state.issues
    ? state.issues.reduce((accum: any, current: any) => {
        accum[current.path[0].key] = current.message;
        return accum;
      }, {})
    : {};
}
