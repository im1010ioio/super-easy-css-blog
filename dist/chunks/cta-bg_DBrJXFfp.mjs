const ctaBg = new Proxy({"src":"/_astro/cta-bg.DliECPh_.png","width":1920,"height":640,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/cta-bg.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/cta-bg.png");
							return target[name];
						}
					});

export { ctaBg as default };
