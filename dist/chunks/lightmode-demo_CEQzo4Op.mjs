const lightmodeDemo = new Proxy({"src":"/_astro/lightmode-demo.Cf0H5x8f.png","width":1920,"height":1240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/lightmode-demo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/lightmode-demo.png");
							return target[name];
						}
					});

export { lightmodeDemo as default };
