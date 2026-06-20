const step2 = new Proxy({"src":"/_astro/step-2.DCb_3ZC1.png","width":1440,"height":812,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/step-2.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/step-2.png");
							return target[name];
						}
					});

export { step2 as default };
