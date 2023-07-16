export default {
	files: ["./test/**/*.test.ts"],
	typescript: {
		extensions: ["ts"],
		rewritePaths: {
			"src/": "target/src/",
			"test/": "target/test/",
		},
		compile: false,
	},
};
