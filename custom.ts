enum Choice {
    C,
    D
}

//% weight=100 color=#ff69b4 icon=""
namespace tapis {

    
    let boutonPrecedentC = 1
    let boutonPrecedentD = 1
    let moteurON = false

    // Initialise les résistances pull-up pour les boutons
    export function init(): void {
        pins.setPull(DigitalPin.P13, PinPullMode.PullUp) // bouton C
        pins.setPull(DigitalPin.P14, PinPullMode.PullUp) // bouton D
    }

    //% block="Bouton %choice ON/OFF"
    export function bouton(choice: Choice) {

        if (choice == Choice.C) {
            let boutonActuel = pins.digitalReadPin(DigitalPin.P13)
            // détection appui unique (transition 0 → 1)
            if (boutonPrecedentC == 1 && boutonActuel == 0) {
                moteurON = !moteurON
                if (moteurON) {
                    pins.digitalWritePin(DigitalPin.P15, 1)
                    pins.digitalWritePin(DigitalPin.P16, 0)
                } else {
                    pins.digitalWritePin(DigitalPin.P15, 0)
                    pins.digitalWritePin(DigitalPin.P16, 0)
                }
            }
            boutonPrecedentC = boutonActuel
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
