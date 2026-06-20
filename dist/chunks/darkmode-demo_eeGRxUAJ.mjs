const darkmodeDemo = new Proxy({"src":"/_astro/darkmode-demo.BSmpsGTW.png","width":1921,"height":1240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/darkmode-demo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/darkmode-demo.png");
							return target[name];
						}
					});

export { darkmodeDemo as default };
