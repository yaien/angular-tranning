import {
  trigger,
  transition,
  style,
  animate,
  state,
  query,
  animateChild,
  group
} from "@angular/animations";

export const fadeLeft = trigger("fadeLeft", [
  state("void", style({ opacity: 0, transform: "translateX(-5%)" })),
  transition("void <=> *", [animate(300)])
]);

export const slideInAnimations = trigger("routeAnimations", [
  transition("HomePage <=> ProfilePage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({ position: "absolute", top: 0, right: 0, width: "100%" })
    ]),
    query(":enter", [style({ right: "150%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("500ms ease-out", style({ right: "100%" }))]),
      query(":enter", [animate("500ms ease-out", style({ right: "0%" }))])
    ]),
    query(":enter", animateChild())
  ])
]);
