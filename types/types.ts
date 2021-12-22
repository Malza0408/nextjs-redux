export interface ActionProps {
  type: string;
}

export interface CounterState {
  value: number;
}

export interface RootState {
  counter: CounterState;
}
