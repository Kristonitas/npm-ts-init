import { Logger } from "../src/app/common/logger";

describe("logger", () => {
	it("should write to console.log", () => {
		const logMock = jest.spyOn(console, "log");

		Logger.logTask("test", { data: null });

		expect(logMock).toHaveBeenCalledTimes(1);
		expect(logMock).toHaveBeenLastCalledWith("test:", { data: null });

		logMock.mockRestore();
	});
});
