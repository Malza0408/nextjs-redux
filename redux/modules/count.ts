import { createActions, handleActions } from "redux-actions";
import { put, takeLatest } from "redux-saga/effects";
import { CounterState } from "../../types/types";

const initialState: CounterState = {
  value: 0,
};

const prefix = "malza-blog/count";

export const { increase, decrease } = createActions("INCREASE", "DECREASE", {
  prefix,
});

const reducer = handleActions(
  {
    INCREASE: (state) => ({
      ...state,
      value: (state.value += 1),
    }),
    DECREASE: (state) => ({
      ...state,
      value: (state.value -= 1),
    }),
  },
  initialState,
  { prefix }
);

export default reducer;

export const { increaseNum } = createActions("INCREASE_NUM", {
  prefix,
});

export const { decreaseNum } = createActions("DECREASE_NUM", {
  prefix,
});

function* increaseSaga() {
  yield put(increase());
}

function* decreaseSaga() {
  yield put(decrease());
}

export function* countSaga() {
  yield takeLatest(`${prefix}/INCREASE_NUM`, increaseSaga);
  yield takeLatest(`${prefix}/DECREASE_NUM`, decreaseSaga);
}
