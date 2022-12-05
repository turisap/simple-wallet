import type { DebouncedFunc } from "lodash";
import throttle from "lodash.throttle";
import { runInAction } from "mobx";

import { THROTTLE_SEARCH } from "../constants";

//@TODO add to all stores
export class LifeCycle {
  protected throttledLoading: DebouncedFunc<(val: boolean) => void>;
  protected isLoading = true;

  constructor() {
    this.throttledLoading = throttle((val: boolean) => {
      runInAction(() => {
        this.isLoading = val;
      });
    }, THROTTLE_SEARCH);
  }
}
