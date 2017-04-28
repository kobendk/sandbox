export default (state) => {
  return state.items.filter(item => ~item.name.indexOf(state.filter || ''));
}
