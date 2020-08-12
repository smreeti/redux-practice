import store from "../store";

const dispatchBtnAction = (event) => {
    const amount = event.target.dataset.amount;

    store.dispatch(withdrawAmount(amount))
};

const withdrawAmount = (amount) => {
  return{
      type: "WITHDRAW_MONEY",
      amount: amount
  };
};

export default dispatchBtnAction;