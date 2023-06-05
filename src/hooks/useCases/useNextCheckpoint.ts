const textPressUntil = "Aperte até o "

export function useNextCheckpoint(counter: number, checkPointSecret: number, checkPoints: number[]){
    var nextCheckpoint = ""
    var checkPointCounter = 0
    var secret = false

    for (var i = 0; i < checkPoints.length; i++) {
        if (counter < checkPoints[i]){
            checkPointCounter = checkPoints[i]
            break;
        }
    }

    if (counter >= checkPointSecret) {
        nextCheckpoint = "Chegou ao segredo!"
        secret = true
    } else if (checkPointCounter == 0) nextCheckpoint = "Você chegou ao final!(?)"
    else nextCheckpoint = textPressUntil + checkPointCounter

    return {
        nextCheckpoint,
        secret
    }
}
