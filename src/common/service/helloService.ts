export default class HelloService {
    public greet(): string {
        const hours: number = new Date().getHours();
        let result: string = ""

        if (6 < hours && hours <= 11) {
            result = "Good morning";
        } else if (11 < hours && hours <= 15) {
            result = "Good afternoon";
        } else if (15 < hours && hours <= 21) {
            result = "Good evening";
        } else if (21 < hours && hours <= 23 || hours < 5) {
            result = "Good night";
        }

        console.log(result);
        return result;
    }
}
