export default function convertToHumanTime(duration) {
    let second = parseInt((duration / 1000) % 60, 10);
    const minutes = parseInt((duration / (1000 * 60)) % 60, 10);

    second = (second < 10) ? `0${second}` : second;

    return `${minutes}:${second}`;
}
