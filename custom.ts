enum Choice {
    C,
    D
}

//% weight=100 color=#ff69b4 icon=""
namespace convoyeur {

    //lit état BP au démarrage (==1) 
    let boutonPrecedentC = pins.digitalReadPin(DigitalPin.P13)
    let boutonPrecedentD = pins.digitalReadPin(DigitalPin.P14)
    //initialise le moteur OFF 
    let moteurON = false

    // initialise les résistances pull-up pour les BP 
    export function init() {
        pins.setPull(DigitalPin.P13, PinPullMode.PullUp) // bouton C
        pins.setPull(DigitalPin.P14, PinPullMode.PullUp) // bouton D
    }

    //% block="Bouton %choice ON/OFF"
    export function bouton(choice: Choice) {

        if (choice == Choice.C) {
            let boutonActuel = pins.digitalReadPin(DigitalPin.P13)
            // détection premier appui (transition 0 → 1) 
            if (boutonPrecedentC == 1 && boutonActuel == 0) {
                moteurON = !moteurON 
                if (moteurON) {
                    pins.digitalWritePin(DigitalPin.P15, 1) //active le moteur (=ON) 
                    pins.digitalWritePin(DigitalPin.P16, 0)
                //détection second appui 
                } else {
                    pins.digitalWritePin(DigitalPin.P15, 0) //désactive le moteur (=OFF) 
                    pins.digitalWritePin(DigitalPin.P16, 0)
                }
            }
            boutonPrecedentC = boutonActuel //garde en mémoire la valeur du dernier appui 
        }

        if (choice == Choice.D) {
            let boutonActuel = pins.digitalReadPin(DigitalPin.P14)
            if (boutonPrecedentD == 1 && boutonActuel == 0) {
                moteurON = !moteurON
                if (moteurON) {
                    pins.digitalWritePin(DigitalPin.P15, 1)
                    pins.digitalWritePin(DigitalPin.P16, 0)
                } else {
                    pins.digitalWritePin(DigitalPin.P15, 0)
                    pins.digitalWritePin(DigitalPin.P16, 0)
                }
            }
            boutonPrecedentD = boutonActuel
        }

    }
}
