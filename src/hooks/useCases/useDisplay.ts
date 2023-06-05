export function useDisplay(
    checkPoint: number, 
    counter: number,
    prefix: string,
    value: string,
){
    var display = false
    var displayPrefix = false
    if(counter >= checkPoint) display = true

    return {
        display,
        displayPrefix,
        prefix,
        value
    }
}
