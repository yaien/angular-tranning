import {
  trigger,
  transition,
  style,
  animate,
  state
} from "@angular/animations";

export const fadeLeft = trigger("fadeLeft", [
  state("void", style({ opacity: 0, transform: "translateX(-5%)" })),
  transition("void <=> *", [animate(300)])
]);
