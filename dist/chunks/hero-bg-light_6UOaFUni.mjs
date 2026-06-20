const heroBgLight = new Proxy({"src":"/_astro/hero-bg-light.DDNToVKV.png","width":1920,"height":856,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/hero-bg-light.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/hero-bg-light.png");
							return target[name];
						}
					});

export { heroBgLight as default };
