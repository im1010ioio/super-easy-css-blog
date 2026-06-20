const step1 = new Proxy({"src":"/_astro/step-1.C6jeUOkY.png","width":1480,"height":846,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/step-1.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/step-1.png");
							return target[name];
						}
					});

export { step1 as default };
