const heroBgDark = new Proxy({"src":"/_astro/hero-bg-dark.lRMt-6du.png","width":1920,"height":820,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/hero-bg-dark.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/hero-bg-dark.png");
							return target[name];
						}
					});

export { heroBgDark as default };
