const logActions = (store) => (next) => (actionInfo) => {
    console.log('Disparando: ', actionInfo);
    // Permitiendo que la acción pueda llegar al store
    next(actionInfo);
}

export default logActions;