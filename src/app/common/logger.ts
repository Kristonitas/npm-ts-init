export class Logger {
	public static log(...message: any[]): void {
		console.log(...message);
	}

	public static logTask(name: string, ...message: any[]): void {
		Logger.log(`${name}:`, ...message);
	}
}
