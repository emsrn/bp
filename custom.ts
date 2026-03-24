enum Choice {
    C,
    D
}
//% weight=100 color=#ff69b4 icon=""
namespace tapis {

    //% block= "Bouton %choice ON/OFF"
    export function bouton (choice: Choice){
        if (choice == Choice.C) {
            pins.digitalWritePin(DigitalPin.P14, 1)
        } else if (choice == Choice.D) {
            pins.digitalWritePin(DigitalPin.P13, 1)
        }

    }
}