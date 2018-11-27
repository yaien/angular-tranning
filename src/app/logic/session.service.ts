import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SessionService {
  private readonly key = "SESSION";
  constructor() {}

  set(id: number) {
    let value = btoa(id.toString());
    localStorage.setItem(this.key, value);
  }

  get() {
    let value = localStorage.getItem(this.key);
    if (value) return parseInt(atob(value));
    return null;
  }

  reset() {
    localStorage.removeItem(this.key);
  }
}
