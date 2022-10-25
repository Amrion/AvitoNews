export const convertTime = (time) => {
    const date = new Date(time*1000);
    const options = { hour: 'numeric', minute: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleString('ru-RU', options)
}
