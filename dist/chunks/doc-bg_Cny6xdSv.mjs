const docBg = new Proxy({"src":"/_astro/doc-bg.CXKAUfrL.png","width":1920,"height":855,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/doc-bg.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/chenyilin/Documents/GitHub/super-easy-css-blog/src/assets/doc-bg.png");
							return target[name];
						}
					});

export { docBg as default };
