const overview = new Proxy({"src":"/_astro/overview.C8vc0vck.png","width":882,"height":520,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/overview.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/overview.png");
							return target[name];
						}
					});

export { overview as default };
